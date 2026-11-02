import { defineLocale } from './define-locale'

// WINTER: Bahasa Indonesia for the most-seen surfaces. Anything not listed
// falls back to English via defineLocale (merged over `en`).
// ponytail: partial overlay; translate further surfaces as users hit them.
const opener = [
  'Tulis saja apa yang kamu butuhkan, pakai bahasa sehari-hari. Aku bantu langkah demi langkah.',
  'Mau dibantu apa hari ini? Tanya apa saja, dari menulis email sampai merangkum dokumen.',
  'Ceritakan masalahmu, nanti aku bantu cari jalan keluarnya.',
  'Tidak perlu paham AI. Ketik pertanyaanmu seperti chat biasa.'
]

export const id = defineLocale({
  common: { bots: 'Bot' },
  keybinds: { actions: { 'session.new': 'Chat baru' } },
  commandCenter: { nav: { newChat: { title: 'Chat baru', detail: 'Mulai chat baru' } } },
  intro: {
    stock: {
      none: opener,
      default: opener,
      helpful: opener,
      concise: opener,
      teacher: opener,
      technical: opener,
      creative: opener
    },
    greetings: ['Selamat pagi.', 'Selamat siang.', 'Selamat sore.', 'Selamat malam.'],
    suggestions: [
      'Bantu saya menulis email yang sopan',
      'Ringkas teks ini jadi poin-poin penting',
      'Buatkan rencana belajar 7 hari',
      'Jelaskan hal ini dengan bahasa sederhana'
    ]
  },
  sidebar: {
    nav: {
      'new-session': 'Chat baru',
      capabilities: 'Kemampuan',
      messaging: 'Hubungkan Telegram/WhatsApp',
      artifacts: 'Hasil kerja',
      cron: 'Tugas terjadwal'
    },
    searchAria: 'Cari chat',
    searchPlaceholder: 'Cari chat…',
    pinned: 'Disematkan',
    filter: { filters: 'Saring' },
    sessions: 'Riwayat chat',
    shiftClickHint: 'Shift+klik chat untuk menyematkan',
    projectEmpty: 'Belum ada chat',
    noSessions: 'Belum ada chat',
    loading: 'Memuat…',
    projects: {
      showAllSessions: 'Lihat semua chat',
      showAllCount: count => `Lihat semua ${count} chat`,
      sectionLabel: 'Proyek',
      home: 'Umum',
      newButton: 'Proyek baru',
      createTitle: 'Proyek baru',
      createDesc: 'Beri nama proyek, lalu tambahkan folder kerjanya (boleh lebih dari satu).',
      namePlaceholder: 'mis. Skripsi, Toko Online',
      foldersLabel: 'Folder',
      ideaLabel: 'Tentang proyek ini',
      ideaPlaceholder: 'Proyek ini tentang apa? (disimpan ke IDEA.md)',
      noFolders: 'Belum ada folder.',
      addFolder: 'Tambah folder',
      create: 'Buat'
    },
    dateDivider: {
      today: 'Tadi',
      yesterday: 'Kemarin',
      thisWeek: 'Minggu ini',
      lastWeek: 'Minggu lalu',
      thisMonth: 'Bulan ini'
    },
    row: {
      pin: 'Sematkan',
      unpin: 'Lepas sematan',
      rename: 'Ganti nama…',
      archive: 'Arsipkan',
      renameTitle: 'Ganti nama chat',
      untitledPlaceholder: 'Chat tanpa judul',
      deleteTitle: 'Hapus chat?',
      deleteDesc: title => `“${title}” akan dihapus permanen dan tidak bisa dikembalikan.`,
      deleted: 'Chat dihapus',
      ageNow: 'baru saja',
      ageDay: ' hari',
      ageHour: ' jam',
      ageMin: ' mnt',
      sessionRunning: 'Sedang dikerjakan',
      needsInput: 'Butuh jawabanmu',
      waitingForAnswer: 'Menunggu jawabanmu',
      finishedUnread: 'Selesai, belum dibaca',
      backgroundRunning: 'Tugas latar masih berjalan',
      draftSession: 'Draf, belum ada pesan terkirim'
    }
  },
  titlebar: {
    hideSidebar: 'Sembunyikan sidebar',
    showSidebar: 'Tampilkan sidebar',
    openSettings: 'Buka pengaturan',
    layoutEditor: 'Atur tata letak'
  },
  zones: { newSessionTab: 'Tab chat baru', newTab: 'Tab baru' },
  shell: {
    modelOptions: {
      options: 'Pilihan',
      thinking: 'Berpikir',
      fast: 'Cepat',
      effort: 'Kedalaman berpikir',
      minimal: 'Minimal',
      low: 'Ringan',
      medium: 'Sedang',
      high: 'Dalam',
      xhigh: 'Sangat dalam',
      max: 'Maksimal'
    }
  },
  composer: {
    message: 'Pesan',
    attach: 'Lampirkan file atau konteks',
    send: 'Kirim',
    stop: 'Berhenti',
    startVoice: 'Mulai ngobrol pakai suara',
    voiceDictation: 'Dikte suara',
    voiceEngine: 'Mesin suara',
    placeholderStarting: 'Menyalakan WINTER...',
    placeholderReconnecting: 'Menyambung ulang ke WINTER…',
    placeholderFollowUp: 'Balas…',
    newSessionPlaceholders: [
      'Mau dibantu apa?',
      'Tanya apa saja ke WINTER',
      'Ketik pertanyaanmu di sini',
      'Ceritakan apa yang kamu butuhkan'
    ]
  },
  assistant: {
    thread: {
      thinking: 'Sedang berpikir',
      thought: 'Proses berpikir',
      thoughtBriefly: 'Berpikir sebentar',
      thoughtFor: duration => `Berpikir selama ${duration}`
    }
  },
  language: {
    label: 'Bahasa',
    description: 'Pilih bahasa tampilan WINTER.',
    saving: 'Menyimpan bahasa…',
    saveError: 'Gagal mengganti bahasa',
    switchTo: 'Ganti bahasa',
    searchPlaceholder: 'Cari bahasa…',
    noResults: 'Bahasa tidak ditemukan'
  },
  interfaceMode: {
    title: 'Mode tampilan',
    hint: 'Hanya mengubah yang terlihat, bukan kemampuan WINTER.',
    sessionNote: 'Diatur oleh mode Sederhana. Perubahan di sini hanya berlaku untuk sesi ini; pilih Lengkap agar tersimpan.',
    simple: { label: 'Sederhana', description: 'Untuk ngobrol dengan WINTER. Hanya sidebar dan chat.' },
    advanced: { label: 'Lengkap', description: 'Untuk developer. Terminal, file, diff, status bar, dan tata letak.' }
  },
  settings: {
    closeSettings: 'Tutup pengaturan',
    exportConfig: 'Ekspor pengaturan',
    importConfig: 'Impor pengaturan',
    resetToDefaults: 'Kembalikan ke awal',
    resetConfirm: 'Kembalikan semua pengaturan ke bawaan WINTER?',
    exportFailed: 'Gagal mengekspor',
    resetFailed: 'Gagal mengembalikan',
    sections: {
      model: 'Model AI',
      chat: 'Chat',
      appearance: 'Tampilan',
      workspace: 'Ruang kerja',
      safety: 'Keamanan',
      memory: 'Ingatan',
      voice: 'Suara',
      advanced: 'Lanjutan'
    },
    nav: {
      providers: 'Penyedia AI',
      providerAccounts: 'Akun',
      providerApiKeys: 'Kunci API',
      providerCustomEndpoints: 'Endpoint kustom',
      providerLocalModels: 'Model lokal',
      gateway: 'Koneksi',
      apiKeys: 'Alat & kunci',
      keybinds: 'Pintasan keyboard',
      keysTools: 'Alat',
      keysSettings: 'Pengaturan',
      archivedChats: 'Chat diarsipkan',
      sessions: 'Riwayat chat',
      about: 'Tentang',
      billing: 'Tagihan',
      notifications: 'Notifikasi',
      vault: 'Kata sandi & login',
      plugins: 'Plugin'
    },
    subpages: {
      appearanceTheme: 'Tema',
      appearanceTypography: 'Huruf',
      appearanceWindowLayout: 'Jendela & tata letak',
      appearanceChatDisplay: 'Tampilan chat',
      appearancePet: 'Hewan peliharaan',
      appearanceGeneral: 'Umum',
      modelMain: 'Model utama',
      modelAuxiliary: 'Model pembantu',
      modelFallbacks: 'Model cadangan',
      chatBehavior: 'Perilaku',
      chatAttachments: 'Lampiran',
      workspaceProjects: 'Proyek',
      workspaceFiles: 'File & eksekusi',
      safetyApprovals: 'Persetujuan',
      safetyPrivacy: 'Privasi & jaringan',
      safetyCheckpoints: 'Titik simpan',
      browserProfile: 'Profil browser',
      memoryPersistent: 'Ingatan jangka panjang',
      memoryContext: 'Konteks',
      voiceConversation: 'Percakapan suara',
      voiceTranscription: 'Suara ke teks',
      voiceSpeech: 'Teks ke suara',
      advancedRuntime: 'Batas agen',
      advancedTools: 'Akses alat',
      advancedDesktop: 'Desktop & startup',
      gatewayConnection: 'Jendela ini',
      gatewayDevices: 'Koneksi tersimpan',
      keyboardShortcuts: 'Pintasan keyboard',
      notificationAlerts: 'Pemberitahuan',
      notificationSounds: 'Suara',
      archivedSessions: 'Arsip',
      defaultDirectory: 'Folder proyek bawaan',
      vaultCredentials: 'Login tersimpan',
      appUpdates: 'Versi & pembaruan',
      uninstall: 'Hapus instalasi'
    },
    searchPlaceholder: { config: 'Cari pengaturan...' },
    modeOptions: {
      light: { label: 'Terang', description: 'Tampilan cerah' },
      dark: { label: 'Gelap', description: 'Nyaman di mata' },
      system: { label: 'Ikuti sistem', description: 'Sama seperti pengaturan perangkat' }
    },
    appearance: {
      title: 'Tampilan',
      intro: 'Mode mengatur terang-gelap; tema mengatur warna.',
      colorMode: 'Mode warna',
      colorModeDesc: 'Pilih mode tetap atau ikuti pengaturan perangkatmu.',
      chatTextScaleTitle: 'Ukuran teks chat',
      uiScaleTitle: 'Ukuran tampilan',
      themeTitle: 'Tema',
      chatFontTitle: 'Huruf chat',
      reasoningCollapsedTitle: 'Sembunyikan proses berpikir',
      reasoningCollapsedDesc: 'Proses berpikir tetap ada, tapi baru terlihat kalau dibuka.'
    }
  }
})
