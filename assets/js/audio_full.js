// --- VARIABEL GLOBAL ---
let audio = new Audio();
let playlistBab = [];       
let currentBabIndex = -1;   
let isPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
    if (typeof dataNadhom === 'undefined') {
        alert("Database Nadhom belum dimuat!");
        return;
    }
    siapkanPlaylistBab();
    renderPlaylistBab();
});

// --- 1. SIAPKAN DATA BAB (FIX: SATUIN KHATIMAH) ---
function siapkanPlaylistBab() {
    playlistBab = [];
    let babBaru = null;

    dataNadhom.forEach((item, index) => {
        let rawHeader = item.header;
        
        // Normalisasi Muqaddimah
        if (!rawHeader && item.id <= 19) rawHeader = "مُقَدِّمَة";
        
        // LOGIKA PENTING: Cek apakah header berisi kata Khatimah
        let isKhatimah = rawHeader && (rawHeader.includes("الْخَاتِمَة") || rawHeader.includes("خاتمة"));

        // Buat bab baru hanya jika ada header, bukan Khatimah, dan bukan header yang sama
        if (rawHeader && !isKhatimah && rawHeader !== (babBaru ? babBaru.title : "")) { 
            if (babBaru) {
                babBaru.endIndex = index - 1;
                playlistBab.push(babBaru);
            }
            babBaru = {
                title: rawHeader, 
                startIndex: index,
                endIndex: null,
                id: playlistBab.length 
            };
        } else {
            // Jika ini teks biasa atau teks Khatimah, masukkan ke bab yang sedang aktif
            if (babBaru) {
                babBaru.endIndex = index;
            }
        }
    });

    if (babBaru) {
        babBaru.endIndex = dataNadhom.length - 1;
        playlistBab.push(babBaru);
    }
}

// --- 2. TAMPILKAN DAFTAR ---
function renderPlaylistBab() {
    const container = document.getElementById('playlist-container');
    let html = '';

    playlistBab.forEach((bab, index) => {
        let jumlahBait = (bab.endIndex - bab.startIndex) + 1;

        html += `
        <div class="list-group-item playlist-item p-3" id="bab-${index}" onclick="playBab(${index})">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <div class="me-3 text-success bg-light rounded-circle p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                    </div>
                    <div>
                        <h6 class="mb-1 fw-bold text-dark">${bab.title}</h6>
                        <small class="text-muted">Bab ke-${index} • ${jumlahBait} Bait</small>
                    </div>
                </div>
                <div class="icon-status text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

// --- 3. LOGIKA PEMUTAR 1 FILE PER BAB ---
function playBab(index) {
    if (currentBabIndex === index) {
        togglePlay();
        return;
    }

    currentBabIndex = index;
    const bab = playlistBab[index];

    document.querySelectorAll('.playlist-item').forEach(el => {
        el.classList.remove('active', 'border-start', 'border-5', 'border-success');
        el.querySelector('.icon-status').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    });

    const activeEl = document.getElementById(`bab-${index}`);
    if (activeEl) {
        activeEl.classList.add('active', 'border-start', 'border-5', 'border-success');
        activeEl.querySelector('.icon-status').innerHTML = `<div class="spinner-grow spinner-grow-sm text-success" role="status"></div>`;
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    document.getElementById('player-title').innerText = bab.title;
    document.getElementById('player-subtitle').innerText = "Memutar Full Bab";
    const badge = document.getElementById('player-status');
    badge.innerText = "Memuat...";
    badge.className = "badge bg-warning text-dark rounded-pill";

    audio.src = `assets/audio/bab_${index}.mp3`;
    
    audio.play()
        .then(() => {
            isPlaying = true;
            updatePlayButton('pause');
            badge.innerText = "Memutar";
            badge.className = "badge bg-success rounded-pill";
        })
        .catch(err => {
            console.log("File Audio Bab tidak ditemukan: bab_" + index + ".mp3");
            badge.innerText = "File Tidak Ada";
            badge.className = "badge bg-danger rounded-pill";
            isPlaying = false;
            updatePlayButton('play');
        });
}

audio.addEventListener('ended', () => {
    if (currentBabIndex < playlistBab.length - 1) {
        playBab(currentBabIndex + 1);
    } else {
        document.getElementById('player-status').innerText = "Khatam";
        isPlaying = false;
        updatePlayButton('play');
    }
});

function prevBait() {
    if (currentBabIndex > 0) {
        playBab(currentBabIndex - 1);
    }
}

function nextBait() {
    if (currentBabIndex < playlistBab.length - 1) {
        playBab(currentBabIndex + 1);
    }
}

function togglePlay() {
    if (!audio.src || audio.src === "") {
        if(playlistBab.length > 0) playBab(0);
        return;
    }
    if (audio.paused) {
        audio.play();
        isPlaying = true;
        updatePlayButton('pause');
        document.getElementById('player-status').innerText = "Memutar";
    } else {
        audio.pause();
        isPlaying = false;
        updatePlayButton('play');
        document.getElementById('player-status').innerText = "Jeda";
    }
}

function updatePlayButton(state) {
    const btn = document.getElementById('btn-main-play');
    if (state === 'pause') {
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
    } else {
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    }
}
