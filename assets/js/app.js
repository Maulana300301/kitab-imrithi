// --- VARIABEL GLOBAL ---
const container = document.getElementById('list-container');
const judulNavbar = document.getElementById('judul-navbar');
const btnHafalan = document.getElementById('btn-hafalan');

// --- 1. SETUP SAAT LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    let savedFont = localStorage.getItem('ukuranFont');
    let currentFont = savedFont ? parseInt(savedFont) : 26;
    if (currentFont < 16) currentFont = 16;
    updateGlobalStyle(currentFont);

    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');

    let showTerjemah = localStorage.getItem('showTerjemah') !== 'false';
    updateTerjemahUI(showTerjemah);

    let isHafalan = localStorage.getItem('modeHafalan') === 'true';
    if (isHafalan) document.body.classList.add('mode-hafalan-aktif');
    updateIkonHafalan(isHafalan);

    tampilkanNadhom();
    setupPengaturan(currentFont);
    setupTombolHafalan();
});

// --- 2. MENAMPILKAN DATA ---
function tampilkanNadhom() {
    const params = new URLSearchParams(window.location.search);
    let mulai = parseInt(params.get('mulai')) || 0;
    let akhir = parseInt(params.get('akhir')) || 19;

    const dataTerpilih = dataNadhom.filter(item => item.id >= mulai && item.id <= akhir);

    let titleText = "Imrithi";
    if (mulai <= 1) titleText = "مُقَدِّمَة";
    else if (dataTerpilih.length > 0 && dataTerpilih[0].header) titleText = dataTerpilih[0].header;
    
    if (judulNavbar) {
        judulNavbar.innerHTML = titleText;
        judulNavbar.style.fontFamily = "'Amiri', serif";
    }

    if (dataTerpilih.length === 0) {
        container.innerHTML = `<div class="text-center mt-5"><h5 class="text-muted">Bab ini belum diinput.</h5></div>`;
        return;
    }

    const listFav = getFavorit();
    const isHafalan = document.body.classList.contains('mode-hafalan-aktif');
    let html = '<div style="height: 5px;"></div>';

    dataTerpilih.forEach(item => {
        const isFav = listFav.includes(item.id);
        const iconFav = isFav 
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffc107" stroke="#ffc107" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>` 
            : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#9da5b1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;

        // [TASHIH LOGIKA] Hanya tampil jika ID > 0 DAN ID habis dibagi 5
        let badgeHtml = (item.id > 0 && item.id % 5 === 0) 
            ? `<span class="posisi-badge">#${item.id}</span>` 
            : '';

        const teksAsli = item.arab;
        const teksSensor = generateCloze(item.arab);
        let teksTampil = isHafalan ? teksSensor : teksAsli;

        html += `
        <div class="card nadhom-card border-0 shadow-sm mb-2" id="bait-${item.id}">
            <div class="card-body">
                
                ${badgeHtml}

                <div class="posisi-bookmark">
                    <button class="btn btn-link p-0 no-outline" onclick="toggleFavorit(${item.id})">
                         ${iconFav}
                    </button>
                </div>

                <div class="text-center arabic-box">
                    <p class="teks-arab mb-0" 
                       dir="rtl"
                       id="teks-${item.id}"
                       onclick="klikTeks(${item.id})">
                       ${teksTampil}
                    </p>
                    <textarea id="data-asli-${item.id}" style="display:none;">${teksAsli}</textarea>
                    <textarea id="data-sensor-${item.id}" style="display:none;">${teksSensor}</textarea>
                </div>

                <div class="terjemah-container mt-2">
                    <p class="text-center terjemah-text mb-0">${item.terjemah}</p>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
    
    if (window.location.hash) {
        setTimeout(() => {
            const idTarget = window.location.hash.substring(1);
            const el = document.getElementById(idTarget);
            if(el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('active-highlight');
                setTimeout(() => el.classList.remove('active-highlight'), 2000);
            }
        }, 500);
    }
}

// --- 3. LOGIKA SENSOR ---
function generateCloze(teks) {
    let separator = teks.includes('۞') ? '۞' : '*';
    let parts = teks.split(separator);
    if (parts.length < 2) return potongTeks(teks, 2, 1);
    let shatr1 = potongTeks(parts[0], 2, 0); 
    let shatr2 = potongTeks(parts[1], 0, 1); 
    return `${shatr1} ${separator} ${shatr2}`;
}

function potongTeks(kalimat, keepDepan, keepBelakang) {
    let kata = kalimat.trim().split(/\s+/);
    if (kata.length <= (keepDepan + keepBelakang)) return kalimat;
    let depan = ""; if (keepDepan > 0) depan = kata.slice(0, keepDepan).join(' ');
    let belakang = ""; if (keepBelakang > 0) belakang = kata.slice(kata.length - keepBelakang).join(' ');
    if (keepDepan > 0 && keepBelakang > 0) return `${depan} ... ${belakang}`;
    else if (keepDepan > 0) return `${depan} ...`;
    else if (keepBelakang > 0) return `... ${belakang}`;
    else return `...`;
}

function klikTeks(id) {
    const isHafalan = document.body.classList.contains('mode-hafalan-aktif');
    if (!isHafalan) return;
    const p = document.getElementById(`teks-${id}`);
    const asli = document.getElementById(`data-asli-${id}`).value;
    const sensor = document.getElementById(`data-sensor-${id}`).value;
    if (p.innerText.includes("...")) {
        p.innerText = asli;
        p.style.color = "#198754";
    } else {
        p.innerText = sensor;
        p.style.color = "";
    }
}

// --- 4. TOMBOL HAFALAN NAVBAR ---
function setupTombolHafalan() {
    if(!btnHafalan) return;
    btnHafalan.addEventListener('click', () => {
        let isActive = document.body.classList.contains('mode-hafalan-aktif');
        if (isActive) {
            document.body.classList.remove('mode-hafalan-aktif');
            localStorage.setItem('modeHafalan', 'false');
            updateIkonHafalan(false);
        } else {
            document.body.classList.add('mode-hafalan-aktif');
            localStorage.setItem('modeHafalan', 'true');
            updateIkonHafalan(true);
        }
        tampilkanNadhom();
    });
}

function updateIkonHafalan(isActive) {
    if(!btnHafalan) return;
    btnHafalan.innerHTML = isActive 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
}

// --- 5. PENGATURAN ---
function setupPengaturan(initialFont) {
    const fontRange = document.getElementById('fontRange');
    const fontDisplay = document.getElementById('font-val-display');
    if (fontRange) {
        fontRange.value = initialFont;
        if(fontDisplay) fontDisplay.innerText = initialFont + "px";
        fontRange.addEventListener('input', function() {
            let val = parseInt(this.value);
            if(fontDisplay) fontDisplay.innerText = val + "px";
            updateGlobalStyle(val);
        });
    }
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.checked = (localStorage.getItem('theme') === 'dark');
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    const terjemahSwitch = document.getElementById('terjemahSwitch');
    if (terjemahSwitch) {
        let isShow = localStorage.getItem('showTerjemah') !== 'false';
        terjemahSwitch.checked = isShow;
        terjemahSwitch.addEventListener('change', function() {
            updateTerjemahUI(this.checked);
        });
    }
}

function updateTerjemahUI(isShow) {
    localStorage.setItem('showTerjemah', isShow);
    if (isShow) {
        document.body.classList.remove('hide-terjemah');
    } else {
        document.body.classList.add('hide-terjemah');
    }
}

// --- 6. CSS FINAL (CLEAN NO BACKGROUND) ---
function updateGlobalStyle(size) {
    let styleEl = document.getElementById('dynamic-font-style');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-font-style';
        document.head.appendChild(styleEl);
    }
    
    styleEl.innerHTML = `
        /* ANIMASI BOOKMARK POP */
        @keyframes bookmarkPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.35); }
            100% { transform: scale(1); }
        }
        .bookmark-active svg {
            animation: bookmarkPop 0.3s ease-out;
        }

        /* NOMOR BAIT: Teks Emas Soft, Tanpa Kotak */
        .posisi-badge { 
            position: absolute; 
            top: 5px; 
            left: 10px; 
            font-size: 0.8rem; 
            font-weight: 700;
            color: #d4af37; /* Emas */
            opacity: 0.85;  /* Soft */
            z-index: 5;
            font-family: 'Segoe UI', sans-serif;
        }

        /* Bookmark Kanan */
        .posisi-bookmark { position: absolute; top: 2px; right: 2px; z-index: 5; }
        
        /* CARD COMPACT */
        .nadhom-card { position: relative; border-radius: 12px !important; margin-bottom: 8px !important; border-left: 4px solid rgba(255, 193, 7, 0.75) !important; transition: transform 0.2s; }
        .card-body { padding: 0.8rem 0.5rem 0.6rem 0.5rem !important; }

        /* ARABIC TEXT */
        .teks-arab { 
            font-size: ${size}px !important; 
            line-height: 2.0 !important;
            cursor: pointer;
            transition: color 0.2s;
            max-width: 95%; margin: 0 auto;
            margin-top: 0.2rem;
        }

        /* TERJEMAH */
        .terjemah-container { background-color: rgba(25, 135, 84, 0.04); border-radius: 8px; padding: 8px 10px !important; margin-top: 8px !important; }
        .terjemah-text { font-family: 'Segoe UI', sans-serif; font-weight: 500 !important; color: #4F5B55 !important; line-height: 1.4; font-size: 0.85rem; }
        
        /* DARK MODE */
        body.dark-mode .terjemah-container { background-color: rgba(255, 255, 255, 0.05); }
        body.dark-mode .terjemah-text { color: #d0d0d0 !important; }

        /* HIDE TERJEMAH */
        body.hide-terjemah .terjemah-text, body.hide-terjemah .terjemah-container { display: none !important; margin: 0 !important; padding: 0 !important; height: 0; }
        body.hide-terjemah .arabic-box { margin-bottom: 0 !important; padding-bottom: 0 !important; }
        body.hide-terjemah .card-body { padding-bottom: 0.8rem !important; }

        /* Utility */
        button:focus, a:focus, .btn:focus { outline: none !important; box-shadow: none !important; }
        * { -webkit-tap-highlight-color: transparent !important; }
        .active-highlight { border: 2px solid #198754 !important; border-left: 4px solid #198754 !important; }
    `;
    localStorage.setItem('ukuranFont', size);
}

function getFavorit() {
    const data = localStorage.getItem('imrithi_favorit');
    return data ? JSON.parse(data) : [];
}

function toggleFavorit(id) {
    let list = getFavorit();
    const index = list.indexOf(id);
    if (index === -1) {
        list.push(id);
        if (navigator.vibrate) navigator.vibrate(50);
    } else {
        list.splice(index, 1);
    }
    localStorage.setItem('imrithi_favorit', JSON.stringify(list));
    tampilkanNadhom();
}
