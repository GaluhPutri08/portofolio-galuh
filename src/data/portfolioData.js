// Portfolio Data for Galuh Saprilia Putri
// Diselaraskan secara ketat dengan CV terbaru (Tanpa penambahan data di luar CV)
import lapangkuBeranda from "../assets/lapangku-beranda.jpg";
import lapangkuAdmin from "../assets/lapangku-admin.jpg";

export const personalInfo = {
  name: "Galuh Saprilia Putri",
  shortName: "Galuh",
  initials: "GP",
  education: "D-IV Sistem Informasi Bisnis, Politeknik Negeri Malang",
  status: "Mahasiswa semester 5",
  personalBranding: "ERP Enthusiast | System Analysis | Business Process",
  careerInterestsHeadline: "ERP Functional Consultant · System Analyst · Business Process Analyst",
  careerDescription:
    "Berfokus pada pemahaman proses bisnis, analisis kebutuhan sistem, implementasi ERP, pengelolaan data, dan dokumentasi sistem informasi.",
  careerPaths: [
    "ERP Functional Consultant",
    "System Analyst",
    "IT Business Analyst",
  ],
  location: "Malang, Jawa Timur, Indonesia",
  institution: "Politeknik Negeri Malang",
  studyProgram: "D-IV Sistem Informasi Bisnis",
  headlineGreeting: "Hello, I'm Galuh Saprilia Putri.",
  heroDescription:
    "Mahasiswa semester 5 Program Studi Sistem Informasi Bisnis di Politeknik Negeri Malang dengan fokus utama pada implementasi dan pengelolaan ERP menggunakan Odoo, analisis proses bisnis, pengelolaan data, dan dokumentasi sistem informasi.",
  aboutText:
    "Saya merupakan mahasiswa semester 5 Program Studi Sistem Informasi Bisnis di Politeknik Negeri Malang yang memiliki ketertarikan pada bidang Enterprise Resource Planning (ERP), khususnya implementasi dan pengelolaan sistem Odoo.\n\nSaya memiliki pengalaman akademik dalam penggunaan Odoo untuk proses bisnis penjualan, pembelian, inventaris, dan manufaktur. Selain itu, saya memahami dasar analisis proses bisnis, pengelolaan data, serta dokumentasi sistem.\n\nSaya memiliki kemampuan berpikir analitis, teliti, mampu bekerja sama dalam tim, dan antusias untuk mengembangkan keterampilan dalam implementasi serta konfigurasi sistem ERP.",
  coreApproaches: [
    {
      title: "ERP Implementation",
      desc: "Memahami penggunaan Odoo untuk mendukung proses bisnis penjualan, pembelian, inventaris, dan manufaktur.",
    },
    {
      title: "Business Process Analysis",
      desc: "Memahami dan menganalisis alur proses bisnis untuk mengetahui kebutuhan serta mendukung penerapan sistem informasi.",
    },
    {
      title: "System Analysis & Documentation",
      desc: "Menganalisis kebutuhan pengguna, memahami kebutuhan sistem, serta menyusun dokumentasi sistem yang terstruktur.",
    },
    {
      title: "Data Management & System Testing",
      desc: "Memahami pengelolaan basis data, pengembangan fitur aplikasi, serta melakukan pengujian sistem menggunakan Cypress.",
    },
  ],
  contacts: {
    email: "galuh.saprilia@gmail.com",
    github: "https://github.com/GaluhPutri08",
    linkedin: "https://www.linkedin.com/in/galuh-putri-7188a5324/",
    cvDownloadPath: "#cv-preview",
  },
};

export const skillsData = [
  {
    category: "ERP & Business Analysis",
    description: "Keahlian utama dalam konfigurasi Odoo, pemahaman proses bisnis, dan analisis kebutuhan pengguna.",
    skills: [
      { name: "Dasar Odoo" },
      { name: "Analisis kebutuhan pengguna" },
      { name: "Sistem Informasi Bisnis" },
    ],
  },
  {
    category: "Development",
    description: "Teknologi pengembangan web dan aplikasi yang digunakan dalam proyek akademik.",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Laravel" },
      { name: "Dart" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    category: "Testing",
    description: "Pengujian fungsionalitas dan kualitas sistem berbasis otomatisasi.",
    skills: [
      { name: "Cypress" },
    ],
  },
  {
    category: "Languages",
    description: "Bahasa komunikasi untuk koordinasi tim dan dokumentasi teknis.",
    skills: [
      { name: "Bahasa Indonesia" },
      { name: "Bahasa Inggris" },
    ],
  },
];

export const projectsData = [
  {
    id: "lensa-mbg",
    title: "Lensa MBG – Sistem Transparansi dan Pengelolaan Makan Bergizi Gratis",
    category: "Featured Academic Project (PBL Semester 5)",
    projectType: "pbl",
    isFeatured: true,
    timeline: "PBL Semester 5",
    role: "Database, Feature Development & Testing",
    summary:
      "Sistem informasi berbasis web untuk mendukung transparansi dan pengelolaan proses Makan Bergizi Gratis.",
    contextNote:
      "Proyek utama pengembangan sistem berbasis tim dalam skema Project-Based Learning (PBL) perkuliahan semester 5.",
    contributions: [
      "Berkontribusi dalam pengelolaan basis data.",
      "Berkontribusi dalam pengembangan fitur sistem.",
      "Melakukan pengujian sistem menggunakan Cypress.",
    ],
    technologies: ["Laravel", "Tailwind CSS", "Supabase", "Cypress"],
    githubUrl: "https://github.com/FinaIsma/lensa-mbg",
    liveDemoUrl: "https://drive.google.com/file/d/1O3ihyb1HbVRChMXhC0LmtiP9Q-iwRgvg/view?usp=sharing",
    previewType: "web-system",
  },
  {
    id: "lapangku",
    title: "Lapangku – Aplikasi Pemesanan Lapangan Olahraga",
    category: "Academic Project (PBL Semester 4)",
    projectType: "pbl",
    isFeatured: false,
    timeline: "PBL Semester 4",
    role: "System Analyst & Admin Developer",
    summary:
      "Aplikasi berbasis web/mobile untuk memudahkan pengguna mencari dan melakukan pemesanan lapangan olahraga.",
    contextNote:
      "Proyek akademik pendukung berbasis tim dalam skema Project-Based Learning (PBL) semester 4 yang menampilkan pengalaman analisis kebutuhan, proses bisnis, dokumentasi, pengujian, dan pengembangan fitur admin.",
    contributions: [
      "Analisis kebutuhan sistem.",
      "Perancangan proses bisnis.",
      "Dokumentasi sistem.",
      "Pengujian sistem.",
      "Pengembangan fitur admin.",
    ],
    technologies: ["Flutter", "Firebase", "Dart", "GitHub"],
    githubUrl: "https://github.com/Maulanahb/Lapangku",
    liveDemoUrl: "",
    previewType: "mobile-app",
    screenshots: [
      {
        url: lapangkuBeranda,
        title: "Katalog & Beranda Lapangan (Customer)",
        caption: "Antarmuka sisi pengguna: pencarian lapangan, filter kategori olahraga, lokasi terdekat, dan tarif per jam.",
      },
      {
        url: lapangkuAdmin,
        title: "Kelola Status Lapangan (Fitur Admin - Kontribusi Galuh)",
        caption: "Fitur admin yang dikembangkan oleh Galuh: pengelolaan status operasional lapangan indoor dan aktivasi izin booking customer secara real-time.",
      },
    ],
  },
  {
    id: "galuhe-bakery",
    title: "Galuhe Bakery – ERP Practical Coursework",
    category: "Practical Coursework",
    projectType: "coursework",
    isFeatured: false,
    timeline: "Tugas Praktikum",
    role: "ERP Learning Experience",
    summary:
      "Praktikum akademik berupa simulasi penerapan proses bisnis menggunakan Odoo. Kegiatan meliputi pengelolaan produk dan variannya, simulasi penjualan dan faktur, pembelian, pengelolaan persediaan bahan baku, serta proses manufaktur.",
    contextNote:
      "Kegiatan dilakukan dalam konteks pembelajaran praktikum akademik perkuliahan untuk memahami dan mempraktikkan alur kerja sistem ERP Odoo secara langsung.",
    contributions: [
      "Mengelola data produk, atribut, dan varian produk berdasarkan ukuran dan jenis isian.",
      "Mempraktikkan proses penjualan, pembuatan faktur, dan pengelolaan pembayaran uang muka (down payment).",
      "Mempelajari proses pembelian dan pengelolaan persediaan bahan baku.",
      "Mempraktikkan proses manufaktur mulai dari pencatatan bahan baku, tahapan produksi, hingga pencatatan stok produk jadi.",
    ],
    technologies: ["Odoo"],
    githubUrl: "",
    liveDemoUrl: "https://drive.google.com/file/d/1C5CxKjMltg1SADNCroppYLqjWjuyR0be/view?usp=sharing",
    previewType: "erp-simulation",
  },
];

export const workExperienceData = [
  {
    id: "the-nice-playland",
    role: "Food Server",
    company: "The Nice Playland Tulungagung",
    period: "Agustus 2026",
    location: "Tulungagung, Jawa Timur",
    responsibilities: [
      "Membantu melayani pelanggan dan menangani pesanan selama periode ramai pengunjung.",
      "Mendukung kelancaran operasional.",
      "Mengembangkan kemampuan komunikasi, kerja sama tim, dan manajemen waktu.",
    ],
  },
];

export const educationData = [
  {
    id: "polinema",
    institution: "Politeknik Negeri Malang",
    degree: "Sarjana Terapan (D-IV) Sistem Informasi Bisnis",
    period: "2024 – Sekarang",
    status: "Mahasiswa semester 5",
    location: "Malang, Jawa Timur",
    description:
      "Program Studi Sistem Informasi Bisnis dengan fokus studi pada implementasi sistem ERP, analisis proses bisnis, manajemen data, dan rekayasa perangkat lunak.",
  },
  {
    id: "man2-tulungagung",
    institution: "MAN 2 Tulungagung",
    degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    period: "2022 – 2024",
    status: "Lulus",
    location: "Tulungagung, Jawa Timur",
    description:
      "Pendidikan menengah atas dengan fokus pada ilmu sains dasar, matematika terapan, dan pemikiran logis terstruktur.",
  },
];
