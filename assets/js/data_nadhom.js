const dataNadhom = [
    // --- PEMBUKA (BISMILLAH) ---
    {
        id: 0,
        arab: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
        terjemah: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang."
    },

    // --- BAB: MUQADDIMAH (1-19) ---
    {
        id: 1,
        arab: "اَلْحَمْدُ ِللهِ الَّذِى قَدْ وَفَقَ <span class='pemisah-bait'>۞</span> لِلْعِلْمِ خَيْرَ خَلْقِهِ وَللِتُّقَى",
        terjemah: "Segala puji bagi Allah yang telah memberi taufiq kepada sebaik-baik makhluk-Nya untuk (memahami) ilmu dan taqwa."
    },
    {
        id: 2,
        arab: "حَتَّى نَحَتْ قُلُوبُهُمْ لِنَحْوِهِ <span class='pemisah-bait'>۞</span> فَمِنْ عَظِيْمِ شَأْنِهِ لَمْ تَحْوِهِ",
        terjemah: "Sehingga hati mereka condong kepada-Nya, maka dari agungnya Dzat-Nya, hati tidak mampu mencakup-Nya."
    },
    {
        id: 3,
        arab: "فَأُشْرِبَتْ مَعْنَى ضَمِيْرِ الشَّانِ <span class='pemisah-bait'>۞</span> فَأُعْرِبَتْ فِي الْحَانِ بِاْلأَلْحَانِ",
        terjemah: "Maka hati mereka diserapi makna Dhomir Sya'n (Tauhid), lalu seketika itu diungkapkan dengan lisan yang fasih."
    },
    {
        id: 4,
        arab: "ثُمَ الصَّلاَةُ مَعْ سَلاَمٍ لاَئِقِ <span class='pemisah-bait'>۞</span> عَلَى النَّبِيِّ اَفْصَحِ اْلخَلاَئِقِ",
        terjemah: "Kemudian shalawat serta salam yang layak semoga tercurah atas Nabi, makhluk yang paling fasih."
    },
    {
        id: 5,
        arab: "مُحَمَّدٍ وَالاَلِ وَاْلاَصْحَابِ <span class='pemisah-bait'>۞</span> مَنْ اَتْقَنُوا الْقُرْاَنَ بِاْلاِعْرَابِ",
        terjemah: "(Yaitu) Nabi Muhammad, keluarga dan sahabatnya, yaitu mereka yang mengokohkan Al-Qur'an dengan i'rab."
    },
    {
        id: 6,
        arab: "وَبَعْدُ فَاعْلَمْ اَنهُ لَمَّا اقْتَصَرْ <span class='pemisah-bait'>۞</span> جُلُّ اْلوَرَى عَلىَ اْلكَلاَمِ مُخْتَصَرْ",
        terjemah: "Dan setelah itu ketahuilah, bahwa ketika mayoritas manusia menyukai ucapan (kitab) yang ringkas."
    },
    {
        id: 7,
        arab: "وَكَانَ مَطْلُوْباً اَشَدَّ الطَّلَبِ <span class='pemisah-bait'>۞</span> مِنَ اْلوَرَىْ حِفْظُ اللِّسَانِ اْلعَرَبِى",
        terjemah: "Dan menjaga lisan Arab itu merupakan tuntutan yang sangat diharapkan oleh manusia."
    },
    {
        id: 8,
        arab: "كَىْ يَفْهَمُوْا مَعَانِيَ اْلقُرْاَنِ <span class='pemisah-bait'>۞</span> وَالسُّنَةِ الدَّقِيْقَةِ اْلمَعَانِى",
        terjemah: "Supaya mereka memahami makna-makna Al-Qur'an dan Sunnah yang lembut (detail) maknanya."
    },
    {
        id: 9,
        arab: "وَالنَّحْوُ اَوْلَى اَوّلاً اَنْ يُعْلَمَا <span class='pemisah-bait'>۞</span> اِذِ اْلكَلاَمُ دُوْنَهُ لَنْ يُفْهَمَا",
        terjemah: "Dan Ilmu Nahwu itu lebih utama untuk dipelajari pertama kali, karena kalam tanpanya tidak akan bisa dipahami."
    },
    {
        id: 10,
        arab: "وَكَانَ خَيْرُ كُتْبِهِ الصَّغِيْرَةْ <span class='pemisah-bait'>۞</span> كُرَّسَةً لَطِيْفَةً شَهِيْرَةْ",
        terjemah: "Dan sebaik-baik kitab nahwu yang kecil adalah kitab kecil yang lembut (isinya) lagi mashur."
    },
    {
        id: 11,
        arab: "فِى عُرْبِهَا وَعُجْمِهَا وَالرُّوْمِ <span class='pemisah-bait'>۞</span> اَلَّفَهَا الْحَبْرُ ابْنُ اَجُرُوْمِ",
        terjemah: "Di tanah Arab, Ajam, dan Romawi, yang dikarang oleh orang pandai yaitu Ibnu Ajurrum."
    },
    {
        id: 12,
        arab: "وَانْتَفَعَتْ اَجِلَةٌ بِعِلْمِهَا <span class='pemisah-bait'>۞</span> مَعْ مَا تَرَاهُ مِنْ لَطِيْفِ حَجْمِهَا",
        terjemah: "Dan banyak orang-orang mulia mengambil manfaat dari ilmunya, walaupun kita melihat kecil ukurannya."
    },
    {
        id: 13,
        arab: "نَظَمْتُهَا نَظْماً بَدِيْعاً مُقْتَدِى <span class='pemisah-bait'>۞</span> بِاْلاَصْلِ فِى تَقْرِيْبِهِ لِلْمُبْتَدِى",
        terjemah: "Saya menadzomkannya dengan nadzom yang indah yang mengikuti kitab asli (Jurumiyah) dalam memudahkan bagi pemula."
    },
    {
        id: 14,
        arab: "وَقَدْ حَذَفْتُ مِنْهُ مَا عَنْهُ غِنَى <span class='pemisah-bait'>۞</span> وَزِدْتُهُ فَوَائِداً بِهَا الْغِنَى",
        terjemah: "Dan aku buang sesuatu yang tidak dibutuhkan (dari kitab asal), dan saya menambahkan faidah-faidah yang dibutuhkan."
    },
    {
        id: 15,
        arab: "مُتَمِّماً لِغَالِبِ اْلاَبْوَابِ <span class='pemisah-bait'>۞</span> فَجَاءَ مِثْلَ الشَّرْحِ لِلْكِتَابِ",
        terjemah: "Serta menyempurnakan mayoritas bab, maka nadzom ini datang seperti syarah (penjelas) bagi kitab asalnya."
    },
    {
        id: 16,
        arab: "سُئِلْتُ فِيْهِ مِنْ صَدِيْقٍ صَادِقِ <span class='pemisah-bait'>۞</span> يَفْهَمُ قَوْلِى لاِعْتِقَادٍ وَاثِقِ",
        terjemah: "Saya diminta (mengarang) oleh seorang teman yang jujur (niatnya), yang paham ucapanku karena itikad (keyakinan) yang kuat."
    },
    {
        id: 17,
        arab: "اِذِ اْلفَتَى حَسْبَ اعْتِقَادِهِ رُفِعْ <span class='pemisah-bait'>۞</span> وَكُلُّ مَنْ لَمْ يَعْتَقِدْ لَمْ يَنْتَفِعْ",
        terjemah: "Karena seorang pemuda itu diangkat derajatnya menurut itikadnya, dan setiap orang yang tidak beritikad (yakin) tidak akan mendapat manfaat."
    },
    {
        id: 18,
        arab: "فَنَسْأَلُ اْلمَنَّانَ اَنْ يُجِيْرَنَا <span class='pemisah-bait'>۞</span> مِنَ الرِّيَاءِ مُضَاعِفاً اُجُوْرَنَا",
        terjemah: "Maka kita meminta kepada Dzat Maha Pemberi untuk menyelamatkan kita dari riya', serta melipatgandakan pahala kita."
    },
    {
        id: 19,
        arab: "وَاَنْ يَكُوْنَ نَافِعاً بِعِلْمِهِ <span class='pemisah-bait'>۞</span> مَنِ اعْتَنَى بِحِفْظِهِ وَفَهْمِهِ",
        terjemah: "Dan semoga nadzom ini bermanfaat ilmunya bagi orang yang sungguh-sungguh menghafal dan memahaminya."
    },
        // --- BAB: AL-KALAM (20-26) ---
    {
        id: 20,
        header: "باب الكلام",  // <--- INI TAMBAHANNYA (JUDUL BAB)
        arab: "كَلاَمُهُمْ لَفْظٌ مُفِيْدٌ مُسْنَدُ <span class='pemisah-bait'>۞</span> وَالْكَلِمَةُ اللَّفْظُ الْمُفِيْدُ الْمُفْرَدُ",
        terjemah: "Kalam menurut ulama Nahwu adalah lafadz yang memberi faedah serta musnad. Dan Kalimah adalah lafadz mufrad yang memberi faedah."
    },
    {
        id: 21,
        arab: "لاِسْمٍ وَفِعْلٍ ثُمَّ حَرْفٍ تَنْقَسِمْ <span class='pemisah-bait'>۞</span> وَهَذِهِ ثَلاَثُهَا هِيَ الْكَلِمْ",
        terjemah: "Kalimah terbagi menjadi tiga: Isim, Fi'il, dan Huruf. Ketiga inilah yang disebut Kalim."
    },
    {
        id: 22,
        arab: "وَالْقَوْلُ لَفْظٌ قَدْ أَفَادَ مُطْلَقَا <span class='pemisah-bait'>۞</span> كَقُمْ وَقَدْ وَإِنَّ زَيْدًا ارْتَقَى",
        terjemah: "Dan Qaul adalah lafadz yang memberi faedah secara mutlak (baik mufid atau tidak). Contoh: 'Qum', 'Qad', dan 'Inna Zaidan Irtaqo'."
    },
    {
        id: 23,
        arab: "فَاْلاِسْمُ بِالتَّنْوِيْنِ وَالْخَفْضِ عُرِفْ <span class='pemisah-bait'>۞</span> وَحَرْفِ خَفْضٍ وَبِلاَمٍ وَأَلِفْ",
        terjemah: "Maka Isim itu dapat diketahui dengan adanya Tanwin, Khafadh (Jer), Huruf Khafadh, dan (Al) Alif Lam."
    },
    {
        id: 24,
        arab: "وَالْفِعْلُ مَعْرُوْفٌ بِقَدْ وَالسِّيْنِ <span class='pemisah-bait'>۞</span> وَتَاءِ تَأْنِيْثٍ مَعَ التَّسْكِيْنِ",
        terjemah: "Dan Fi'il itu dapat diketahui dengan adanya Qad, Sin, dan Ta' Ta'nits yang mati (sukun)."
    },
    {
        id: 25,
        arab: "وَتَا فَعَلْتَ مُطْلَقًا كَجِئْتَ لِي <span class='pemisah-bait'>۞</span> وَالنُّوْنِ وَالْيَا فِي افْعَلَنَّ وَافْعَلِي",
        terjemah: "Dan Ta' pada lafadz Fa'alta secara mutlak (Fa'alta/ti/tu), serta Nun Taukid dan Ya' Muannats Mukhatabah pada Fi'il Amar."
    },
    {
        id: 26,
        arab: "وَالْحَرْفُ لَمْ يَصْلُحْ لَهُ عَلاَمَةْ <span class='pemisah-bait'>۞</span> إِلاَّ انْتِفَا قَبُوْلِهِ الْعَلاَمَةْ",
        terjemah: "Dan Huruf itu tidak pantas baginya tanda (Isim/Fi'il), tandanya adalah tidak menerima tanda-tanda tersebut."
    },
    
    // --- BAB: AL-I'RAB (27-31) ---
    // Sesuai redaksi kitab pada gambar
    {
        id: 27,
        header: "باب الإعراب",
        arab: "إِعْرَابُهُمْ تَغْيِيْرُ آخِرِ الْكَلِمْ <span class='pemisah-bait'>۞</span> تَقْدِيْرًا أَوْ لَفْظًا لِعَامِلٍ عُلِمْ",
        terjemah: "I'rab adalah perubahan akhir kalimat, baik secara takdir atau lafadz, karena adanya amil yang masuk."
    },
    {
        id: 28,
        arab: "أَقْسَامُهُ أَرْبَعَةٌ فَلْتُعْتَبَرْ <span class='pemisah-bait'>۞</span> رَفْعٌ وَنَصْبٌ وَكَذَا جَزْمٌ وَجَرّ",
        terjemah: "Pembagian I'rab ada empat, maka perhatikanlah: Rafa', Nashab, Jazm, dan Jar (Khafadh)."
    },
    {
        id: 29,
        arab: "وَالْكُلُّ غَيْرَ الْجَزْمِ فِي اْلأَسْمَا يَقَعْ <span class='pemisah-bait'>۞</span> وَكُلُّهَا فِي الْفِعْلِ وَالْخَفْضُ امْتَنَعْ",
        terjemah: "Semua I'rab selain Jazm bisa masuk pada Isim. Dan semua I'rab bisa masuk Fi'il kecuali Khafadh (Jar)."
    },
    {
        id: 30,
        arab: "وَسَائِرُ اْلأَسْمَاءِ حَيْثُ لاَ شِبَهْ <span class='pemisah-bait'>۞</span> قَرَّبَهَا مِنَ الْحُرُوْفِ مُعْرَبَةْ",
        terjemah: "Dan seluruh Isim sekiranya tidak ada keserupaan yang mendekatkannya pada Huruf, maka ia Mu'rab."
    },
    {
        id: 31,
        arab: "وَغَيْرُ ذِي اْلأَسْمَاءِ مَبْنِيٌّ خَلاَ <span class='pemisah-bait'>۞</span> مُضَارِعٍ مِنْ كُلِّ نُوْنٍ قَدْ خَلاَ",
        terjemah: "Dan selain isim (fi'il & huruf) adalah Mabni, kecuali Fi'il Mudhari' yang sunyi dari nun (taukid/inats)."
    },

    // --- BAB: ALAMAT I'RAB (32-40) ---
    {
        id: 32,
        header: "باب علامات الإعراب",
        arab: "لِلرَّفْعِ مِنْهَا ضَمَّةٌ وَاوٌ أَلِفْ <span class='pemisah-bait'>۞</span> كَذَاكَ نُوْنٌ ثَابِتٌ لاَ مُنْحَذِفْ",
        terjemah: "Tanda Rafa' itu ada empat: Dhommah, Wawu, Alif, dan Nun yang tetap (tidak terbuang)."
    },
    {
        id: 33,
        arab: "فَالضَّمُّ فِي اسْمٍ مُفْرَدٍ كَأَحْمَدُ <span class='pemisah-bait'>۞</span> وَجَمْعِ تَكْسِيْرٍ كَجَاءَ اْلأَعْبُدُ",
        terjemah: "Dhommah (menjadi tanda rafa') pada Isim Mufrad seperti 'Ahmadu', dan Jamak Taksir seperti 'Ja'a Al-A'budu'."
    },
    {
        id: 34,
        arab: "وَجَمْعِ تَأْنِيْثٍ كَمُسْلِمَاتٍ <span class='pemisah-bait'>۞</span> وَكُلِّ فِعْلٍ مُعْرَبٍ كَيَأْتِيْ",
        terjemah: "Dan Jamak Muannats (Salim) seperti 'Muslimatin', dan setiap Fi'il Mu'rab (Mudhari' shahih akhir) seperti 'Ya'ti'."
    },
    {
        id: 35,
        arab: "وَالْوَاوُ فِي جَمْعِ الذُّكُوْرِ السَّالِمِ <span class='pemisah-bait'>۞</span> كَالصَّالِحُوْنَ هُمْ اُولُوا الْمَكَارِمِ",
        terjemah: "Dan Wawu (menjadi tanda rafa') pada Jamak Mudzakkar Salim, seperti 'As-Sholihuna' mereka pemilik kemuliaan."
    },
    {
        id: 36,
        arab: "كَمَا أَتَتْ فِي الْخَمْسَةِ اْلأَسْمَاءِ <span class='pemisah-bait'>۞</span> وَهِيَ الَّتِي تَأْتِيْ عَلَى الْوِلاَءِ",
        terjemah: "Sebagaimana Wawu juga ada pada Asma'ul Khomsah (Isim Lima), yaitu isim yang datang secara berturut-turut:"
    },
    {
        id: 37,
        arab: "أَبٌ أَخٌ حَمٌ وَفُوْ وَذُوْ جَرَى <span class='pemisah-bait'>۞</span> كُلٌّ مُضَافًا مُفْرَدًا مُكَبَّرًا",
        terjemah: "Abun, Akhun, Hamun, Fu, dan Dzu. Semuanya berlaku (dengan syarat) dimudhofkan, mufrad, dan mukabbar (bukan tashghir)."
    },
    {
        id: 38,
        arab: "وَفِي الْمُثَنَّى نَحْوُ زَيْدَانِ اْلأَلِفْ <span class='pemisah-bait'>۞</span> وَالنُّوْنُ فِي الْمُضَارِعِ الَّذِي عُرِفْ",
        terjemah: "Dan pada Isim Mutsanna seperti 'Zaidani' tandanya Alif. Dan Nun (menjadi tanda rafa') pada Fi'il Mudhari' yang diketahui..."
    },
    {
        id: 39,
        arab: "بِيَفْعَلَانِ تَفْعَلَانِ أَنْتُمَا <span class='pemisah-bait'>۞</span> وَيَفْعَلُوْنَ تَفْعَلُوْنَ مَعْهُمَا",
        terjemah: "...dengan wazan Yaf'alani, Taf'alani (kalian berdua), Yaf'aluna, Taf'aluna (beserta mereka)."
    },
    {
        id: 40,
        arab: "وَتَفْعَلِيْنَ تَرْحَمِيْنَ حَالِي <span class='pemisah-bait'>۞</span> وَاشْتَهَرَتْ بِخَمْسَةِ اْلأَفْعَالِ",
        terjemah: "Dan Taf'alina (seperti Tarhamina Hali). Dan (wazan-wazan ini) dikenal dengan sebutan Af'alul Khomsah."
    },
    
        // --- BAB: ALAMAT NASHAB (41-45) ---
    {
        id: 41,
        header: "باب علامات النصب",
        arab: "لِلنَّصْبِ خَمْسٌ وَهْيَ فَتْحَةٌ أَلِفْ <span class='pemisah-bait'>۞</span> كَسْرٌ وَيَاءٌ ثُمَّ نُوْنٌ تَنْحَذِفْ",
        terjemah: "Tanda Nashab itu ada lima, yaitu: Fathah, Alif, Kasrah, Ya', dan membuang Nun."
    },
    {
        id: 42,
        arab: "فَانْصِبْ بِفَتْحٍ مَا بِضَمٍّ قَدْ رُفِعْ <span class='pemisah-bait'>۞</span> إِلَّا كَهِنْدَاتٍ فَفَتْحُهُ مُنِعْ",
        terjemah: "Maka nashabkanlah dengan Fathah pada kalimat yang rafa'nya dengan Dhommah, kecuali seperti lafadz 'Hindatin' (Jamak Muannats Salim), maka fathahnya tercegah."
    },
    {
        id: 43,
        arab: "وَاجْعَلْ لِنَصْبِ الْخَمْسَةِ اْلأَسْمَا أَلِفْ <span class='pemisah-bait'>۞</span> وَانْصِبْ بِكَسْرٍ جَمْعَ تَأْنِيْثٍ عُرِفْ",
        terjemah: "Dan jadikanlah Alif sebagai tanda nashab untuk Asma'ul Khomsah. Dan nashabkanlah dengan Kasrah pada Jamak Muannats Salim."
    },
    {
        id: 44,
        arab: "وَالنَّصْبُ فِي اْلاِسْمِ الَّذِيْ قَدْ ثُنِّيَا <span class='pemisah-bait'>۞</span> وَجَمْعِ تَذْكِيْرٍ مُصَحَّحٍ بِيَا",
        terjemah: "Dan tanda nashab pada Isim Tatsniyah dan Jamak Mudzakkar Salim adalah dengan Ya'."
    },
    {
        id: 45,
        arab: "وَالْخَمْسَةُ اْلأَفْعَالِ حَيْثُ تَنْتَصِبْ <span class='pemisah-bait'>۞</span> فَحَذْفُ نُوْنِ الرَّفْعِ مُطْلَقًا يَجِبْ",
        terjemah: "Dan Af'alul Khomsah ketika tingkah nashab, maka wajib membuang Nun tanda rafa' secara mutlak."
    },

    // --- BAB: ALAMAT KHAFADH (46-54) ---
    {
        id: 46,
        header: "باب علامات الخفض",
        arab: "عَلَامَاتُ الْخَفْضِ الَّتِيْ بِهَا انْضَبَطْ <span class='pemisah-bait'>۞</span> كَسْرٌ وَيَاءٌ ثُمَّ فَتْحَةٌ فَقَطْ",
        terjemah: "Tanda-tanda khafadh yang telah ditetapkan ada tiga: Kasrah, Ya', dan Fathah saja."
    },
    {
        id: 47,
        arab: "فَاخْفِضْ بِكَسْرٍ مَا مِنَ اْلأَسْمَا عُرِفْ <span class='pemisah-bait'>۞</span> فِيْ رَفْعِهِ بِالضَّمِّ حَيْثُ يَنْصَرِفْ",
        terjemah: "Maka khafadhkanlah dengan Kasrah pada isim yang diketahui rafa'nya dengan dhommah, sekiranya ia munsharif (bisa menerima tanwin)."
    },
    {
        id: 48,
        arab: "وَاخْفِضْ بِيَاءٍ كُلَّ مَا بِهَا نُصِبْ <span class='pemisah-bait'>۞</span> وَالْخَمْسَةَ اْلأَسْمَا بِشَرْطِهَا تُصِبْ",
        terjemah: "Dan khafadhkanlah dengan Ya' pada setiap kalimat yang nashabnya dengan Ya' (Jamak Mudzakkar Salim & Isim Tatsniyah), serta Asma'ul Khomsah dengan syaratnya yang tepat."
    },
    {
        id: 49,
        arab: "وَاخْفِضْ بِفَتْحٍ كُلَّ مَا لَا يَنْصَرِفْ <span class='pemisah-bait'>۞</span> مِمَّا بِوَصْفِ الْفِعْلِ صَارَ يَتَّصِفْ",
        terjemah: "Dan khafadhkanlah dengan Fathah setiap Isim Ghairu Munsharif (tidak menerima tanwin), karena ia memiliki sifat yang menyerupai fi'il."
    },
    {
        id: 50,
        arab: "بِأَنْ يَحُوْزَ اْلاِسْمُ عِلَّتَيْنِ <span class='pemisah-bait'>۞</span> أَوْ عِلَّةً تُغْنِيْ عَنِ اثْنَتَيْنِ",
        terjemah: "Yaitu dengan terkumpulnya dua illat pada isim tersebut, atau satu illat yang menempati kedudukan dua illat."
    },
    {
        id: 51,
        arab: "فَأَلِفُ التَّأْنِيْثِ أَغْنَتْ وَحْدَهَا <span class='pemisah-bait'>۞</span> وَصِيْغَةُ الْجَمْعِ الَّذِيْ قَدِ انْتَهَى",
        terjemah: "Maka Alif Ta'nits itu mencukupi sendirian (sebagai illat), begitu juga Shighat Muntahal Jumu'."
    },
    {
        id: 52,
        arab: "وَالْعِلَّتَانِ الْوَصْفُ مَعْ عَدْلٍ عُرِفْ <span class='pemisah-bait'>۞</span> أَوْ وَزْنِ فِعْلٍ أَوْ بِنُوْنٍ وَأَلِفْ",
        terjemah: "Dan dua illat itu adalah Sifat beserta 'Adl yang diketahui, atau wazan fi'il, atau tambahan Nun dan Alif."
    },
    {
        id: 53,
        arab: "وَهَذِهِ الثَّلَاثُ تَمْنَعُ الْعَلَمْ <span class='pemisah-bait'>۞</span> وَزَادَ تَرْكِيْبًا وَأَسْمَاءَ الْعَجَمْ",
        terjemah: "Dan tiga illat ini juga mencegah tanwin pada Alam (Nama), ditambah Tarkib (Mazji) dan nama Ajam (Non-Arab)."
    },
    {
        id: 54,
        arab: "كَذَاكَ تَأْنِيْثٌ بِمَا عَدَا اْلأَلِفْ <span class='pemisah-bait'>۞</span> فَإِنْ يُضَفْ أَوْ يَأْتِ بَعْدَ أَلْ صُرِفْ",
        terjemah: "Demikian juga Ta'nits selain dengan Alif. Namun jika ia dimudhafkan atau kemasukan Al (Alif Lam), maka ia menjadi Munsharif (bisa dikasrah/tanwin)."
    },

    // --- BAB: ALAMAT JAZM (55-64) ---
    {
        id: 55,
        header: "باب علامات الجزم",
        arab: "وَالْجَزْمُ فِي اْلأَفْعَالِ بِالسُّكُوْنِ <span class='pemisah-bait'>۞</span> أَوْ حَذْفِ حَرْفِ عِلَّةٍ أَوْ نُوْنِ",
        terjemah: "Dan I'rab Jazm pada Fi'il itu tandanya dengan Sukun, atau membuang Huruf 'Illat, atau membuang Nun."
    },
    {
        id: 56,
        arab: "فَحَذْفُ نُوْنِ الرَّفْعِ قَطْعًا يَلْزَمُ <span class='pemisah-bait'>۞</span> فِي الْخَمْسَةِ اْلأَفْعَالِ حَيْثُ تُجْزَمُ",
        terjemah: "Maka membuang Nun tanda Rafa' itu hukumnya wajib, pada Af'alul Khomsah ketika tingkah Jazm."
    },
    {
        id: 57,
        arab: "وَبِالسُّكُوْنِ اجْزِمْ مُضَارِعًا سَلِمْ <span class='pemisah-bait'>۞</span> مِنْ كَوْنِهِ بِحَرْفِ عِلَّةٍ خُتِمْ",
        terjemah: "Dan jazmkanlah dengan Sukun pada Fi'il Mudhari' yang selamat (akhirnya), yaitu yang tidak diakhiri dengan Huruf 'Illat."
    },
    {
        id: 58,
        arab: "إِمَّا بِوَاوٍ أَوْ بِيَاءٍ أَوْ أَلِفْ <span class='pemisah-bait'>۞</span> وَجَزْمُ مُعْتَلٍّ بِهَا أَنْ تَنْحَذِفْ",
        terjemah: "Baik (illat) berupa Wawu, Ya', atau Alif. Dan tanda jazm fi'il mu'tal (akhir) tersebut adalah dengan membuangnya."
    },
    {
        id: 59,
        arab: "وَنَصْبُ ذِيْ وَاوٍ وَيَاءٍ يَظْهَرُ <span class='pemisah-bait'>۞</span> وَمَا سِوَاهُ فِي الثَّلَاثِ قَدَّرُوْا",
        terjemah: "Dan I'rab Nashabnya fi'il yang berakhiran Wawu dan Ya' itu jelas (Dhohir). Dan selain itu (Alif), maka dikira-kirakan (Muqaddar) pada ketiga tingkahnya."
    },
    {
        id: 60,
        arab: "فَنَحْوُ يَغْزُو يَهْتَدِي يَخْشَى خُتِمْ <span class='pemisah-bait'>۞</span> بِعِلَّةٍ وَغَيْرُهُ مِنْهَا سَلِمْ",
        terjemah: "Contoh lafadz 'Yaghzu' (Wawu), 'Yahtadi' (Ya), 'Yakhsya' (Alif) itu diakhiri huruf illat, sedangkan selain itu selamat (Shahih Akhir)."
    },
    {
        id: 61,
        arab: "وَعِلَّةُ اْلأَسْمَاءِ يَاءٌ وَأَلِفْ <span class='pemisah-bait'>۞</span> فَنَحْوُ قَاضٍ وَالْفَتَى بِهَا عُرِفْ",
        terjemah: "Dan huruf illat pada Isim adalah Ya' (Manqush) dan Alif (Maqshur). Contohnya lafadz 'Qadhin' dan 'Al-Fata' dikenali dengannya."
    },
    {
        id: 62,
        arab: "إِعْرَابُ كُلٍّ مِنْهُمَا مُقَدَّرُ <span class='pemisah-bait'>۞</span> فِيْهَا وَلَكِنْ نَصْبُ قَاضٍ يَظْهَرُ",
        terjemah: "I'rab keduanya dikira-kirakan (Muqaddar), akan tetapi I'rab Nashabnya lafadz 'Qadhin' itu jelas (Fathah Dhohir)."
    },
    {
        id: 63,
        arab: "وَقَدَّرُوْا ثَلَاثَةَ اْلأَقْسَامِ <span class='pemisah-bait'>۞</span> فِي الْمِيْمِ قَبْلَ الْيَاءِ مِنْ غُلَامِيْ",
        terjemah: "Dan ulama mengira-ngirakan tiga pembagian I'rab (Rafa, Nashab, Jar) pada huruf Mim sebelum Ya' (Mutakallim) dari lafadz 'Ghulamiy'."
    },
    {
        id: 64,
        arab: "وَالْوَاوُ فِيْ كَمُسْلِمِيَّ أُضْمِرَتْ <span class='pemisah-bait'>۞</span> وَالنُّوْنُ فِيْ لَتُبْلَوُنَّ قُدِّرَتْ",
        terjemah: "Dan Wawu pada lafadz seperti 'Muslimiyya' disimpan (takdir), dan Nun pada lafadz 'Latublawunna' juga dikira-kirakan."
    },

    // --- FASHL: AL-MU'ROBAT (65-76) ---
    {
        id: 65,
        header: "فصل",
        arab: "اَلْمُعْرَبَاتُ كُلُّهَا قَدْ تُعْرَبُ <span class='pemisah-bait'>۞</span> بِالْحَرَكَاتِ أَوْ حُرُوْفٍ تُقْرَبُ",
        terjemah: "Dan semua kata yang mu'rab itu di-i'rab dengan Harakat atau dengan Huruf yang mendekatinya."
    },
    {
        id: 66,
        arab: "فَأَوَّلُ الْقِسْمَيْنِ مِنْهَا أَرْبَعُ <span class='pemisah-bait'>۞</span> وَهْيَ الَّتِيْ مَرَّتْ بِضَمٍّ تُرْفَعُ",
        terjemah: "Bagian pertama (yang di-i'rab harakat) ada empat, yaitu yang telah disebutkan tanda rafa'nya dengan dhommah."
    },
    {
        id: 67,
        arab: "وَكُلُّ مَا بِضَمَّةٍ قَدِ ارْتَفَعْ <span class='pemisah-bait'>۞</span> فَنَصْبُهُ بِالْفَتْحِ مُطْلَقًا يَقَعْ",
        terjemah: "Dan setiap kata yang rafa'nya dengan dhommah, maka nashabnya pasti dengan fathah secara mutlak."
    },
    {
        id: 68,
        arab: "وَخَفْضُ اْلاِسْمِ مِنْهُ بِالْكَسْرِ الْتُزِمْ <span class='pemisah-bait'>۞</span> وَالْفِعْلُ مِنْهُ بِالسُّكُوْنِ مُنْجَزِمْ",
        terjemah: "Dan khafadhnya Isim (kelompok ini) wajib dengan kasrah, dan Fi'il-nya dijazmkan dengan sukun."
    },
    {
        id: 69,
        arab: "لَكِنْ كَهِنْدَاتٍ لِنَصْبِهِ انْكَسَرْ <span class='pemisah-bait'>۞</span> وَغَيْرُ مَصْرُوْفٍ بِفَتْحَةٍ يُجَرْ",
        terjemah: "Tetapi lafadz seperti 'Hindatin' (Jamak Muannats) nashabnya dengan kasrah, dan Isim Ghairu Munsharif dijarkan dengan fathah."
    },
    {
        id: 70,
        arab: "وَكُلُّ فِعْلٍ كَانَ مُعْتَلاًّ جُزِمْ <span class='pemisah-bait'>۞</span> بِحَذْفِ حَرْفِ عِلَّةٍ كَمَا عُلِمْ",
        terjemah: "Dan setiap fi'il yang mu'tal (akhir) dijazmkan dengan membuang huruf illat sebagaimana telah diketahui."
    },
    {
        id: 71,
        arab: "وَالْمُعْرَبَاتُ بِالْحُرُوْفِ أَرْبَعُ <span class='pemisah-bait'>۞</span> وَهِيَ الْمُثَنَّى وَذُكُوْرٌ تُجْمَعُ",
        terjemah: "Dan kata yang di-i'rab dengan Huruf ada empat: Isim Mutsanna, Jamak Mudzakkar Salim..."
    },
    {
        id: 72,
        arab: "جَمْعًا صَحِيْحًا كَالْمِثَالِ الْخَالِيْ <span class='pemisah-bait'>۞</span> وَخَمْسَةُ اْلاَسْمَاءِ وَاْلاَفْعَالِ",
        terjemah: "...(Jamak Shahih seperti contoh yang lalu), Asma'ul Khomsah, dan Af'alul Khomsah."
    },
    {
        id: 73,
        arab: "أَمَّا الْمُثَنَّى فَلِرَفْعِهِ اْلأَلِفْ <span class='pemisah-bait'>۞</span> وَنَصْبُهُ وَجَرُّهُ بِالْيَا عُرِفْ",
        terjemah: "Adapun Isim Mutsanna, tanda rafa'nya adalah Alif. Nashab dan jarnya diketahui dengan (huruf) Ya'."
    },
    {
        id: 74,
        arab: "وَكَالْمُثَنَّى الْجَمْعُ فِيْ نَصْبٍ وَجَرْ <span class='pemisah-bait'>۞</span> وَرَفْعُهُ بِالْوَاوِ مَرَّ وَاسْتَقَرْ",
        terjemah: "Dan seperti Mutsanna, Jamak (Mudzakkar) sama dalam nashab dan jar (pakai Ya'). Dan rafa'nya dengan Wawu yang telah lalu dan tetap."
    },
    {
        id: 75,
        arab: "وَالْخَمْسَةُ اْلاَسْمَا كَهَذَا الْجَمْعِ فِيْ <span class='pemisah-bait'>۞</span> رَفْعٍ وَخَفْضٍ وَانْصِبَنَّ بِاْلأَلِفْ",
        terjemah: "Dan Asma'ul Khomsah seperti Jamak ini dalam rafa' (Wawu) dan khafadh (Ya'), dan nashabkanlah ia dengan Alif."
    },
    {
        id: 76,
        arab: "وَالْخَمْسَةُ اْلاَفْعَالِ رَفْعُهَا عُرِفْ <span class='pemisah-bait'>۞</span> بِـنُوْنِهَا وَفِيْ سِوَاهُ تَنْحَذِفْ",
        terjemah: "Dan Af'alul Khomsah rafa'nya diketahui dengan (tetapnya) Nun, dan pada selain rafa' (nashab/jazm) Nun-nya dibuang."
    },
    
    // --- BAB: MA'RIFAT & NAKIRAH (77-88) ---
    {
        id: 77,
        header: "باب المعرفة والنكرة",
        arab: "وَإِنْ تُرِدْ تَعْرِيْفَ الْاِسْمِ النَّكِرَةْ <span class='pemisah-bait'>۞</span> فَهُوَ الَّذِيْ يَقْبَلُ أَلْ مُؤَثِّرَةْ",
        terjemah: "Dan jika engkau ingin mendefinisikan Isim Nakirah, maka ia adalah isim yang menerima AL (Alif Lam) yang memberi bekas (memakrifatkan)."
    },
    {
        id: 78,
        arab: "وَغَيْرُهُ مَعَارِفٌ وَتُخْصَرُ <span class='pemisah-bait'>۞</span> فِيْ سِتَّةٍ فَاْلأَوَّلُ اسْمٌ مُضْمَرُ",
        terjemah: "Dan selainnya adalah Ma'rifat, dan diringkas dalam enam macam. Yang pertama adalah Isim Dhomir."
    },
    {
        id: 79,
        arab: "يُكْنٰى بِهِ عَنْ ظَاهِرٍ فَيَنْتَمِي <span class='pemisah-bait'>۞</span> لِلْغَيْبِ وَالْحُضُوْرِ وَالتَّكَلُّمِ",
        terjemah: "Yang digunakan untuk menggantikan Isim Dzahir, maka ia terbagi menjadi Ghaib (Orang ke-3), Hadir (Orang ke-2), dan Mutakallim (Orang ke-1)."
    },
    {
        id: 80,
        arab: "وَقَسَّمُوْهُ ثَانِيًا لِمُتَّصِلْ <span class='pemisah-bait'>۞</span> مُسْتَتِرٍ أَوْ بَارِزٍ أَوْ مُنْفَصِلْ",
        terjemah: "Dan mereka membaginya lagi menjadi Muttashil (bersambung) yang Mustatir (tersembunyi) atau Bariz (nampak), atau Munfashil (terpisah)."
    },
    {
        id: 81,
        arab: "ثَانِي الْمَعَارِفِ الشَّهِيْرُ بِالْعَلَمْ <span class='pemisah-bait'>۞</span> كَجَعْفَرٍ وَمَكَّةٍ وَكَالْحَرَمْ",
        terjemah: "Yang kedua dari Isim Ma'rifat adalah yang dikenal dengan Isim 'Alam (Nama), seperti Ja'far, Makkah, dan Al-Haram."
    },
    {
        id: 82,
        arab: "وَاُمِّ عَمْرٍو وَأَبِيْ سَعِيْدِ <span class='pemisah-bait'>۞</span> وَنَحْوِ كَهْفِ الظُّلْمِ وَالرَّشِيْدِ",
        terjemah: "Dan (Kunyah seperti) Ummu 'Amrin, Abi Sa'id. Dan (Laqob/Gelar) seperti Kahfi Dzulmi dan Ar-Rasyid."
    },
    {
        id: 83,
        arab: "فَمَا أَتَى مِنْهُ بِأُمٍّ أَوْ بِأَبْ <span class='pemisah-bait'>۞</span> فَكُنْيَةٌ وَغَيْرُهُ اسْمٌ أَوْ لَقَبْ",
        terjemah: "Maka nama yang didahului dengan Ummu atau Abun adalah Kunyah, dan selain itu adalah Isim (Nama Asli) atau Laqob (Julukan)."
    },
    {
        id: 84,
        arab: "فَمَا بِمَدْحٍ أَوْ بِذَمٍّ مُشْعِرُ <span class='pemisah-bait'>۞</span> فَلَقَبٌ وَالاِسْمُ مَا لَا يُشْعِرُ",
        terjemah: "Maka nama yang menunjukkan pujian atau celaan adalah Laqob, sedangkan Isim (Nama Asli) adalah yang tidak menunjukkan hal itu."
    },
    {
        id: 85,
        arab: "ثَالِثُهَا إِشَارَةٌ كَذَا وَذِيْ <span class='pemisah-bait'>۞</span> رَابِعُهَا مَوْصُوْلُ الاِسْمِ كَالَّذِيْ",
        terjemah: "Yang ketiga adalah Isim Isyarah (Kata Tunjuk) seperti 'Dza' dan 'Dzi'. Yang keempat adalah Isim Maushul (Kata Sambung) seperti 'Alladzi'."
    },
    {
        id: 86,
        arab: "خَامِسُهَا مُعَرَّفٌ بِحَرْفِ أَلْ <span class='pemisah-bait'>۞</span> كَمَا تَقُوْلُ فِيْ مَحَلٍّ الْمَحَلْ",
        terjemah: "Yang kelima adalah isim yang dimakrifatkan dengan huruf AL, sebagaimana kau ucapkan pada 'Mahallin' menjadi 'Al-Mahall'."
    },
    {
        id: 87,
        arab: "سَادِسُهَا مَا كَانَ مِنْ مُضَافِ <span class='pemisah-bait'>۞</span> لِوَاحِدٍ مِنْ هَذِهِ اْلأَصْنَافِ",
        terjemah: "Yang keenam adalah isim yang menjadi Mudhaf (sandaran) kepada salah satu dari golongan (isim ma'rifat) ini."
    },
    {
        id: 88,
        arab: "كَقَوْلِكَ ابْنِيْ وَابْنُ زَيْدٍ وَابْنُ ذِيْ <span class='pemisah-bait'>۞</span> وَابْنُ الَّذِيْ ضَرَبْتُهُ وَابْنُ الْبَذِيْ",
        terjemah: "Seperti ucapanmu: 'Ibnu-y' (Anakku), 'Ibnu Zaidin', 'Ibnu Dzi' (Anak ini), 'Ibnul Ladzi...' (Anak orang yang...), dan 'Ibnul Badzi'."
    },

    // --- BAB: AL-AF'AL (89-95) ---
    {
        id: 89,
        header: "باب الأفعال",
        arab: "أَفْعَالُهُمْ ثَلَاثَةٌ فِي الْوَاقِعِ <span class='pemisah-bait'>۞</span> مَاضٍ وَفِعْلُ اْلأَمْرِ وَالْمُضَارِعِ",
        terjemah: "Fi'il menurut ulama Nahwu ada tiga dalam kenyataannya: Madhi, Fi'il Amar, dan Mudhari'."
    },
    {
        id: 90,
        arab: "فَالْمَاضِي مَفْتُوْحُ اْلأَخِيْرِ إِنْ قُطِعْ <span class='pemisah-bait'>۞</span> عَنْ مُضْمَرٍ مُحَرَّكٍ بِهِ رُفِعْ",
        terjemah: "Maka Fi'il Madhi itu difathahkan akhirnya jika terputus dari dhomir (mutaharrik) yang merafa'kannya."
    },
    {
        id: 91,
        arab: "فَإِنْ أَتَى مَعْ ذَا الضَّمِيْرِ سُكِّنَا <span class='pemisah-bait'>۞</span> وَضَمُّهُ مَعْ وَاوِ جَمْعٍ عُيِّنَا",
        terjemah: "Jika ia datang bersama dhomir (rafa' mutaharrik) tersebut maka disukunkan. Dan ditentukan dhommahnya jika bersama Wawu Jamak."
    },
    {
        id: 92,
        arab: "وَ اْلأَمْرُ مَبْنِيٌّ عَلَى السُّكُوْنِ <span class='pemisah-bait'>۞</span> أَوْ حَذْفِ حَرْفِ عِلَّةٍ أَوْ نُوْنِ",
        terjemah: "Dan Fi'il Amar itu dimabnikan atas sukun, atau membuang huruf 'illat, atau membuang nun."
    },
    {
        id: 93,
        arab: "وَافْتَتَحُوْا مُضَارِعًا بِوَاحِدِ <span class='pemisah-bait'>۞</span> مِنَ الْحُرُوْفِ اْلأَرْبَعِ الزَّوَائِدِ",
        terjemah: "Dan mereka mengawali Fi'il Mudhari' dengan satu dari empat huruf tambahan."
    },
    {
        id: 94,
        arab: "هَمْزٌ وَنُوْنٌ وَكَذَا يَاءٌ وَتَا <span class='pemisah-bait'>۞</span> يَجْمَعُهَا قَوْلِيْ أَنَيْتُ يَا فَتَى",
        terjemah: "Hamzah, Nun, begitu juga Ya' dan Ta', yang dikumpulkan oleh ucapanku: 'Anaitu' wahai pemuda."
    },
    {
        id: 95,
        arab: "وَحَيْثُ كَانَتْ فِيْ رُبَاعِيٍّ تُضَمّْ <span class='pemisah-bait'>۞</span> وَفَتْحُهَا فِيْمَا سِوَاهُ مُلْتَزَمْ",
        terjemah: "Dan sekiranya huruf mudhara'ah itu ada pada fi'il ruba'i (4 huruf) maka didhommahkan, dan wajib difathahkan pada selain itu."
    },
    
    // --- BAB: I'RAB AL-AF'AL (96-104) ---
    {
        id: 96,
        header: "باب إعراب الفعل",
        arab: "رَفْعُ الْمُضَارِعِ الَّذِيْ تَجَرَّدَا <span class='pemisah-bait'>۞</span> عَنْ نَاصِبٍ وَجَازِمٍ تَأَبَّدَا",
        terjemah: "Rafa'nya Fi'il Mudhari' adalah ketika ia sunyi dari Amil Nashab dan Amil Jazm selamanya."
    },
    {
        id: 97,
        arab: "فَانْصِبْ بِعَشْرٍ وَهْيَ أَنْ وَلَنْ وَكَيْ <span class='pemisah-bait'>۞</span> كَذَا إِذَنْ إِنْ صُدِّرَتْ وَلَامُ كَيْ",
        terjemah: "Maka nashabkanlah dengan 10 huruf, yaitu: An, Lan, Kai, juga Idzan (jika di awal), dan Lam Kai."
    },
    {
        id: 98,
        arab: "وَلَامُ جَحْدٍ وَكَذَا حَتَّى وَأَوْ <span class='pemisah-bait'>۞</span> وَالْوَاوُ وَالْفَا فِيْ جَوَابٍ قَدْ عَنَوْا",
        terjemah: "Dan Lam Juhud, juga Hatta, Au, serta Wawu dan Fa pada Jawab yang mereka maksudkan..."
    },
    {
        id: 99,
        arab: "بِهِ جَوَابًا بَعْدَ نَفْيٍ أَوْ طَلَبْ <span class='pemisah-bait'>۞</span> كَلَا تَرُمْ عِلْمًا وَتَتْرُكَ التَّعَبْ",
        terjemah: "...sebagai jawab setelah Nafi atau Thalab. Seperti: 'Jangan kau cari ilmu (sambil) kau tinggalkan lelah'."
    },
    {
        id: 100,
        arab: "وَجَزْمُهُ بِلَمْ وَلَمَّا قَدْ وَجَبْ <span class='pemisah-bait'>۞</span> وَلَا وَلَامٍ دَلَّتَا عَلَى الطَّلَبْ",
        terjemah: "Dan Jazm-nya fi'il itu wajib dengan Lam dan Lamma, serta La dan Lam yang menunjukkan arti Thalab (tuntutan/larangan)."
    },
    {
        id: 101,
        arab: "كَذَاكَ إِنْ وَمَنْ وَمَا وَإِذْمَا <span class='pemisah-bait'>۞</span> أَيٌّ مَتَى أَيَّانَ أَيْنَ مَهْمَا",
        terjemah: "Demikian juga (menjazmkan 2 fi'il): In, Man, Ma, Idzma, Ayyun, Mata, Ayyana, Aina, Mahma..."
    },
    {
        id: 102,
        arab: "وَحَيْثُمَا وَكَيْفَمَا وَأَنَّى <span class='pemisah-bait'>۞</span> كَإِنْ يَقُمْ زَيْدٌ وَعَمْرٌو قُمْنَا",
        terjemah: "...dan Haitsuma, Kaifama, serta Anna. Seperti contoh: 'Jika Zaid dan 'Amr berdiri, maka kami berdiri'."
    },
    {
        id: 103,
        arab: "وَاجْزِمْ بِإِنْ وَمَا بِهَا قَدْ أُلْحِقَا <span class='pemisah-bait'>۞</span> فِعْلَيْنِ لَفْظًا أَوْ مَحَلًّا مُطْلَقَا",
        terjemah: "Dan jazmkanlah dengan 'In' dan temannya tadi, pada dua fi'il baik secara lafadz atau mahal secara mutlak."
    },
    {
        id: 104,
        arab: "وَلْيَقْتَرِنْ بِالْفَا جَوَابٌ لَوْ وَقَعْ <span class='pemisah-bait'>۞</span> بَعْدَ اْلأَدَاةِ مَوْضِعَ الشَّرْطِ امْتَنَعْ",
        terjemah: "Dan wajib menyertakan Fa pada Jawab (Syarat) jika ia tidak pantas menempati tempatnya Syarat (setelah Adat Syarat)."
    },
    
    // --- BAB: MARFU'AT AL-ASMA (105-113) ---
    {
        id: 105,
        header: "باب مرفوعات الأسماء",
        arab: "مَرْفُوْعُ اْلاَسْمَا سَبْعَةٌ تَأْتِيْ بِهَا <span class='pemisah-bait'>۞</span> مَعْلُوْمَةَ اْلأَسْمَاءِ مِنْ تَبْوِيْبِهَا",
        terjemah: "Isim-isim yang dirafa'kan ada tujuh yang akan datang, yang diketahui nama-namanya dari bab-babnya."
    },
    {
        id: 106,
        arab: "فَالْفَاعِلُ اسْمٌ مُطْلَقًا قَدِ ارْتَفَعْ <span class='pemisah-bait'>۞</span> بِفِعْلِهِ وَالْفِعْلُ قَبْلَهُ وَقَعْ",
        terjemah: "Maka Fa'il adalah isim yang dirafa'kan secara mutlak oleh fi'ilnya, dan fi'il itu terletak sebelumnya."
    },
    {
        id: 107,
        arab: "وَوَاجِبٌ فِي الْفِعْلِ أَنْ يُجَرَّدَا <span class='pemisah-bait'>۞</span> إِذَا لِجَمْعٍ أَوْ مُثَنًّى أُسْنِدَا",
        terjemah: "Dan wajib bagi fi'il untuk dimumfradkan (sepi dari tanda tatsniyah/jamak) jika disandarkan pada Fa'il Jamak atau Mutsanna."
    },
    {
        id: 108,
        arab: "فَقُلْ أَتَى الزَّيْدَانِ وَالزَّيْدُوْنَا <span class='pemisah-bait'>۞</span> كَجَاءَ زَيْدٌ وَيَجِيْ أَخُوْنَا",
        terjemah: "Maka katakanlah: 'Ata Az-Zaidani' dan 'Az-Zaiduna', sebagaimana contoh 'Ja'a Zaidun' dan 'Yaji Akhuna'."
    },
    {
        id: 109,
        arab: "وَقَسَّمُوْهُ ظَاهِرًا وَمُضْمَرَا <span class='pemisah-bait'>۞</span> فَالظَّاهِرُ اللَّفْظُ الَّذِيْ قَدْ ذُكِرَا",
        terjemah: "Dan ulama membagi Fa'il menjadi Dzahir dan Mudhmar. Maka Fa'il Dzahir adalah lafadz yang telah disebutkan tadi."
    },
    {
        id: 110,
        arab: "وَالْمُضْمَرُ اثْنَا عَشَرَ نَوْعًا قِسْمًا <span class='pemisah-bait'>۞</span> كَقُمْتُ قُمْنَا قُمْتَ قُمْتِ قُمْتُمَا",
        terjemah: "Dan Fa'il Mudhmar terbagi menjadi 12 macam, seperti: Qumtu, Qumna, Qumta, Qumti, Qumtuma..."
    },
    {
        id: 111,
        arab: "قُمْتُنَّ قُمْتُمْ قَامَ قَامَتْ قَامَا <span class='pemisah-bait'>۞</span> قَامُوْا وَقُمْنَ نَحْوُ صُمْتُمْ عَامَا",
        terjemah: "...Qumtunna, Qumtum, Qama, Qamat, Qama, Qamu, dan Qumna. Contohnya: 'Shumtum 'Aaman' (Kalian berpuasa setahun)."
    },
    {
        id: 112,
        arab: "وَهَذِهِ ضَمَائِرٌ مُتَّصِلَة <span class='pemisah-bait'>۞</span> وَمِثْلُهَا الضَّمَائِرُ الْمُنْفَصِلَة",
        terjemah: "Dan ini adalah dhomir-dhomir Muttashil (bersambung), dan semisalnya adalah dhomir-dhomir Munfashil (terpisah)."
    },
    {
        id: 113,
        arab: "كَلَمْ يَقُمْ إِلَّا أَنَا وَأَنْتُمُ <span class='pemisah-bait'>۞</span> وَغَيْرُ ذَيْنِ بِالْقِيَاسِ يُعْلَمُ",
        terjemah: "Seperti: 'Lam Yaqum Illa Ana' (Tidak berdiri kecuali saya) dan 'Antum'. Dan selain keduanya bisa diketahui dengan qiyas."
    },
    
    // --- BAB: NAIB AL-FA'IL (114-120) ---
    {
        id: 114,
        header: "باب نائب الفاعل",
        arab: "أَقِمْ مَقَامَ الْفَاعِلِ الَّذِيْ حُذِفْ <span class='pemisah-bait'>۞</span> مَفْعُوْلَهُ فِيْ كُلِّ مَا لَهُ عُرِفْ",
        terjemah: "Tempatkanlah Maf'ul (Objek) di tempat Fa'il yang dibuang, dalam setiap hukum yang berlaku bagi Fa'il (Rafa', dll)."
    },
    {
        id: 115,
        arab: "أَوْ مَصْدَرًا أَوْ ظَرْفًا اَوْ مَجْرُوْرَا <span class='pemisah-bait'>۞</span> إِنْ لَمْ تَجِدْ مَفْعُوْلَهُ الْمَذْكُوْرَا",
        terjemah: "Atau Masdar, atau Zhorof, atau Jar Majrur, jika engkau tidak menemukan Maf'ul (Bih) yang disebutkan tadi."
    },
    {
        id: 116,
        arab: "وَأَوَّلَ الْفِعْلِ الَّذِيْ هُنَا يُضَمْ <span class='pemisah-bait'>۞</span> وَكَسْرُ مَا قَبْلَ اْلأَخِيْرِ مُلْتَزَمْ",
        terjemah: "Dan huruf awal fi'il (Mabni Majhul) di sini didhommahkan, dan wajib mengkasrah huruf sebelum akhir..."
    },
    {
        id: 117,
        arab: "فِيْ كُلِّ مَاضٍ وَهُوَ فِي الْمُضَارِعِ <span class='pemisah-bait'>۞</span> مُنْفَتِحٌ كَيُدَّعَى وَكَادُعِيْ",
        terjemah: "...pada setiap Fi'il Madhi. Dan pada Fi'il Mudhari' (huruf sebelum akhir) difathahkan. Seperti 'Yud'a' dan 'Du'iya'."
    },
    {
        id: 118,
        arab: "وَأَوَّلَ الْفِعْلِ الَّذِيْ كَبَاعَا <span class='pemisah-bait'>۞</span> مُنْكَسِرٌ وَهُوَ الَّذِيْ قَدْ شَاعَا",
        terjemah: "Dan huruf awal Fi'il (Madhi Ajwaf) yang seperti lafadz 'Baa'a' dikasrahkan (menjadi Bi'a), dan itulah dialek yang masyhur."
    },
    {
        id: 119,
        arab: "وَذَاكَ إِمَّا مُضْمَرٌ أَوْ مُظْهَرُ <span class='pemisah-bait'>۞</span> ثَانِيْهِمَا كَيُكْرَمُ الْمُبَشَّرُ",
        terjemah: "Dan Naibul Fa'il itu ada yang Mudhmar (Dhomir) atau Dzahir. Yang kedua (Dzahir) contohnya: 'Yukromul Mubasysyaru'."
    },
    {
        id: 120,
        arab: "أَمَّا الضَّمِيْرُ فَهُوَ نَحْوُ قَوْلِنَا <span class='pemisah-bait'>۞</span> دُعِيْتُ أُدْعَى مَا دُعِيْ إِلَّا أَنَا",
        terjemah: "Adapun yang Dhomir itu seperti ucapan kami: 'Du'itu' (aku dipanggil), 'Ud'a' (aku dipanggil), dan 'Ma Du'iya Illa Ana'."
    },
    
    // --- BAB: MUBTADA & KHABAR (121-132) ---
    {
        id: 121,
        header: "باب المبتدأ والخبر",
        arab: "الْمُبْتَدَا اسْمٌ رَفْعُهُ مُؤَبَّدُ <span class='pemisah-bait'>۞</span> عَنْ كُلِّ لَفْظٍ عَامِلٍ مُجَرَّدُ",
        terjemah: "Mubtada adalah isim yang rafa'nya selamanya, yang sunyi dari setiap amil lafdzi."
    },
    {
        id: 122,
        arab: "وَالْخَبَرُ اسْمٌ ذُو ارْتِفَاعٍ أُسْنِدَا <span class='pemisah-bait'>۞</span> مُطَابِقًا فِيْ لَفْظِهِ لِلْمُبْتَدَا",
        terjemah: "Dan Khabar adalah isim yang marfu' yang disandarkan (kepada Mubtada), yang sesuai lafadznya dengan Mubtada."
    },
    {
        id: 123,
        arab: "كَقَوْلِنَا زَيْدٌ عَظِيْمُ الشَّأْنِ <span class='pemisah-bait'>۞</span> وَقَوْلِنَا الزَّيْدَانِ قَائِمَانِ",
        terjemah: "Seperti ucapan kami 'Zaidun 'Azhimus Sya'ni' (Zaid agung keadaannya), dan ucapan kami 'Az-Zaidani Qoimani'."
    },
    {
        id: 124,
        arab: "وَمِثْلُهُ الزَّيْدُوْنَ قَائِمُوْنَ <span class='pemisah-bait'>۞</span> وَمِنْهُ أَيْضًا قَائِمٌ أَخُوْنَا",
        terjemah: "Dan semisalnya 'Az-Zaiduna Qoimuna'. Dan termasuk contohnya juga 'Qoimun Akhuna' (Mubtada Muakhar)."
    },
    {
        id: 125,
        arab: "وَالْمُبْتَدَا اسْمٌ ظَاهِرٌ كَمَا مَضَى <span class='pemisah-bait'>۞</span> أَوْ مُضْمَرٌ كَأَنْتَ أَهْلٌ لِلْقَضَا",
        terjemah: "Dan Mubtada itu ada Isim Dzahir sebagaimana telah lalu, atau Isim Dhomir seperti 'Anta Ahlun Lil Qodha'."
    },
    {
        id: 126,
        arab: "وَلَا يَجُوْزُ الاِبْتِدَا بِمَا اتَّصَلْ <span class='pemisah-bait'>۞</span> مِنَ الضَّمِيْرِ بَلْ بِكُلِّ مَا انْفَصَلْ",
        terjemah: "Dan tidak boleh membuat Mubtada dengan Dhomir Muttashil, akan tetapi (harus) dengan setiap Dhomir Munfashil."
    },
    {
        id: 127,
        arab: "أَنَا وَنَحْنُ أَنْتَ أَنْتِ أَنْتُمَا <span class='pemisah-bait'>۞</span> أَنْتُنَّ أَنْتُمْ وَهُوَ وَهْيَ هُمْ هُمَا",
        terjemah: "Ana, Nahnu, Anta, Anti, Antuma, Antunna, Antum, Huwa, Hiya, Hum, Huma."
    },
    {
        id: 128,
        arab: "وَهُنَّ أَيْضًا فَالْجَمِيْعُ اثْنَا عَشَرْ <span class='pemisah-bait'>۞</span> وَقَدْ مَضَى مِنْهَا مِثَالٌ مُعْتَبَرْ",
        terjemah: "Dan Hunna juga, maka semuanya ada dua belas. Dan sungguh telah lalu contoh yang mu'tabar darinya (di bab Fa'il)."
    },
    {
        id: 129,
        arab: "وَمُفْرَدًا وَغَيْرَهُ يَأْتِي الْخَبَرْ <span class='pemisah-bait'>۞</span> فَاْلأَوَّلُ اللَّفْظُ الَّذِيْ فِي النَّظْمِ مَرّ",
        terjemah: "Dan Khabar itu datang dalam bentuk Mufrad dan Ghairu Mufrad. Yang pertama (Mufrad) adalah lafadz yang telah lalu dalam nadhom."
    },
    {
        id: 130,
        arab: "وَغَيْرُهُ فِي أَرْبَعٍ مَحْصُوْرُ <span class='pemisah-bait'>۞</span> لَا غَيْرُ وَهْيَ الظَّرْفُ وَالْمَجْرُوْرُ",
        terjemah: "Dan yang Ghairu Mufrad itu diringkas dalam empat macam saja, yaitu Zhorof dan Jar-Majrur."
    },
    {
        id: 131,
        arab: "وَفَاعِلٌ مَعْ فِعْلِهِ الَّذِيْ صَدَرْ <span class='pemisah-bait'>۞</span> وَالْمُبْتَدَا مَعْ مَالَهُ مِنَ الْخَبَرْ",
        terjemah: "Dan Fa'il beserta Fi'il-nya yang telah lalu (Jumlah Fi'liyah), dan Mubtada beserta Khabar-nya (Jumlah Ismiyah)."
    },
    {
        id: 132,
        arab: "كَأَنْتَ عِنْدِيْ وَالْفَتَى بِدَارِي <span class='pemisah-bait'>۞</span> وَابْنِيْ قَرَأْ وَذَا أَبُوْهُ قَارِيْ",
        terjemah: "Seperti 'Anta 'Indiy' (Zhorof), 'Al-Fata Bi Dariy' (Jar-Majrur), 'Ibniy Qora' (Jumlah Fi'liyah), dan 'Dza Abuhu Qori' (Jumlah Ismiyah)."
    },
    
    // --- BAB: KANA WA AKHWATUHA (133-138) ---
    {
        id: 133,
        header: "باب كَانَ وَأَخَوَاتِهَا",
        arab: "اِرْفَعْ بِكَانَ الْمُبْتَدَا اسْمًا وَالْخَبَرْ <span class='pemisah-bait'>۞</span> بِهَا انْصِبَنْ كَكَانَ زَيْدٌ ذَا بَصَرْ",
        terjemah: "Rafa'kanlah Isim (Mubtada) dengan Kana dan Nashabkanlah Khabar dengannya. Seperti 'Kana Zaidun Dza Bashor' (Adalah Zaid itu memiliki penglihatan)."
    },
    {
        id: 134,
        arab: "كَذَاكَ أَضْحَى ظَلَّ بَاتَ أَمْسَى <span class='pemisah-bait'>۞</span> وَهَكَذَا أَصْبَحَ صَارَ لَيْسَا",
        terjemah: "Demikian juga (beramal seperti Kana): Adhha, Zhalla, Bata, Amsa. Dan begitu juga Ashbaha, Shara, Laisa."
    },
    {
        id: 135,
        arab: "فَتِئَ وَانْفَكَّ وَزَالَ مَعْ بَرِحْ <span class='pemisah-bait'>۞</span> أَرْبَعُهَا مِنْ بَعْدِ نَفْيٍ تَتَّضِحْ",
        terjemah: "Fati'a, Wanfakka, wa Zala serta Bariha. Empat fi'il ini berlaku (beramal) setelah didahului Nafi (Penafian)."
    },
    {
        id: 136,
        arab: "كَذَاكَ دَامَ بَعْدَ مَا الظَّرْفِيَّةْ <span class='pemisah-bait'>۞</span> وَهْيَ الَّتِيْ تَكُوْنُ مَصْدَرِيَّةْ",
        terjemah: "Demikian juga Dama setelah Ma Zhorfiyyah, dan dia adalah Ma yang menjadi Mashdariyyah."
    },
    {
        id: 137,
        arab: "وَكُلُّ مَا صَرَّفْتَهُ مِمَّا سَبَقْ <span class='pemisah-bait'>۞</span> مِنْ مَصْدَرٍ وَغَيْرِهِ بِهِ الْتَحَقْ",
        terjemah: "Dan setiap tasrifan dari fi'il-fi'il yang telah lalu, baik masdar atau lainnya, maka hukumnya mengikutinya (beramal sama)."
    },
    {
        id: 138,
        arab: "كَكُنْ صَدِيْقًا لَا تَكُنْ مُجَافِيًا <span class='pemisah-bait'>۞</span> وَانْظُرْ لِكَوْنِيْ مُصْبِحًا مُوَافِيًا",
        terjemah: "Seperti 'Kun Shodiqon' (Jadilah teman sejati), 'La Takun Mujafiyan' (Jangan jadi orang yang menjauh). Dan lihatlah contoh 'Li Kaunii Mushbihan Muwafiyan'."
    },
    
    // --- BAB: INNA WA AKHWATUHA (139-143) ---
    {
        id: 139,
        header: "باب إِنَّ وَأَخَوَاتِهَا",
        arab: "تَنْصِبُ إِنَّ الْمُبْتَدَا اسْمًا وَالْخَبَرْ <span class='pemisah-bait'>۞</span> تَرْفَعُهُ كَإِنَّ زَيْدًا ذَا نَظَرْ",
        terjemah: "Inna menashabkan Mubtada menjadi Isim-nya, dan merafa'kan Khabar. Seperti 'Inna Zaidan Dza Nazhor' (Sesungguhnya Zaid memiliki nalar)."
    },
    {
        id: 140,
        arab: "وَمِثْلُ إِنَّ أَنَّ لَيْتَ فِي الْعَمَلْ <span class='pemisah-bait'>۞</span> وَهَكَذَا كَأَنَّ لَكِنَّ لَعَلْ",
        terjemah: "Dan seperti Inna dalam beramal adalah: Anna dan Laita. Begitu juga Ka-anna, Lakinna, dan La'alla."
    },
    {
        id: 141,
        arab: "وَأَكَّدُوا الْمَعْنَى بِإِنَّ أَنَّ <span class='pemisah-bait'>۞</span> وَلَيْتَ مِنْ أَلْفَاظِ مَنْ تَمَنَّى",
        terjemah: "Mereka menguatkan makna (Taukid) dengan Inna dan Anna. Dan Laita termasuk lafadz untuk Tamanni (mengharap yang sulit)."
    },
    {
        id: 142,
        arab: "كَأَنَّ لِلتَّشْبِيْهِ فِي الْمُحَاكِيْ <span class='pemisah-bait'>۞</span> وَاسْتَعْمَلُوا لَكِنَّ فِي اسْتِدْرَاكِ",
        terjemah: "Ka-anna untuk Tasybih (penyerupaan) dalam meniru. Dan mereka menggunakan Lakinna untuk Istidrak (menyusul/memperbaiki ucapan)."
    },
    {
        id: 143,
        arab: "وَلِتَرَجٍّ وَتَوَقُّعٍ لَعَلْ <span class='pemisah-bait'>۞</span> كَقَوْلِهِمْ لَعَلَّ مَحْبُوْبِيْ وَصَلْ",
        terjemah: "Dan untuk Tarajji (harapan) serta Tawaqqu' (ekspektasi) adalah La'alla. Seperti ucapan mereka: 'La'alla Mahbubii Washol' (Semoga kekasihku sampai)."
    },

    // --- BAB: ZHANNA WA AKHWATUHA (144-147) ---
    {
        id: 144,
        header: "باب ظَنَّ وَأَخَوَاتِهَا",
        arab: "انْصِبْ بِظَنَّ الْمُبْتَدَا مَعَ الْخَبَرْ <span class='pemisah-bait'>۞</span> وَكُلِّ فِعْلٍ بَعْدَهَا عَلَى اْلأَثَرْ",
        terjemah: "Nashabkanlah Mubtada beserta Khabar dengan Zhanna, dan setiap fi'il yang disebutkan setelahnya mengikuti jejaknya."
    },
    {
        id: 145,
        arab: "كَخِلْتُهُ حَسِبْتُهُ زَعَمْتُهُ <span class='pemisah-bait'>۞</span> رَأَيْتُهُ وَجَدْتُهُ عَلِمْتُهُ",
        terjemah: "Seperti: Khiltuhu (aku mengiranya), Hasibtuhu, Za'amtuhu (aku menyangkanya), Ro-aituhu, Wajadtuhu, 'Alimtuhu (aku meyakininya)."
    },
    {
        id: 146,
        arab: "جَعَلْتُهُ اتَّخَذْتُهُ وَكُلُّمَا <span class='pemisah-bait'>۞</span> مِنْ هَذِهِ صَرَّفْتَهُ فَلْيُعْلَمَا",
        terjemah: "Ja'altuhu (aku menjadikannya), Ittakhodztuhu. Dan setiap lafadz yang kamu tashrif dari fi'il-fi'il ini, maka ketahuilah."
    },
    {
        id: 147,
        arab: "كَقَوْلِهِمْ ظَنَنْتُ زَيْدًا مُنْجِدَا <span class='pemisah-bait'>۞</span> وَاجْعَلْ لَنَا هَذَا الْمَكَانَ مَسْجِدَا",
        terjemah: "Seperti ucapan mereka: 'Zhonantu Zaidan Munjidan' (Aku mengira Zaid orang yang menolong), dan 'Ij'al Lana Hadzal Makana Masjidan' (Jadikanlah tempat ini masjid untuk kami)."
    },
    
    // --- BAB: AN-NA'AT (148-156) ---
    {
        id: 148,
        header: "باب النعت",
        arab: "النَّعْتُ إِمَّا رَافِعٌ لِمُضْمَرٍ <span class='pemisah-bait'>۞</span> يَعُوْدُ لِلْمَنْعُوْتِ أَوْ لِمُظْهَرٍ",
        terjemah: "Na'at (Sifat) itu adakalanya merafa'kan dhomir yang kembali kepada Man'ut, atau (merafa'kan) Isim Dzahir."
    },
    {
        id: 149,
        arab: "فَأَوَّلُ الْقِسْمَيْنِ مِنْهُ أَتْبِعِ <span class='pemisah-bait'>۞</span> مَنْعُوْتَهُ مِنْ عَشَرَةٍ لِأَرْبَعِ",
        terjemah: "Maka bagian pertama darinya (Na'at Haqiqi), ikutilah man'utnya dalam 4 dari 10 perkara."
    },
    {
        id: 150,
        arab: "فِي وَاحِدٍ مِنْ أَوْجُهِ الْإِعْرَابِ <span class='pemisah-bait'>۞</span> مِنْ رَفْعٍ أَوْ خَفْضٍ أَوْ انْتِصَابِ",
        terjemah: "Yaitu dalam satu dari wajah-wajah i'rab: dari Rafa', Khafadh (Jar), atau Nashab."
    },
    {
        id: 151,
        arab: "كَذَا مِنَ الْإِفْرَادِ وَالتَّذْكِيْرِ <span class='pemisah-bait'>۞</span> وَالضِّدِّ وَالتَّعْرِيْفِ وَالتَّنْكِيْرِ",
        terjemah: "Demikian juga dari Mufrad, Tadzkir (Mudzakkar), dan lawannya (Tatsniyah/Jamak, Muannats), serta Ta'rif dan Tankir."
    },
    {
        id: 152,
        arab: "كَقَوْلِنَا جَاءَ الْغُلَامُ الْفَاضِلُ <span class='pemisah-bait'>۞</span> وَجَاءَ مَعْهُ نِسْوَةٌ حَوَامِلُ",
        terjemah: "Seperti ucapan kami: 'Ja'a Al-Ghulamul Fadhilu' (Telah datang pemuda yang utama), dan 'Ja'a Ma'hu Niswatun Hawamilu' (Wanita-wanita hamil datang bersamanya)."
    },
    {
        id: 153,
        arab: "وَثَانِي الْقِسْمَيْنِ مِنْهُ أَفْرِدِ <span class='pemisah-bait'>۞</span> وَإِنْ جَرَى الْمَنْعُوْتُ غَيْرَ مُفْرَدِ",
        terjemah: "Dan bagian kedua darinya (Na'at Sababi), mufradkanlah (na'at-nya), meskipun man'utnya berlaku bukan mufrad."
    },
    {
        id: 154,
        arab: "وَاجْعَلْهُ فِي التَّأْنِيْثِ وَالتَّذْكِيْرِ <span class='pemisah-bait'>۞</span> مُطَابِقًا لِلْمُظْهَرِ الْمَذْكُوْرِ",
        terjemah: "Dan jadikanlah ia dalam hal Ta'nits dan Tadzkir, sesuai dengan isim dzahir yang disebutkan (setelahnya)."
    },
    {
        id: 155,
        arab: "مِثَالُهُ قَدْ جَاءَ حُرَّتَانِ <span class='pemisah-bait'>۞</span> مُنْطَلِقٌ زَوْجَاهُمَا الْعَبْدَانِ",
        terjemah: "Contohnya: 'Qod Ja'a Hurratani Muntaliqun Zaujahumal 'Abdani' (Telah datang dua wanita merdeka yang pergi kedua suami hambanya)."
    },
    {
        id: 156,
        arab: "وَمِثْلُهُ أَتَى غُلَامٌ سَائِلَهْ <span class='pemisah-bait'>۞</span> زَوْجَتُهُ عَنْ دَيْنِهَا الْمُحْتَاجَةْ لَهْ",
        terjemah: "Dan semisalnya: 'Ata Ghulamun Sailah, Zaujatuhu 'an Dainiha Al-Muhtajah lah' (Telah datang seorang pemuda yang istrinya bertanya tentang hutang yang ia butuhkan)."
    },
    
    // --- BAB: AL-'ATHAF (157-161) ---
    {
        id: 157,
        header: "باب العطف",
        arab: "وَأَتْبَعُوا الْمَعْطُوْفَ بِالْمَعْطُوْفِ <span class='pemisah-bait'>۞</span> عَلَيْهِ فِي إِعْرَابِهِ الْمَعْرُوْفِ",
        terjemah: "Dan mereka (ulama Nahwu) mengikutkan Ma'thuf kepada Ma'thuf 'Alaih dalam i'rabnya yang telah diketahui."
    },
    {
        id: 158,
        arab: "وَتَسْتَوِي اْلأَسْمَاءُ وَاْلأَفْعَالُ فِي <span class='pemisah-bait'>۞</span> إِتْبَاعِ كُلٍّ مِثْلَهُ إِنْ يُعْطَفِ",
        terjemah: "Dan samalah antara Isim dan Fi'il dalam hal mengikuti sejenisnya jika di-'athafkan."
    },
    {
        id: 159,
        arab: "بِالْوَاوِ وَالْفَا أَوْ وَأَمْ وَثُمَّ <span class='pemisah-bait'>۞</span> حَتَّى وَبَلْ وَلَا وَلَكِنْ إِمَّا",
        terjemah: "Dengan huruf: Wawu, Fa, Au, Am, Tsumma, Hatta, Bal, La, Lakin, dan Imma."
    },
    {
        id: 160,
        arab: "كَجَاءَ زَيْدٌ ثُمَّ عَمْرٌو أَكْرِمِ <span class='pemisah-bait'>۞</span> زَيْدًا وَعَمْرًا بِاللِّقَا وَالْمَطْعَمِ",
        terjemah: "Seperti: 'Ja'a Zaidun Tsumma 'Amrun' (Zaid datang kemudian 'Amr), dan 'Akrimi Zaidan wa 'Amron' (Muliakanlah Zaid dan 'Amr)."
    },
    {
        id: 161,
        arab: "وَفِتْيَةٌ لَمْ يَأْكُلُوا أَوْ يَحْضُرُوا <span class='pemisah-bait'>۞</span> حَتَّى يَفُوْتَ أَوْ يَزُوْلَ الْمُنْكَرُ",
        terjemah: "Dan 'Fityatun Lam Ya'kulu Au Yahdhuru' (Para pemuda tidak makan atau hadir), 'Hatta Yafuta Au Yazulal Munkaru'."
    },

    // --- BAB: AT-TAUKID (162-168) ---
    {
        id: 162,
        header: "باب التوكيد",
        arab: "وَجَائِزٌ فِي اْلِاسْمِ أَنْ يُؤَكَّدَا <span class='pemisah-bait'>۞</span> فَيَتْبَعُ الْمُؤَكَّدَ الْمُؤَكِّدَا",
        terjemah: "Dan boleh pada Isim untuk ditaukidi (dikukuhkan), maka lafadz Mu'akkid (yang menguatkan) mengikuti Mu'akkad (yang dikuatkan)."
    },
    {
        id: 163,
        arab: "فِي أَوْجُهِ اْلإِعْرَابِ وَالتَّعْرِيْفِ لَا <span class='pemisah-bait'>۞</span> مُنَكَّرٍ فَعَنْ مُؤَكِّدٍ خَلَا",
        terjemah: "Dalam segi i'rab dan ma'rifatnya, tidak boleh (taukid) pada isim nakirah, maka ia sepi dari Mu'akkid."
    },
    {
        id: 164,
        arab: "وَلَفْظُهُ الْمَشْهُوْرُ فِيْهِ أَرْبَعُ <span class='pemisah-bait'>۞</span> نَفْسٌ وَعَيْنٌ ثُمَّ كُلٌّ أَجْمَعُ",
        terjemah: "Dan lafadz Taukid yang masyhur ada empat: Nafsun, 'Ainun, kemudian Kullun, dan Ajma'u."
    },
    {
        id: 165,
        arab: "وَغَيْرُهَا تَوَابِعٌ لِأَجْمَعَا <span class='pemisah-bait'>۞</span> مِنْ أَكْتَعَ وَأَبْتَعَ وَأَبْصَعَا",
        terjemah: "Dan selain itu adalah pengikut lafadz Ajma'u, yaitu: Akta'a, Abta'a, dan Absha'a."
    },
    {
        id: 166,
        arab: "كَجَاءَ زَيْدٌ نَفْسُهُ وَقُلْ أَرَى <span class='pemisah-bait'>۞</span> جَيْشَ اْلأَمِيْرِ كُلَّهُ تَأَخَّرَا",
        terjemah: "Seperti: 'Ja'a Zaidun Nafsuhu' (Zaid datang dirinya sendiri), dan 'Qul Ara Jaisyal Amiri Kullahu Ta'akkhora'."
    },
    {
        id: 167,
        arab: "وَطُفْتُ حَوْلَ الْقَوْمِ أَجْمَعِيْنَ <span class='pemisah-bait'>۞</span> مَتْبُوْعَةً بِنَحْوِ أَكْتَعِيْنَ",
        terjemah: "Dan 'Thuftu Haulal Qaumi Ajma'ina' (Aku berkeliling di sekitar kaum semuanya), yang diikuti dengan semisal Akta'ina."
    },
    {
        id: 168,
        arab: "وَإِنْ تُؤَكِّدْ كِلْمَةً أَعَدْتَهَا <span class='pemisah-bait'>۞</span> بِلَفْظِهَا كَقَوْلِكَ انْتَهِ انْتَهَى",
        terjemah: "Dan jika engkau menaukidi kalimat (Taukid Lafdzi), maka engkau mengulanginya dengan lafadznya, seperti: 'Intahi Intaha'."
    },

    // --- BAB: AL-BADAL (169-175) ---
    {
        id: 169,
        header: "باب البدل",
        arab: "إِذَا اسْمٌ أَوْ فِعْلٌ لِمِثْلِهِ تَلَا <span class='pemisah-bait'>۞</span> وَالْحُكْمُ لِلثَّانِيْ وَعَنْ عَطْفٍ خَلَا",
        terjemah: "Jika Isim atau Fi'il mengiringi sejenisnya (sebelumnya), dan hukum itu untuk yang kedua, serta sepi dari huruf 'athaf..."
    },
    {
        id: 170,
        arab: "فَاجْعَلْهُ فِي إِعْرَابِهِ كَاْلأَوَّلِ <span class='pemisah-bait'>۞</span> مُلَقَّبًا لَهُ بِلَفْظِ الْبَدَلِ",
        terjemah: "...Maka jadikanlah ia seperti yang pertama dalam i'rabnya, dengan diberi julukan lafadz Badal (Pengganti)."
    },
    {
        id: 171,
        arab: "كُلٌّ وَبَعْضٌ وَاشْتِمَالٌ وَغَلَطْ <span class='pemisah-bait'>۞</span> كَذَاكَ إِضْرَابٌ فَبِالْخَمْسِ انْضَبَطْ",
        terjemah: "Badal Kul (Mutabiq), Ba'dh (Sebagian), Isytimal, dan Ghalat, serta Idhrab. Maka dengan lima ini ia ditetapkan."
    },
    {
        id: 172,
        arab: "كَجَاءَنِي زَيْدٌ أَخُوْكَ وَأَكَلْ <span class='pemisah-bait'>۞</span> عِنْدِيْ رَغِيْفًا نِصْفَهُ وَقَدْ وَصَلْ",
        terjemah: "Seperti: 'Ja'ani Zaidun Akhuka' (Badal Kul), dan 'Akal 'Indi Raghifan Nishfahu' (Badal Ba'dh)."
    },
    {
        id: 173,
        arab: "إِلَى زَيْدٍ عِلْمُهُ الَّذِي دَرَسْ <span class='pemisah-bait'>۞</span> وَقَدْ رَكِبْتُ الْيَوْمَ بَكْرًا الْفَرَسْ",
        terjemah: "Dan 'Washola Ila Zaidin 'Ilmuhu' (Badal Isytimal). Dan 'Qod Rokibtul Yauma Bakron Al-Farasa' (Ghalat/Idhrab)."
    },
    {
        id: 174,
        arab: "إِنْ قُلْتَ بَكْرًا دُوْنَ قَصْدٍ فَغَلَطْ <span class='pemisah-bait'>۞</span> أَوْ قُلْتَهُ قَصْدًا فَإِضْرَابٌ فَقَطْ",
        terjemah: "Jika kau ucapkan 'Bakron' tanpa sengaja maka itu Ghalat (salah ucap), atau jika sengaja (lalu diralat) maka itu Idhrab."
    },
    {
        id: 175,
        arab: "وَالْفِعْلُ مِنْ فِعْلٍ كَمَنْ يُؤْمِنْ يُثَبْ <span class='pemisah-bait'>۞</span> يَدْخُلْ جِنَانًا لَمْ يَنَلْ فِيْهَا تَعَبْ",
        terjemah: "Dan (Badal) Fi'il dari Fi'il, seperti: 'Man Yu'min Yutsab Yadkhul Jinanan' (Siapa beriman akan diberi pahala, [yakni] ia akan masuk surga)."
    },
    
    // --- BAB: MANSHUBAT AL-ASMA (176-182) ---
    {
        id: 176,
        header: "باب منصوبات الأسماء",
        arab: "ثَلَاثَةٌ مِنْ سَائِرِ اْلأَسْمَا خَلَتْ <span class='pemisah-bait'>۞</span> مَنْصُوْبَةً وَهَذِهِ عَشْرٌ تَلَتْ",
        terjemah: "Tiga kelompok isim telah berlalu (Isim Marfu', Mahfudh, Mabni), dan ini adalah sepuluh isim yang manshub (dinashabkan)."
    },
    {
        id: 177,
        arab: "وَكُلُّهَا تَأْتِيْ عَلَى تَرْتِيْبِهْ <span class='pemisah-bait'>۞</span> أَوَّلُهَا فِي الذِّكْرِ مَفْعُوْلٌ بِهْ",
        terjemah: "Dan semuanya akan datang sesuai urutannya. Yang pertama disebutkan adalah Maf'ul Bih."
    },
    {
        id: 178,
        arab: "وَذَلِكَ اسْمٌ جَاءَ مَنْصُوْبًا وَقَعْ <span class='pemisah-bait'>۞</span> عَلَيْهِ فِعْلٌ كَاحْذَرُوا أَهْلَ الطَّمَعْ",
        terjemah: "Yaitu isim yang dinashabkan yang mana pekerjaan (fi'il) jatuh padanya. Seperti: 'Ihdzaruu Ahlat Thoma' (Hati-hatilah kalian pada ahli tamak)."
    },
    {
        id: 179,
        arab: "فِي ظَاهِرٍ وَمُضْمَرٍ قَدِ انْحَصَرْ <span class='pemisah-bait'>۞</span> وَقَدْ مَضَى التَّمْثِيْلُ لِلَّذِيْ ظَهَرْ",
        terjemah: "Maf'ul Bih terbagi menjadi Dzahir dan Mudhmar. Dan sungguh telah lalu contoh untuk yang Dzahir."
    },
    {
        id: 180,
        arab: "وَغَيْرُهُ قِسْمَانِ أَيْضًا مُتَّصِلْ <span class='pemisah-bait'>۞</span> كَجَاءَنِيْ وَجَاءَنَا وَمُنْفَصِلْ",
        terjemah: "Dan selain Dzahir (Mudhmar) terbagi dua juga: Muttashil seperti 'Ja'aniy' dan 'Ja'ana', serta Munfashil."
    },
    {
        id: 181,
        arab: "مِثَالُهُ إِيَّايَ أَوْ إِيَّانَا <span class='pemisah-bait'>۞</span> حَيَّيْتَ أَكْرِمْ بِالَّذِيْ حَيَّانَا",
        terjemah: "Contohnya (Munfashil): 'Iyyaya' atau 'Iyyana' Hayyaita (Hanya kepadaku/kami engkau memberi hormat). Muliakanlah orang yang menghormati kita."
    },
    {
        id: 182,
        arab: "وَقِسْ بِذَيْنِ كُلَّ مُضْمَرٍ فَصَلْ <span class='pemisah-bait'>۞</span> وَبِالَّذِيْ قَبْلُ كُلَّ مُتَّصِلْ",
        terjemah: "Dan qiaskanlah dengan dua contoh ini semua dhomir munfashil. Dan dengan contoh sebelumnya untuk semua dhomir muttashil."
    },

    // --- BAB: AL-MASHDAR (183-186) ---
    {
        id: 183,
        header: "باب المصدر",
        arab: "وَإِنْ تُرِدْ تَصْرِيْفَ نَحْوِ قَامَا <span class='pemisah-bait'>۞</span> فَقُلْ يَقُوْمُ ثُمَّ قُلْ قِيَامَا",
        terjemah: "Dan jika engkau ingin mentashrif lafadz 'Qoma', maka katakanlah 'Yaquumu' kemudian 'Qiyaman' (Masdar)."
    },
    {
        id: 184,
        arab: "فَمَا يَجِيْ ثَالِثًا فَالْمَصْدَرُ <span class='pemisah-bait'>۞</span> وَنَصْبُهُ بِفِعْلِهِ مُقَدَّرُ",
        terjemah: "Maka lafadz yang datang ketiga (dalam urutan tashrif) adalah Masdar. Dan nashabnya oleh fi'ilnya yang dikira-kirakan."
    },
    {
        id: 185,
        arab: "فَإِنْ يُوَافِقْ فِعْلَهُ الَّذِيْ جَرَى <span class='pemisah-bait'>۞</span> فِي اللَّفْظِ وَالْمَعْنَى فَلَفْظِيًّا يُرَى",
        terjemah: "Jika Masdar itu mencocoki fi'ilnya yang berlaku dalam lafadz dan maknanya, maka ia dianggap (Masdar) Lafdzi."
    },
    {
        id: 186,
        arab: "أَوْ وَافَقَ الْمَعْنَى فَقَطْ وَقَدْ رُوِيْ <span class='pemisah-bait'>۞</span> بِغَيْرِ لَفْظِ الْفِعْلِ فَهُوَ مَعْنَوِيْ",
        terjemah: "Atau jika mencocoki maknanya saja dan diriwayatkan dengan selain lafadz fi'ilnya, maka ia (Masdar) Ma'nawi."
    },

    // --- BAB: AZ-ZHARAF (187-196) ---
    {
        id: 187,
        header: "باب الظرف",
        arab: "هُوَ اسْمُ وَقْتٍ أَوْ مَكَانٍ انْتَصَبْ <span class='pemisah-bait'>۞</span> كُلٌّ عَلَى تَقْدِيْرِ فِيْ عِنْدَ الْعَرَبْ",
        terjemah: "Zharaf adalah isim waktu atau tempat yang dinashabkan, semuanya dengan menyimpan makna 'fii' (di dalam) menurut orang Arab."
    },
    {
        id: 188,
        arab: "إِذَا أَتَى ظَرْفُ الْمَكَانِ مُبْهَمَا <span class='pemisah-bait'>۞</span> وَمُطْلَقًا فِيْ غَيْرِهِ فَلْيُعْلَمَا",
        terjemah: "Jika Zharaf Makan itu datang secara Mubham (tidak tentu batasnya). Dan secara mutlak pada selainnya (Zharaf Zaman), maka ketahuilah."
    },
    {
        id: 189,
        arab: "وَالنَّصْبُ بِالْفِعْلِ الَّذِيْ بِهِ جَرَى <span class='pemisah-bait'>۞</span> كَسِرْتُ مِيْلًا وَاعْتَكَفْتُ أَشْهُرَا",
        terjemah: "Dan dinashabkan dengan fi'il yang berlaku padanya. Seperti: 'Sirtu Miilan' (Aku berjalan satu mil) dan 'T'takaftu Asyhura' (Aku beri'tikaf berbulan-bulan)."
    },
    {
        id: 190,
        arab: "أَوْ لَيْلَةً أَوْ يَوْمًا أَوْ سِنِيْنَا <span class='pemisah-bait'>۞</span> أَوْ مُدَّةً أَوْ جُمْعَةً أَوْ حِيْنَا",
        terjemah: "Atau (contoh Zharaf Zaman): Lailatan, Yauman, Sinina, Muddah, Jum'atan, atau Hiina."
    },
    {
        id: 191,
        arab: "أَوْ قُمْ صَبَاحًا أَوْ مَسَاءً أَوْ سَحَرْ <span class='pemisah-bait'>۞</span> أَوْ غُدْوَةً أَوْ بُكْرَةً إِلَى السَّفَرْ",
        terjemah: "Atau 'Qum Shobahan' (Berdirilah di waktu subuh), Masa-an, Sahar, Ghudwah, atau Bukroh saat bepergian."
    },
    {
        id: 192,
        arab: "أَوْ لَيْلَةَ اْلإِثْنَيْنِ أَوْ يَوْمَ اْلأَحَدْ <span class='pemisah-bait'>۞</span> أَوْ صُمْ غَدًا أَوْ سَرْمَدًا أَوِ اْلأَبَدْ",
        terjemah: "Atau Lailatal Itsnaini, Yaumal Ahad. Atau 'Shum Ghodan' (Puasalah besok), Sarmadan, atau Al-Abad."
    },
    {
        id: 193,
        arab: "وَاسْمُ الْمَكَانِ نَحْوُ سِرْ أَمَامَهُ <span class='pemisah-bait'>۞</span> أَوْ خَلْفَهُ وَرَاءَهُ قُدَّامَهُ",
        terjemah: "Dan Isim Makan (Zharaf Makan) contohnya: 'Sir Amamahu' (Berjalanlah di depannya), Khalfahu, Waro-ahu, Quddamahu."
    },
    {
        id: 194,
        arab: "يَمِيْنَهُ شِمَالَهُ تِلْقَاءَهُ <span class='pemisah-bait'>۞</span> أَوْ فَوْقَهُ أَوْ تَحْتَهُ إِزَاءَهُ",
        terjemah: "Yaminahu, Syimalahu, Tilqa-ahu, Fauqohu, Tahtahu, Iza-ahu."
    },
    {
        id: 195,
        arab: "أَوْ مَعَهُ أَوْ حِذَاءَهُ أَوْ عِنْدَهُ <span class='pemisah-bait'>۞</span> أَوْ دُوْنَهُ أَوْ قَبْلَهُ أَوْ بَعْدَهُ",
        terjemah: "Ma'ahu, Hidza-ahu, 'Indahu, Dunahu, Qoblahu, atau Ba'dahu."
    },
    {
        id: 196,
        arab: "هُنَاكَ ثَمَّ فَرْسَخًا بَرِيْدَا <span class='pemisah-bait'>۞</span> وَهَهُنَا قِفْ مَوْقِفًا سَعِيْدَا",
        terjemah: "Hunaka, Tsamma, Farsakhan, Barida. Dan 'Hahuna Qif Mauqifan Sa'ida' (Di sini berhentilah di tempat berhenti yang bahagia)."
    },
    
    // --- BAB: AL-HAL (197-201) ---
    {
        id: 197,
        header: "باب الحال",
        arab: "الْحَالُ وَصْفٌ ذُوْ انْتِصَابٍ آتِي <span class='pemisah-bait'>۞</span> مُفَسِّرُ الْمُبْهَمِ لِلْهَيْئَاتِ",
        terjemah: "Hal adalah isim sifat yang dibaca nashab yang datang, untuk menafsiri (menjelaskan) keadaan yang samar."
    },
    {
        id: 198,
        arab: "وَإِنَّمَا يُؤْتَى بِهِ مُنَكَّرَا <span class='pemisah-bait'>۞</span> وَغَالِبًا يُؤْتَى بِهِ مُؤَخَّرَا",
        terjemah: "Dan sesungguhnya Hal itu didatangkan dalam bentuk Nakirah, dan umumnya didatangkan di akhir (setelah Shohibul Hal)."
    },
    {
        id: 199,
        arab: "كَجَاءَ زَيْدٌ رَاكِبًا مَلْفُوْفَا <span class='pemisah-bait'>۞</span> وَقَدْ ضَرَبْتُ عَبْدَهُ مَكْتُوْفَا",
        terjemah: "Seperti: 'Ja'a Zaidun Rakiban Malfufa' (Zaid datang berkendara lagi diselimuti), dan 'Dhorobtu 'Abdahu Maktufa' (Aku memukul hambanya dalam keadaan terikat)."
    },
    {
        id: 200,
        arab: "وَقَدْ يَجِيْ فِي الْكَلَامِ أَوَّلَا <span class='pemisah-bait'>۞</span> وَقَدْ يَجِيْ جَامِدًا مُؤَوَّلَا",
        terjemah: "Dan terkadang Hal datang di awal kalam (mendahului amil), dan terkadang berupa Isim Jamid yang dita'wil (dengan sifat)."
    },
    {
        id: 201,
        arab: "وَصَاحِبُ الْحَالِ الَّذِيْ تَقَرَّرَا <span class='pemisah-bait'>۞</span> مُعَرَّفٌ وَقَدْ يَجِيْ مُنَكَّرَا",
        terjemah: "Dan Shohibul Hal (pelaku keadaan) yang sudah ditetapkan adalah Ma'rifat, namun terkadang datang dalam bentuk Nakirah (dengan syarat)."
    },

    // --- BAB: AT-TAMYIZ (202-206) ---
    {
        id: 202,
        header: "باب التمييز",
        arab: "تَعْرِيْفُهُ اسْمٌ ذُوْ انْتِصَابٍ فَسَّرَا <span class='pemisah-bait'>۞</span> لِنِسْبَةٍ أَوْ ذَاتِ جِنْسٍ قَدَّرَا",
        terjemah: "Definisinya (Tamyiz) adalah isim yang dinashabkan yang menafsiri nisbat (kalimat) atau dzat jenis yang dikira-kirakan."
    },
    {
        id: 203,
        arab: "كَانْصَبَّ زَيْدٌ عَرَقًا وَقَدْ عَلَاهْ <span class='pemisah-bait'>۞</span> قَدْرًا وَلَكِنْ أَنْتَ أَعْلَى مَنْزِلَاهْ",
        terjemah: "Seperti: 'Inshabba Zaidun 'Aroqon' (Zaid bercucuran keringatnya), 'Qod 'Alahu Qodron', dan 'Anta A'la Manzilah' (Engkau lebih tinggi derajatnya)."
    },
    {
        id: 204,
        arab: "وَكَاشْتَرَيْتُ أَرْبَعًا نِعَاجَا <span class='pemisah-bait'>۞</span> أَوِ اشْتَرَيْتُ أَلْفَ رَطْلٍ سَاجَا",
        terjemah: "Dan seperti: 'Isytaraitu Arba'an Ni'aja' (Aku membeli empat ekor kambing), atau 'Isytaraitu Alfa Rothlin Saja' (Aku membeli 1000 kati kayu jati)."
    },
    {
        id: 205,
        arab: "أَوْ بِعْتُهُ مَكِيْلَةً أَرُزًّا <span class='pemisah-bait'>۞</span> أَوْ قَدْرَ بَاعٍ أَوْ ذِرَاعٍ خَزًّا",
        terjemah: "Atau 'Bi'tuhu Makilatan Aruzzan' (Aku menjual takaran beras padanya), atau seukuran depa atau hasta sutra."
    },
    {
        id: 206,
        arab: "وَوَاجِبُ التَّمْيِيْزِ أَنْ يُنَكَّرَا <span class='pemisah-bait'>۞</span> وَأَنْ يَكُوْنَ مُطْلَقًا مُؤَخَّرَا",
        terjemah: "Dan wajib bagi Tamyiz untuk dinakirahkan, dan wajib diakhirkan secara mutlak (dari amilnya)."
    },

    // --- BAB: AL-ISTITSNA' (207-217) ---
    {
        id: 207,
        header: "باب الاستثناء",
        arab: "أَخْرِجْ بِهِ مِنَ الْكَلَامِ مَا خَرَجْ <span class='pemisah-bait'>۞</span> مِنْ حُكْمِهِ وَكَانَ فِي اللَّفْظِ انْدَرَجْ",
        terjemah: "Keluarkanlah dengan Istitsna dari kalam, apa-apa yang keluar dari hukumnya, yang mana (sebelumnya) ia masuk dalam lafadz."
    },
    {
        id: 208,
        arab: "وَلَفْظُ اْلاِسْتِثْنَا الَّذِيْ لَهُ حَوَى <span class='pemisah-bait'>۞</span> إِلَّا وَغَيْرٌ وَسِوًى سُوًى سَوَا",
        terjemah: "Dan lafadz Istitsna yang memuatnya adalah: Illa, Ghairun, Siwan, Suwan, dan Sawa."
    },
    {
        id: 209,
        arab: "خَلَا عَدَا حَاشَا فَمَعْ إِلَّا انْصِبِ <span class='pemisah-bait'>۞</span> مَا أَخْرَجَتْ مِنْ ذِيْ تَمَامٍ مُوْجَبِ",
        terjemah: "Khola, 'Ada, Hasya. Maka bersama 'Illa' nashabkanlah mustatsna yang dikeluarkan dari kalam Tam Mujab (sempurna & positif)."
    },
    {
        id: 210,
        arab: "كَقَامَ كُلُّ الْقَوْمِ إِلَّا وَاحِدَا <span class='pemisah-bait'>۞</span> وَقَدْ رَأَيْتُ الْقَوْمَ إِلَّا الْخَالِدَا",
        terjemah: "Seperti: 'Qoma Kullul Qaumi Illa Wahidan' (Kaum berdiri kecuali satu), dan 'Ro-aitul Qauma Illal Kholida'."
    },
    {
        id: 211,
        arab: "وَإِنْ يَكُنْ مِنْ ذِيْ تَمَامٍ انْتَفَى <span class='pemisah-bait'>۞</span> فَأَبْدِلَنْ وَالنَّصْبُ فِيْهِ ضُعِّفَا",
        terjemah: "Dan jika kalam itu Tam Manfi (sempurna & negatif/dinafikan), maka jadikanlah Badal (sebagai ganti), dan Nashab padanya itu lemah (kurang unggul)."
    },
    {
        id: 212,
        arab: "هَذَا إِذَا اسْتَثْنَيْتَهُ مِنْ جِنْسِهِ <span class='pemisah-bait'>۞</span> وَمَا سِوَاهُ حُكْمُهُ بِعَكْسِهِ",
        terjemah: "Ini (Badal) jika engkau mengecualikannya dari jenisnya (Muttashil). Dan selain itu (Munqathi'), maka hukumnya sebaliknya (Wajib Nashab menurut mayoritas)."
    },
    {
        id: 213,
        arab: "كَلَنْ يَقُوْمَ الْقَوْمُ إِلَّا جَعْفَرُ <span class='pemisah-bait'>۞</span> وَالنَّصْبُ فِي اْلأَبْعِرِ أَكْثَرُ",
        terjemah: "Seperti 'Lan Yaqumal Qaumu Illa Ja'faru' (Badal). Dan Nashab pada (contoh istitsna) unta (Munqathi') itu lebih banyak."
    },
    {
        id: 214,
        arab: "وَإِنْ يَكُنْ مِنْ نَاقِصٍ فَإِلَّا <span class='pemisah-bait'>۞</span> قَدْ أُلْغِيَتْ وَالْعَامِلُ اسْتَقَلَّا",
        terjemah: "Dan jika dari kalam Naqish (kurang/mufarragh), maka 'Illa' sungguh tidak beramal (mulghoh), dan amil beramal mandiri (sesuai posisinya)."
    },
    {
        id: 215,
        arab: "كَلَمْ يَقُمْ إِلَّا أَبُوْكَ أَوَّلَا <span class='pemisah-bait'>۞</span> وَلَا أَرَى إِلَّا أَخَاكَ مُقْبِلَا",
        terjemah: "Seperti 'Lam Yaqum Illa Abuka' (Fa'il) di awal. Dan 'La Aro Illa Akhoka Muqbila' (Maf'ul & Hal)."
    },
    {
        id: 216,
        arab: "وَخَفْضُ مُسْتَثْنًى عَلَى اْلإِطْلَاقِ <span class='pemisah-bait'>۞</span> يَجُوْزُ بَعْدَ السَّبْعَةِ الْبَوَاقِيْ",
        terjemah: "Dan mengkhafadhkan (menjarkan) mustatsna secara mutlak itu boleh setelah tujuh lafadz sisanya (Ghairu, Siwan, dll)."
    },
    {
        id: 217,
        arab: "وَالنَّصْبُ أَيْضًا جَائِزٌ لِمَنْ يَشَا <span class='pemisah-bait'>۞</span> بِمَا خَلَا وَمَا عَدَا وَمَا حَاشَا",
        terjemah: "Dan Nashab juga boleh bagi yang menghendaki, dengan lafadz Ma Khola, Ma 'Ada, dan Ma Hasya."
    },
    
    // --- BAB: LAA NAFIYAH (218-224) ---
    {
        id: 218,
        header: "باب لا العاملة عمل إن",
        arab: "وَحُكْمُ لَا كَحُكْمِ إِنَّ فِي الْعَمَلْ <span class='pemisah-bait'>۞</span> فَانْصِبْ بِهَا مُنَكَّرًا بِهَا اتَّصَلْ",
        terjemah: "Dan hukum 'Laa' (Nafi Lil Jinsi) itu seperti hukum 'Inna' dalam beramal. Maka nashabkanlah dengannya isim nakirah yang bersambung dengannya."
    },
    {
        id: 219,
        arab: "مُضَافًا أَوْ مُشَابِهَ الْمُضَافِ <span class='pemisah-bait'>۞</span> كَلَا غُلَامَ حَاضِرٍ مُكَافِي",
        terjemah: "Baik ia Mudhaf atau Syibhul Mudhaf (menyerupai mudhaf). Seperti: 'Laa Ghulama Hadhirin Mukafi' (Tidak ada pembantu yang hadir yang mencukupi)."
    },
    {
        id: 220,
        arab: "لَكِنْ إِذَا تَكَرَّرَتْ أَجْرَيْتَهَا <span class='pemisah-bait'>۞</span> كَذَاكَ فِي اْلإِعْمَالِ أَوْ أَلْغَيْتَهَا",
        terjemah: "Akan tetapi jika 'Laa' diulang-ulang, maka engkau boleh memberlakukannya (beramal) atau membatalkannya (mulghoh)."
    },
    {
        id: 221,
        arab: "وَعِنْدَ إِفْرَادِ اسْمِهَا الْزَمِ الْبِنَا <span class='pemisah-bait'>۞</span> مُرَكَّبًا أَوْ رَفْعَهُ مُنَوَّنَا",
        terjemah: "Dan ketika isimnya Mufrad (tidak mudhaf), maka wajib mabni (fathah/tarkib), atau merafa'kannya dengan tanwin (jika Laa tidak beramal)."
    },
    {
        id: 222,
        arab: "كَلَا أَخٌ وَلَا أَبٌ فَانْصِبْ أَبَا <span class='pemisah-bait'>۞</span> أَيْضًا وَإِنْ تَرْفَعْ فَحَالًا تَنْصِبَا",
        terjemah: "Seperti 'Laa Akhun wa Laa Abun'. Dan boleh nashabkan 'Aba' (Laa Aba) juga. Dan jika engkau merafa'kan (Laa Abun), maka nashabkanlah sebagai Hal."
    },
    {
        id: 223,
        arab: "وَحَيْثُ عَرَّفْتَ اسْمَهَا أَوْ فُصِلَاهْ <span class='pemisah-bait'>۞</span> فَارْفَعْ وَنَوِّنْ وَالْتَزِمْ تَكْرَارَ لَاهْ",
        terjemah: "Dan sekiranya engkau mema'rifatkan isimnya atau dipisah (antara Laa dan isimnya), maka rafa'kanlah dan tanwinlah, serta wajib mengulang 'Laa'-nya."
    },
    {
        id: 224,
        arab: "كَلَا عَلِيٌّ حَاضِرٌ وَلَا عُمَرْ <span class='pemisah-bait'>۞</span> وَلَا لَنَا عَبْدٌ وَلَا مَا يُدَّخَرْ",
        terjemah: "Seperti 'Laa 'Aliyyun Hadhirun wa Laa Umar', dan 'Laa Lana 'Abdun wa Laa Ma Yuddakhor'."
    },

    // --- BAB: AL-MUNADA (225-230) ---
    {
        id: 225,
        header: "باب المنادى",
        arab: "خَمْسٌ تُنَادَى وَهْيَ مُفْرَدٌ عَلَمْ <span class='pemisah-bait'>۞</span> وَمُفْرَدٌ مُنَكَّرٌ قَصْدًا يُؤَمْ",
        terjemah: "Ada lima macam kata yang dipanggil (Munada): Mufrad Alam (Nama), Mufrad Nakirah yang dituju (Maksud)."
    },
    {
        id: 226,
        arab: "وَمُفْرَدٌ مُنَكَّرٌ سِوَاهُ <span class='pemisah-bait'>۞</span> كَذَا الْمُضَافُ وَالَّذِيْ ضَاهَاهُ",
        terjemah: "Dan Mufrad Nakirah selain itu (Ghairu Maksud), juga Munada Mudhaf, dan yang menyerupainya (Syibhul Mudhaf)."
    },
    {
        id: 227,
        arab: "فَاْلأَوَّلَانِ فِيْهِمَا الْبِنَا لُزِمْ <span class='pemisah-bait'>۞</span> عَلَى الَّذِيْ فِي رَفْعِ كُلٍّ قَدْ عُلِمْ",
        terjemah: "Maka dua yang pertama (Alam & Nakirah Maksud) wajib Mabni, menetapi tanda rafa'nya yang sudah diketahui (Dhommah/Alif/Wawu)."
    },
    {
        id: 228,
        arab: "مِنْ غَيْرِ تَنْوِيْنٍ عَلَى اْلإِطْلَاقِ <span class='pemisah-bait'>۞</span> وَالنَّصْبُ فِي الثَّلَاثَةِ الْبَوَاقِيْ",
        terjemah: "Tanpa tanwin secara mutlak. Sedangkan Nashab itu wajib pada tiga sisanya (Nakirah Ghairu Maksud, Mudhaf, Syibhul Mudhaf)."
    },
    {
        id: 229,
        arab: "كَيَا عَلِيُّ يَا غُلَامِيْ بِي انْطَلِقْ <span class='pemisah-bait'>۞</span> يَا غَافِلًا عَنْ ذِكْرِ رَبِّهِ أَفِقْ",
        terjemah: "Seperti: 'Ya 'Aliyyu' (Mabni), 'Ya Ghulamiy bi Intholiq' (Mudhaf). 'Ya Ghofilan 'an Dzikri Robbihi Afiq' (Syibhul Mudhaf)."
    },
    {
        id: 230,
        arab: "يَا كَاشِفَ الْبَلْوَى وَيَا أَهْلَ الثَّنَا <span class='pemisah-bait'>۞</span> وَيَا لَطِيْفًا بِالْعِبَادِ الْطُفْ بِنَا",
        terjemah: "'Ya Kasyifal Balwa' (Wahai Penyingkap Bencana), 'Ya Ahlat Tsana' (Wahai Ahli Pujian), dan 'Ya Lathifan bil 'Ibadi' (Wahai Dzat Yang Lembut pada hamba), berlembutlah pada kami."
    },

    // --- BAB: MAF'UL LI AJALIH (231-233) ---
    {
        id: 231,
        header: "باب المفعول لأجله",
        arab: "وَالْمَصْدَرَ انْصِبْ إِنْ أَتَى بَيَانَا <span class='pemisah-bait'>۞</span> لِعِلَّةِ الْفِعْلِ الَّذِيْ قَدْ كَانَا",
        terjemah: "Dan nashabkanlah Masdar jika ia datang sebagai penjelasan, bagi sebab (alasan) terjadinya fi'il."
    },
    {
        id: 232,
        arab: "وَشَرْطُهُ اتِّحَادُهُ مَعْ عَامِلِهْ <span class='pemisah-bait'>۞</span> فِيْمَا لَهُ مِنْ وَقْتِهِ وَفَاعِلِهْ",
        terjemah: "Dan syaratnya adalah bersatunya Masdar dengan Amilnya, dalam hal waktu dan pelakunya (fa'ilnya)."
    },
    {
        id: 233,
        arab: "كَقُمْ لِزَيْدٍ اِتِّقَاءَ شَرِّهِ <span class='pemisah-bait'>۞</span> وَاقْصِدْ عَلِيًّا ابْتِغَاءَ بِرِّهِ",
        terjemah: "Seperti 'Qum li Zaidin Ittiqo-a Syarrihi' (Berdirilah karena takut keburukan Zaid), dan 'Waqshid 'Aliyyan Ibtigho-a Birrihi' (Tujulah Ali karena mengharap kebaikannya)."
    },

    // --- BAB: MAF'UL MA'AH (234-236) ---
    {
        id: 234,
        header: "باب المفعول معه",
        arab: "تَعْرِيْفُهُ اسْمٌ بَعْدَ وَاوٍ فَسَّرَا <span class='pemisah-bait'>۞</span> مَنْ كَانَ مَعْهُ فِعْلُ غَيْرِهِ جَرَى",
        terjemah: "Definisinya adalah isim yang terletak setelah Wawu (Ma'iyyah) yang menjelaskan, siapa yang pekerjaan itu berlaku bersamanya."
    },
    {
        id: 235,
        arab: "فَانْصِبْهُ بِالْفِعْلِ الَّذِيْ بِهِ اصْطَحَبْ <span class='pemisah-bait'>۞</span> أَوْ شِبْهِ فِعْلٍ كَاسْتَوَى الْمَا وَالْخَشَبْ",
        terjemah: "Maka nashabkanlah ia dengan fi'il yang menyertainya, atau yang serupa fi'il. Seperti: 'Istawal Mau wal Khasyaba' (Air naik setara kayu)."
    },
    {
        id: 236,
        arab: "وَكَالْأَمِيْرُ قَادِمٌ وَالْعَسْكَرَا <span class='pemisah-bait'>۞</span> وَنَحْوُ سِرْتُ وَالْأَمِيْرَ لِلْقُرَى",
        terjemah: "Dan seperti 'Al-Amiru Qodimun wal 'Askara' (Raja datang bersama tentara), dan contoh 'Sirtu wal Amira lil Qura' (Aku berjalan bersama Raja ke desa)."
    },

    // --- BAB: MAHFUDHAT (237-240) ---
    {
        id: 237,
        header: "باب محفوظات الأسماء",
        arab: "خَافِضُهَا ثَلَاثَةٌ أَنْوَاعُ <span class='pemisah-bait'>۞</span> الْحَرْفُ وَالْمُضَافُ وَالْإِتْبَاعُ",
        terjemah: "Yang meng-khafadh-kan (menjarkan) isim ada tiga macam: Huruf (Jar), Mudhaf, dan Itba' (Tawabi')."
    },
    {
        id: 238,
        arab: "أَمَّا الْحُرُوْفُ هَهُنَا فَمِنْ إِلَى <span class='pemisah-bait'>۞</span> بَاءٌ وَكَافٌ فِي وَلَامٌ عَنْ عَلَى",
        terjemah: "Adapun Huruf Jar di sini adalah: Min, Ila, Ba', Kaf, Fi, Lam, 'An, 'Ala."
    },
    {
        id: 239,
        arab: "كَذَاكَ وَاوٌ بَا وَتَاءٌ فِي الْحَلِفْ <span class='pemisah-bait'>۞</span> مُذْ مُنْذُ رُبَّ وَاوُ رُبَّ الْمُنْحَذِفْ",
        terjemah: "Demikian juga Wawu, Ba, dan Ta' pada sumpah (Qosam). Serta Mudz, Mundzu, Rubba, dan Wawu Rubba yang dibuang."
    },
    {
        id: 240,
        arab: "كَسِرْتُ مِنْ مِصْرَ إِلَى الْعِرَاقِ <span class='pemisah-bait'>۞</span> وَجِئْتُ لِلْمَحْبُوْبِ بِاشْتِيَاقِ",
        terjemah: "Seperti: 'Sirtu min Mishro ilal 'Iroqi' (Aku berjalan dari Mesir ke Iraq), dan 'Ji'tu lil Mahbubi bisytiyaqi' (Aku datang pada kekasih dengan rindu)."
    },

    // --- BAB: IDHAFAH (241-244) ---
    {
        id: 241,
        header: "باب الإضافة",
        arab: "مِنَ الْمُضَافِ أَسْقِطِ التَّنْوِيْنَا <span class='pemisah-bait'>۞</span> أَوْ نُوْنَهُ كَأَهْلُكُمْ أَهْلُوْنَا",
        terjemah: "Buanglah Tanwin dari Mudhaf, atau Nun-nya (Tatsniyah/Jamak). Seperti 'Ahlukum' (asalnya Ahluna)."
    },
    {
        id: 242,
        arab: "وَاخْفِضْ بِهِ الْإِسْمَ الَّذِيْ لَهُ تَلَا <span class='pemisah-bait'>۞</span> كَقَاتِلَا غُلَامِ زَيْدٍ قُتِلَا",
        terjemah: "Dan jarkanlah dengannya (Mudhaf) isim yang mengiringinya (Mudhaf Ilaih). Seperti: 'Qotila Ghulami Zaidin Qutila' (Dua pembunuh pembantu Zaid telah dibunuh)."
    },
    {
        id: 243,
        arab: "وَهُوَ عَلَى تَقْدِيْرِ فِيْ أَوْ لَامِ <span class='pemisah-bait'>۞</span> أَوْ مِنْ كَمَكْرِ اللَّيْلِ أَوْ غُلَامِيْ",
        terjemah: "Idhafah itu menyimpan makna 'Fii', atau 'Lam', atau 'Min'. Seperti 'Makril Laili' (Makar di malam hari) atau 'Ghulami' (Milikku)."
    },
    {
        id: 244,
        arab: "أَوْ عَبْدِ زَيْدٍ أَوَ انَا زُجَاجِ <span class='pemisah-bait'>۞</span> أَوْ ثَوْبِ خَزٍّ أَوْ كَبَابِ سَاجِ",
        terjemah: "Atau 'Abdi Zaidin' (Milik), atau 'Ina Zujaji' (Dari kaca), atau 'Tsaubi Khazzin' (Dari sutra), atau 'Bab Saji' (Pintu dari kayu jati)."
    },

    {
        id: 245,
        header: "الخاتمة",
        arab: "وَقَدْ مَضَتْ أَحْكَامُ كُلِّ تَابِعْ <span class='pemisah-bait'>۞</span> مَبْسُوْطَةً فِي الْأَرْبَعِ التَّوَابِعْ",
        terjemah: "Dan sungguh telah lalu hukum-hukum setiap Tabi', yang dijelaskan panjang lebar dalam empat bab Tawabi'."
    },
    {
        id: 246,
        arab: "فَيَا إِلَهِي الْطُفْ بِنَا فَنَتَّبِعْ <span class='pemisah-bait'>۞</span> سُبْلَ الرَّشَادِ وَالْهُدَى فَنَرْتَفِعْ",
        terjemah: "Maka wahai Tuhanku, berlembutlah kepada kami agar kami mengikuti, jalan petunjuk dan hidayah, sehingga kami menjadi mulia."
    },
    {
        id: 247,
        arab: "وَفِي جُمَادَى سَادِسِ السَّبْعِيْنَا <span class='pemisah-bait'>۞</span> بَعْدَ انْتِهَا تِسْعٍ مِنَ السِّنِيْنَا",
        terjemah: "Selesai pada bulan Jumadil (Akhir) tahun 976 H (Sittah wa Sab'ina ba'da Tis'i mi'ah)."
    },
    {
        id: 248,
        arab: "قَدْ تَمَّ نَظْمُ هَذِهِ الْمُقَدِّمَةْ <span class='pemisah-bait'>۞</span> فِي رُبْعِ أَلْفٍ كَافِيًا مَنْ أَحْكَمَهْ",
        terjemah: "Sungguh telah sempurna nadhom muqaddimah ini, dalam seperempat ribu (sekitar 250) bait, cukup bagi orang yang menguasainya."
    },
    {
        id: 249,
        arab: "نَظْمُ الْفَقِيْرِ الشَّرَفِ الْعِمْرِيْطِي <span class='pemisah-bait'>۞</span> ذِي الْعَجْزِ وَالتَّقْصِيْرِ وَالتَّفْرِيْطِ",
        terjemah: "Nadhom dari hamba yang fakir Asy-Syaraf Al-'Imrithi, yang memiliki kelemahan, kekurangan, dan keteledoran."
    },
    {
        id: 250,
        arab: "وَالْحَمْدُ لِلَّهِ مَدَى الدَّوَامِ <span class='pemisah-bait'>۞</span> عَلَى جَزِيْلِ الْفَضْلِ وَالْإِنْعَامِ",
        terjemah: "Dan segala puji bagi Allah selamanya, atas agungnya karunia dan nikmat-Nya."
    },
    {
        id: 251,
        arab: "وَأَفْضَلُ الصَّلَاةِ وَالتَّسْلِيْمِ <span class='pemisah-bait'>۞</span> عَلَى النَّبِيِّ الْمُصْطَفَى الْكَرِيْمِ",
        terjemah: "Dan shalawat serta salam yang paling utama, semoga tercurah kepada Nabi pilihan yang mulia."
    },
    {
        id: 252,
        arab: "مُحَمَّدٍ وَصَحْبِهِ وَالْآلِ <span class='pemisah-bait'>۞</span> أَهْلِ التُّقَى وَالْعِلْمِ وَالْكَمَالِ",
        terjemah: "Yaitu Nabi Muhammad, para sahabat, dan keluarganya, ahli taqwa, ilmu, dan kesempurnaan."
    }


];
