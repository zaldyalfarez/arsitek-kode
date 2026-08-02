import { HeiwaImages } from "../picture/heiwa";
import { MasterplanImages } from "../picture/masterplan";
import { EduactImages } from "../picture/eduact";

export const projectsData = [
  {
    id: 1,
    slug: "eduact",
    title: "Eduact - Platform Manajemen Event & Pembelajaran Edukasi",
    category: "E-Learning & Event Management Platform",
    description:
      "Eduact adalah platform pendidikan dan manajemen program terpadu yang dirancang untuk mengelola kelas online, kompetisi, pendaftaran peserta, pembayaran online, pengumpulan berkas submission, forum diskusi, hingga penerbitan sertifikat digital secara efisien.",
    heroDescription:
      "Platform ekosistem edukasi modern yang memudahkan peserta mendaftar event & program pembelajaran, mengunggah tugas, membayar via payment gateway terintegrasi, serta membantu admin mengelola operasional secara real-time.",
    thumbnail: EduactImages.Thumbnail,
    heroImage: EduactImages.Hero,
    stats: {
      industri: "Pendidikan / E-Learning",
      waktu: "3 Bulan",
      teknologi: "React, Node.js, Express, PostgreSQL",
      ukuranTim: "2 Orang",
    },
    challenge: {
      title: "Manajemen Program Edukasi & Pengelolaan Event Terfragmentasi",
      description:
        "Sebelum hadirnya Eduact, alur pendaftaran peserta, verifikasi dokumen submission, pelacakan pembayaran, dan penyebaran materi dilakukan secara terpisah dan manual. Hal ini memicu inefisiensi operasional panitia serta membuat alur belajar peserta kurang terstruktur.",
      painPoints: [
        "Proses registrasi dan pengumpulan berkas tugas/submission peserta dilakukan manual sehingga memakan waktu lama.",
        "Sistem pembayaran event belum terintegrasi otomatis, memerlukan konfirmasi dan verifikasi manual.",
        "Tidak adanya portal terpusat bagi peserta untuk memantau progres tahapan program, pengumuman, dan mengunduh sertifikat.",
      ],
    },
    solution: {
      title: "Platform Workspace Terintegrasi untuk Pembelajaran dan Operasional Event",
      description:
        "Kami membangun Eduact sebagai Single Page Application (SPA) responsif yang menghubungkan peserta, admin, dan mentor dalam satu ekosistem workspace. Frontend dikembangkan dengan React, TypeScript, Vite, dan Tailwind CSS untuk performa UI dashboard yang cepat dan nyaman. Backend menggunakan Node.js (Express) dengan database PostgreSQL dan Sequelize ORM, didukung antrean latar belakang BullMQ/Redis serta integrasi payment gateway Midtrans untuk transaksi otomatis.",
      features: [
        {
          title: "Manajemen Program & Stage Management",
          description:
            "Memungkinkan admin mengelola alur program, tahapan seleksi (stage), modul materi, forum diskusi, serta pengumuman secara real-time.",
        },
        {
          title: "Sistem Submission & Penerbitan Sertifikat",
          description:
            "Peserta dapat mengunggah berkas submission tugas, diikuti proses peninjauan oleh mentor/admin dan penerbitan sertifikat digital berbasis template secara otomatis.",
        },
        {
          title: "Integrasi Payment Gateway & RBAC",
          description:
            "Mendukung pendaftaran dan transaksi kelas/event secara langsung dengan payment gateway Midtrans serta pengaturan hak akses berbasis peran (RBAC).",
        },
      ],
    },
    gallery: [EduactImages.gallery[0], EduactImages.gallery[1]],
    impact: [
      { title: "Efisiensi Operasional Program", value: 95 },
      { title: "Kemudahan Akses & Registrasi", value: 100 },
      { title: "Otomatisasi Verifikasi & Sertifikat", value: 90 },
    ],
    techs: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Sequelize",
      "Midtrans",
      "Redis / BullMQ",
    ],
    featured: true,
    demo: "https://eduact.arsitek-kode.com/",
  },

  {
    id: 2,
    slug: "widyatama-heiwa-program",
    title: "Portal Berita Widyatama Heiwa Program",
    category: "Content Management System",
    description:
      "Heiwa Program – Portal digital Prodi Bahasa Jepang Universitas Widyatama untuk dokumentasi kegiatan, berita, dan foto secara transparan dan mudah diakses.",
    heroDescription:
      "Portal digital untuk mendokumentasikan dan membagikan seluruh kegiatan Prodi Bahasa Jepang Widyatama dengan cepat dan terpusat.",
    thumbnail: HeiwaImages.Thumbnail,
    heroImage: HeiwaImages.Hero,
    stats: {
      industri: "Pendidikan",
      waktu: "4 Bulan",
      teknologi: "Laravel, HTML, CSS, JS",
      ukuranTim: "2 Orang",
    },
    challenge: {
      title: "Kesulitan Dokumentasi dan Transparansi Kegiatan Prodi",
      description:
        "Sebelum adanya portal ini, dokumentasi kegiatan Prodi Bahasa Jepang dilakukan secara manual dan tersebar di berbagai media. Mahasiswa kesulitan mengakses informasi terbaru, foto, dan berita kegiatan secara cepat dan terpusat.",
      painPoints: [
        "Dokumentasi kegiatan masih berbentuk fisik atau tersebar di chat/grup.",
        "Kurangnya transparansi informasi bagi mahasiswa terkait kegiatan prodi.",
        "Kesulitan dalam mengarsipkan berita dan foto secara rapi dan terstruktur.",
      ],
    },
    solution: {
      title: "Portal Digital Terpusat untuk Dokumentasi Kegiatan",
      description:
        "Kami membangun portal berita Heiwa Program dari scratch sesuai permintaan prodi. Backend menggunakan Laravel 9 untuk pengelolaan data yang efisien, sementara frontend menggunakan HTML, CSS, dan JavaScript agar tampilannya responsif, cepat, dan mudah digunakan.",
      features: [
        {
          title: "Digitalisasi Kegiatan",
          description:
            "Semua foto, berita, dan data kegiatan prodi diunggah dan tersimpan secara digital, memudahkan akses kapan saja.",
        },
        {
          title: "User-Friendly & Responsif",
          description:
            "Tampilan portal dibuat responsif dan intuitif sehingga mudah digunakan di berbagai perangkat, dari desktop hingga mobile.",
        },
      ],
    },
    gallery: [HeiwaImages.gallery[0], HeiwaImages.gallery[1]],
    impact: [
      { title: "Kemudahan Akses Informasi Kegiatan", value: 100 },
      { title: "Digitalisasi Dokumentasi", value: 90 },
      { title: "Peningkatan Transparansi Prodi", value: 95 },
    ],
    techs: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: true,
    demo: "https://heiwaprogram.widyatama.ac.id/",
  },

  {
    id: 3,
    slug: "masterplan-academy",
    title: "Masterplan Academy Platform Kelas Online Apotek",
    category: "E-Learning Platform",
    description:
      "Masterplan Academy adalah platform kelas online untuk pembelajaran seputar apotek, mulai dari pemenuhan syarat izin apotek hingga dokumen administrasi perusahaan apotek, memudahkan akses pembelajaran dari rumah secara efisien.",
    heroDescription:
      "Platform pembelajaran apotek yang memungkinkan peserta belajar online, mengakses materi digital, dan membayar kelas melalui sistem pembayaran online yang terintegrasi.",
    thumbnail: MasterplanImages.Thumbnail,
    heroImage: MasterplanImages.Hero,
    stats: {
      industri: "Pendidikan / E-Learning",
      waktu: "3 Bulan",
      teknologi: "Laravel, HTML, CSS, JS",
      ukuranTim: "2 Orang",
    },
    challenge: {
      title: "Efisiensi Pembelajaran dan Akses Materi Apotek",
      description:
        "Sebelum adanya platform digital, pembelajaran apotek dilakukan secara offline, sehingga sulit diakses oleh banyak orang dan memakan waktu serta biaya untuk hadir secara fisik.",
      painPoints: [
        "Peserta harus hadir langsung untuk mengikuti kelas, membatasi jangkauan pembelajaran.",
        "Pembayaran kelas dilakukan manual, memerlukan verifikasi yang memakan waktu.",
        "Dokumen dan materi pembelajaran tidak terdigitalisasi sehingga sulit diarsipkan dan dibagikan secara cepat.",
      ],
    },
    solution: {
      title: "Platform Online Terintegrasi untuk Pembelajaran Apotek",
      description:
        "Kami membangun Masterplan Academy sebagai platform kelas online dari scratch, memudahkan peserta belajar dari rumah, mengakses materi digital, dan membayar kelas secara online melalui payment gateway terintegrasi. Backend menggunakan Laravel untuk pengelolaan data kelas dan peserta, frontend menggunakan HTML, CSS, dan JavaScript agar responsif dan mudah digunakan.",
      features: [
        {
          title: "Kelas Online Interaktif",
          description:
            "Peserta dapat mengakses materi apotek digital kapan saja dan dari perangkat apapun, termasuk fitur kuis dan modul pembelajaran interaktif.",
        },
        {
          title: "Integrasi Pembayaran Online",
          description:
            "Platform mendukung pembayaran kelas secara online dengan payment gateway sehingga peserta bisa langsung mendaftar dan membayar kelas dengan mudah.",
        },
      ],
    },
    gallery: [MasterplanImages.gallery[0], MasterplanImages.gallery[1]],
    impact: [
      { title: "Kemudahan Akses Materi Apotek", value: 100 },
      { title: "Efisiensi Pembelajaran Online", value: 95 },
      { title: "Digitalisasi Administrasi dan Pembayaran", value: 90 },
    ],
    techs: ["Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Payment Gateway"],
    featured: true,
    demo: "https://masterplanacademy.id/",
  },
];
