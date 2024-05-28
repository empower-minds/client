import Journal from "./../assets/illustrations/Journal.png";
import DASS from "./../assets/illustrations/DASS.png";
import Counselling from "./../assets/illustrations/Counselling.png";
import Diary from "./../assets/icons/Icon diary.png";
import FuturePlan from "./../assets/icons/Icon future.png";
import DayinLife from "./../assets/icons/Icon day in life.png";
import Schedule from "./../assets/icons/Icon schedules.png";
import bookillustrations from "./../assets/illustrations/book.png";
import futureillustrations from "./../assets/illustrations/Future.png";
import DayinLifeillustrations from "./../assets/illustrations/day in life.png";
import Story1 from "./../assets/icons/ImageStory1.png";
import Story2 from "./../assets/icons/ImageStory2.png";
import Story3 from "./../assets/icons/ImageStory3.png";
import Relax from "./../assets/images/Relax.jpg";
import StressedWoman from "./../assets/images/StressedWoman.png";

import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  BookOpenIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  SparklesIcon,
  NewspaperIcon,
  ChatBubbleBottomCenterIcon
} from "@heroicons/react/24/outline";

export const sidebar = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Story", href: "/dashboard/story", icon: BookOpenIcon },
  {
    name: "DASS Assesment",
    href: "/dashboard/dass",
    icon: ArrowTrendingUpIcon,
  },
  { name: "Schedule", href: "/dashboard/schedule", icon: CalendarIcon },
  { name: "For You", href: "/dashboard/for-you", icon: SparklesIcon },
];

export const sidebarAdmin = [
  { name: "Dashboard", href: "/dashboard/admin", icon: HomeIcon },
  { name: "Mahasiswa", href: "/dashboard/admin/data-mahasiswa", icon: UserGroupIcon },
  { name: "Penulis", href: "/dashboard/admin/data-penulis", icon: UserIcon },
  { name: "Story", href: "/dashboard/admin/story", icon: BookOpenIcon },
  {
    name: "DASS Assesment",
    href: "/dashboard/admin/dass",
    icon: ArrowTrendingUpIcon,
  },
  { name: "Schedule", href: "/dashboard/admin/schedule", icon: CalendarIcon },
  { name: "Article", href: "/dashboard/admin/article", icon: NewspaperIcon },
  { name: "Feedback", href: "/dashboard/admin/feedback", icon: ChatBubbleBottomCenterIcon },
];

export const sidebarPenulis = [
  { name: "Dashboard", href: "/dashboard/penulis", icon: HomeIcon },
  { name: "Article", href: "/dashboard/penulis/article", icon: NewspaperIcon },
  { name: "Feedback", href: "/dashboard/penulis/feedback", icon: ChatBubbleBottomCenterIcon },
];

export const navigation = [
  {
    href: window.location.pathname === "/" ? "/#home" : "/",
    name: "Home",
  },
  {
    href: window.location.pathname === "/" ? "/#about" : "/",
    name: "About",
  },
  {
    href: window.location.pathname === "/" ? "/#feature" : "/",
    name: "Features",
  },
  {
    href: window.location.pathname === "/" ? "/#faq" : "/",
    name: "FAQ",
  },
  {
    href: "#contactus",
    name: "Contact Us",
  },
];

export const empowerMinds = [
  {
    title: "Empower Minds",
    desc: "Platform yang memberikan dukungan yang dibutuhkan dalam mengatasi tekanan akademik, stres, dan kecemasan yang sering terjadi pada mereka.",
  },
];

export const features = [
  {
    title: "Story",
    desc: "Pengguna dapat mencatat cerita mereka, future plan, dan daily in life.",
    image: Journal, // Hilangkan kurung kurawal
  },
  {
    title: "DASS",
    desc: "DASS (Depression Anxiety Stress Scale) adalah seperangkat skala subyektif untuk mengukur tingkat depresi, kecemasan, dan stres seseorang",
    image: DASS, // Hilangkan kurung kurawal
  },
  {
    title: "Counselling",
    desc: "Layanan konseling tersedia untuk mereka yang ingin berbicara lebih dalam dengan konselor.",
    image: Counselling, // Hilangkan kurung kurawal
  },
];

export const faqs = [
  {
    id: 1,
    question: "Apa itu Empower Minds?",
    answer:
      "Empower Minds merupakan platform yang memberikan dukungan yang dibutuhkan dalam mengatasi tekanan akademik, stres, dan kecemasan yang sering terjadi pada mereka.",
  },
  {
    id: 2,
    question: "Bagaimana cara menggunakan website Empower Minds?",
    answer:
      "Untuk mengakses fitur pada platform ini, Anda dapat login terlebih dahulu. Nantinya jika berhasil login, akan diarahkan ke dashboard untuk mengakases semua fitur seperti: Story, DASS, Schedule Counselling, dan Article yang relavan",
  },
  {
    id: 3,
    question: "Bagaimana cara mendaftar konseling?",
    answer:
      'Yang pertama, Anda harus login terlebih dahulu. Lalu klik Menu "Schedule" pada sidebar dashboard. Lalu klik "Create Schedule"',
  },
];

export const contact = [
  {
    title: "Kantor EmpowerMinds",
    desc: "Jl. Raya ITS, Kota Surabaya",
    type: "kantor",
  },
  {
    title: "Email",
    desc: "empowerminds@gmail.com",
    type: "email",
  },
  {
    title: "Telp",
    desc: "08123456789",
    type: "telp",
  },
];

export const roles = [
  { id_role: 1, nama_role: "admin" },
  { id_role: 2, nama_role: "penulis" },
  { id_role: 3, nama_role: "mahasiswa" }
];

export const admins = [
  { id_admin: 1, email: "admin1@example.com", pass: "pass123", id_role: 1 },
  { id_admin: 2, email: "admin2@example.com", pass: "pass123", id_role: 1 },
  { id_admin: 3, email: "admin3@example.com", pass: "pass123", id_role: 1 }
];

export const penulis = [
  { id_penulis: 1, nama: "Penulis 1", email: "penulis1@example.com", pass: "pass123", id_role: 2 },
  { id_penulis: 2, nama: "Penulis 2", email: "penulis2@example.com", pass: "pass123", id_role: 2 },
  { id_penulis: 3, nama: "Penulis 3", email: "penulis3@example.com", pass: "pass123", id_role: 2 }
];

export const jenjang = [
  { id_jenjang: 1, nama_jenjang: "D3" },
  { id_jenjang: 2, nama_jenjang: "D4" },
  { id_jenjang: 3, nama_jenjang: "S2" },
  { id_jenjang: 4, nama_jenjang: "D1" }
];

export const jurusan = [
  { kode_jurusan: 1, nama_jurusan: "Teknik Elektronika" },
  { kode_jurusan: 2, nama_jurusan: "Teknik Telekomunikasi" },
  { kode_jurusan: 3, nama_jurusan: "Teknik Elektro Industri" },
  { kode_jurusan: 4, nama_jurusan: "Teknik Informatika" },
  { kode_jurusan: 5, nama_jurusan: "Teknik Komputer" },
  { kode_jurusan: 6, nama_jurusan: "Teknik Mekatronika" },
  { kode_jurusan: 7, nama_jurusan: "Sistem Pembangkit Energi" },
  { kode_jurusan: 8, nama_jurusan: "Multimedia Broadcasting" },
  { kode_jurusan: 9, nama_jurusan: "Teknologi Game" },
  { kode_jurusan: 10, nama_jurusan: "PJJ Teknik Informatika" },
  { kode_jurusan: 11, nama_jurusan: "LJ Teknik Informatika" },
  { kode_jurusan: 12, nama_jurusan: "LJ Teknik Elektro Industri" },
  { kode_jurusan: 13, nama_jurusan: "LJ Teknik Telekomunikasi" },
  { kode_jurusan: 14, nama_jurusan: "Pendidikan Vokasi Berkelanjutan (PVB)" }
];

export const kelas = [
  { kode_kelas: "K001", id_jenjang: 1, id_jurusan: 1, tingkat: 1, nama_kelas: "A" },
  { kode_kelas: "K002", id_jenjang: 1, id_jurusan: 2, tingkat: 1, nama_kelas: "B" },
  { kode_kelas: "K003", id_jenjang: 1, id_jurusan: 3, tingkat: 1, nama_kelas: "A" },
  { kode_kelas: "K004", id_jenjang: 2, id_jurusan: 1, tingkat: 1, nama_kelas: "B" },
  { kode_kelas: "K005", id_jenjang: 2, id_jurusan: 2, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K006", id_jenjang: 2, id_jurusan: 3, tingkat: 2, nama_kelas: "B" },
  { kode_kelas: "K007", id_jenjang: 3, id_jurusan: 1, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K008", id_jenjang: 1, id_jurusan: 4, tingkat: 1, nama_kelas: "B" },
  { kode_kelas: "K009", id_jenjang: 2, id_jurusan: 5, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K010", id_jenjang: 2, id_jurusan: 4, tingkat: 2, nama_kelas: "B" },
  { kode_kelas: "K011", id_jenjang: 3, id_jurusan: 4, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K012", id_jenjang: 2, id_jurusan: 6, tingkat: 2, nama_kelas: "B" },
  { kode_kelas: "K013", id_jenjang: 2, id_jurusan: 7, tingkat: 3, nama_kelas: "A" },
  { kode_kelas: "K014", id_jenjang: 1, id_jurusan: 8, tingkat: 1, nama_kelas: "B" },
  { kode_kelas: "K015", id_jenjang: 2, id_jurusan: 9, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K016", id_jenjang: 1, id_jurusan: 10, tingkat: 1, nama_kelas: "B" },
  { kode_kelas: "K017", id_jenjang: 2, id_jurusan: 11, tingkat: 2, nama_kelas: "A" },
  { kode_kelas: "K018", id_jenjang: 2, id_jurusan: 12, tingkat: 2, nama_kelas: "B" },
  { kode_kelas: "K019", id_jenjang: 2, id_jurusan: 13, tingkat: 3, nama_kelas: "A" },
  { kode_kelas: "K020", id_jenjang: 4, id_jurusan: 14, tingkat: 4, nama_kelas: "B" }
];

export const mahasiswa = [
  { nrp: "001", nama: "Andi", email: "andi@example.com", pass: "pass123", tgl_lahir: "2000-01-01", kode_kelas: "K001", thn_angkatan: 2021, id_role: 3 },
  { nrp: "002", nama: "Budi", email: "budi@example.com", pass: "pass123", tgl_lahir: "2001-02-02", kode_kelas: "K002", thn_angkatan: 2020, id_role: 3 },
  { nrp: "003", nama: "Cici", email: "cici@example.com", pass: "pass123", tgl_lahir: "2002-03-03", kode_kelas: "K003", thn_angkatan: 2022, id_role: 3 },
  { nrp: "004", nama: "Dewi", email: "dewi@example.com", pass: "pass123", tgl_lahir: "2003-04-04", kode_kelas: "K004", thn_angkatan: 2021, id_role: 3 },
  { nrp: "005", nama: "Eka", email: "eka@example.com", pass: "pass123", tgl_lahir: "2004-05-05", kode_kelas: "K005", thn_angkatan: 2020, id_role: 3 }
];

export const mahasiswaStats = [
  { title: "Mahasiswa", value: mahasiswa.length },
  { title: "Jenjang", value: jenjang.length },
  { title: "Jurusan", value: jurusan.length },
  { title: "Kelas", value: kelas.length }
];

export const activities = [
  {
    title: "My Diary",
    icon: Diary,
    createdAt: "1 hour ago",
  },
  {
    title: "Future Plan",
    icon: FuturePlan,
    createdAt: "2 hour ago",
  },
];

export const upcoming_schedules = [
  {
    title: "Counselling",
    icon: Schedule,
    date: "4 Mei 2024",
  },
  {
    title: "Counselling",
    icon: Schedule,
    date: "14 Mei 2024",
  },
];

export const categoryStory = [
  { image: bookillustrations, icon: Diary, title: "Diary" },
  { image: futureillustrations, icon: FuturePlan, title: "Future Plans" },
  { image: DayinLifeillustrations, icon: DayinLife, title: "Day in Life" },
];

export const stories = [
  {
    title: "Dream, Plan, Achieve: Mapping Out Your Future",
    desc: "How to set goals and achieve them",
    icon: Story1,
    category: "Future Plan",
    createdAt: "1 hour ago",
  },
  {
    title: "24 Hours: An Inside Look at My Daily Activities",
    desc: "This is my daily activities",
    icon: Story2,
    category: "Day in Life",
    createdAt: "2 hour ago",
  },
  {
    title: "Capturing Moments: The Diary of College Life",
    desc: "This is my memories of college life",
    icon: Story3,
    category: "Diary",
    createdAt: "3 hour ago",
  },
  {
    title: "Plan: Mission in the next 3o days",
    desc: "This is my plan for the next 30 days",
    icon: Story1,
    category: "Future Plan",
    createdAt: "1 week ago",
  },
  {
    title: "A day in my life: Work edition at Office",
    desc: "This is my daily activities at office",
    icon: Story2,
    category: "Day in Life",
    createdAt: "2 week ago",
  },
  {
    title: "The Diary of My Familly",
    desc: "This is my memories of my familly life",
    icon: Story3,
    category: "Diary",
    createdAt: "3 week ago",
  },
];

export const dass = [
  {
    id: 1,
    pertanyaan: "Menjadi marah karena hal-hal kecil/sepele",
    kategori: "Stress",
  },
  { id: 2, pertanyaan: "Mulut terasa kering", kategori: "Kecemasan" },
  {
    id: 3,
    pertanyaan: "Tidak dapat melihat hal yang positif dari suatu kejadian",
    kategori: "Depresi",
  },
  {
    id: 4,
    pertanyaan:
      "Merasakan gangguan dalam bernapas (napas cepat, sulit bernapas)",
    kategori: "Kecemasan",
  },
  {
    id: 5,
    pertanyaan:
      "Merasa sepertinya tidak kuat lagi untuk melakukan suatu kegiatan",
    kategori: "Depresi",
  },
  {
    id: 6,
    pertanyaan: "Cenderung bereaksi berlebihan pada situasi",
    kategori: "Stress",
  },
  { id: 7, pertanyaan: "Kelemahan pada anggota tubuh", kategori: "Kecemasan" },
  {
    id: 8,
    pertanyaan: "Kesulitan untuk relaksasi/bersantai",
    kategori: "Stress",
  },
  {
    id: 9,
    pertanyaan:
      "Cemas yang berlebihan dalam suatu situasi namun bisa lega jika hal/situasi itu berakhir",
    kategori: "Kecemasan",
  },
  { id: 10, pertanyaan: "Pesimis", kategori: "Depresi" },
  { id: 11, pertanyaan: "Mudah merasa kesal", kategori: "Stress" },
  {
    id: 12,
    pertanyaan: "Merasa banyak menghabiskan energi karena cemas",
    kategori: "Stress",
  },
  { id: 13, pertanyaan: "Merasa sedih dan depresi", kategori: "Depresi" },
  { id: 14, pertanyaan: "Tidak sabaran", kategori: "Stress" },
  { id: 15, pertanyaan: "Kelelahan", kategori: "Kecemasan" },
  {
    id: 16,
    pertanyaan:
      "Kehilangan minat pada banyak hal (misal: makan, ambulasi, sosialisasi)",
    kategori: "Depresi",
  },
  { id: 17, pertanyaan: "Merasa diri tidak layak", kategori: "Depresi" },
  { id: 18, pertanyaan: "Mudah tersinggung", kategori: "Stress" },
  {
    id: 19,
    pertanyaan:
      "Berkeringat (misal: tangan berkeringat) tanpa stimulasi oleh cuaca maupun latihan fisik",
    kategori: "Kecemasan",
  },
  {
    id: 20,
    pertanyaan: "Ketakutan tanpa alasan yang jelas",
    kategori: "Kecemasan",
  },
  { id: 21, pertanyaan: "Merasa hidup tidak berharga", kategori: "Depresi" },
  { id: 22, pertanyaan: "Sulit untuk beristirahat", kategori: "Stress" },
  { id: 23, pertanyaan: "Kesulitan dalam menelan", kategori: "Kecemasan" },
  {
    id: 24,
    pertanyaan: "Tidak dapat menikmati hal-hal yang saya lakukan",
    kategori: "Depresi",
  },
  {
    id: 25,
    pertanyaan:
      "Perubahan kegiatan jantung dan denyut nadi tanpa stimulasi oleh latihan fisik",
    kategori: "Kecemasan",
  },
  {
    id: 26,
    pertanyaan: "Merasa hilang harapan dan putus asa",
    kategori: "Depresi",
  },
  { id: 27, pertanyaan: "Mudah marah", kategori: "Stress" },
  { id: 28, pertanyaan: "Mudah panik", kategori: "Kecemasan" },
  {
    id: 29,
    pertanyaan: "Kesulitan untuk tenang setelah sesuatu yang mengganggu",
    kategori: "Stress",
  },
  {
    id: 30,
    pertanyaan:
      "Takut diri terhambat oleh tugas-tugas yang tidak biasa dilakukan",
    kategori: "Kecemasan",
  },
  {
    id: 31,
    pertanyaan: "Sulit untuk antusias pada banyak hal",
    kategori: "Depresi",
  },
  {
    id: 32,
    pertanyaan:
      "Sulit mentoleransi gangguan-gangguan terhadap hal yang sedang dilakukan",
    kategori: "Stress",
  },
  { id: 33, pertanyaan: "Berada pada keadaan tegang", kategori: "Stress" },
  { id: 34, pertanyaan: "Merasa tidak berharga", kategori: "Depresi" },
  {
    id: 35,
    pertanyaan:
      "Tidak dapat memaklumi hal apapun yang menghalangi anda untuk menyelesaikan hal yang sedang Anda lakukan",
    kategori: "Stress",
  },
  { id: 36, pertanyaan: "Ketakutan", kategori: "Kecemasan" },
  {
    id: 37,
    pertanyaan: "Tidak ada harapan untuk masa depan",
    kategori: "Depresi",
  },
  { id: 38, pertanyaan: "Merasa hidup tidak berarti", kategori: "Depresi" },
  { id: 39, pertanyaan: "Mudah gelisah", kategori: "Stress" },
  {
    id: 40,
    pertanyaan:
      "Khawatir dengan situasi saat diri Anda mungkin menjadi panik dan mempermalukan diri sendiri",
    kategori: "Kecemasan",
  },
  { id: 41, pertanyaan: "Gemetar", kategori: "Kecemasan" },
  {
    id: 42,
    pertanyaan: "Sulit untuk meningkatkan inisiatif dalam melakukan sesuatu",
    kategori: "Depresi",
  },
]

export const skala_dass = [
  {
    skala: 'Tidak pernah',
    point: 0,
  },
  {
    skala: 'Kadang-kadang',
    point: 1,
  },
  {
    skala: 'Sering',
    point: 2,
  },{
    skala: 'Sangat Sering',
    point: 3,
  },
]

export const skorDassData = [
  { ID_skor: 1, nrp: 1, Total_Skor_Depresi: 30, Total_Skor_Kecemasan: 12, Total_Skor_Stress: 15, namaPengguna: "Ayu" },
  { ID_skor: 2, nrp: 2, Total_Skor_Depresi: 22, Total_Skor_Kecemasan: 8, Total_Skor_Stress: 16, namaPengguna: "Budi" },
  { ID_skor: 3, nrp: 3, Total_Skor_Depresi: 26, Total_Skor_Kecemasan: 15, Total_Skor_Stress: 20, namaPengguna: "Citra" }
];

export const current_score = [
  { title: "Depresi", score: 20, category: "Depresi" },
  { title: "Kecemasan", score: 7, category: "Kecemasan" },
  { title: "Stress", score: 25, category: "Stress" },
];

export const tingkat_stress = [
  { title: "Depresi", score: 20, category: "Depresi" },
  { title: "Kecemasan", score: 7, category: "Kecemasan" },
  { title: "Stress", score: 25, category: "Stress" },
];

export const articles = [
  {
    id_artikel: 1,
    penulis: "Penulis 1",
    tanggal: "2024-05-01",
    judul: "Stress Management",
    gambar: StressedWoman, 
    isi_artikel: "Stress management involves a range of techniques and psychotherapies aimed at controlling a person's level of stress, especially chronic stress, usually for the purpose of improving everyday functioning.",
  },
  {
    id_artikel: 2,
    penulis: "Penulis 2",
    tanggal: "2024-05-02",
    judul: "Transcranial Magnetic Stimulation (TMS) Therapy",
    gambar: Relax,
    isi_artikel: "Transcranial Magnetic Stimulation (TMS) is a noninvasive procedure that uses magnetic fields to stimulate nerve cells in the brain to improve symptoms of depression and other mood disorders.",
   },
  {
    id_artikel: 3,
    penulis: "Penulis 13",
    tanggal: "2024-05-03",
    judul: "Stress Therapy",
    gambar: StressedWoman,
    isi_artikel: "Transcranial Magnetic Stimulation (TMS) therapy is utilized for treating mood disorders by using magnetic fields to stimulate brain nerve cells, offering an alternative for patients who have not responded to other treatments.",
  },
];

export const allSchedule = [
  {
    kode_konsultasi: 1,
    nama: 'Fiony Alveria',
    nrp: '31220000',
    prodi: 'D4 Desain Komunikasi Visual',
    telp: '08122334567',
    tipe_konsultasi: 'Offline',
    keluhan_singkat: 'Merasa cemas akhir-akhir ini',
    tanggal: '25 Mei 2024',
    jam_mulai: '09.00',
    jam_selesai: '10.00',
    status: 'Waiting List'
  },
  {
    kode_konsultasi: 2,
    nama: 'Tiara Putri',
    nrp: '3122510609',
    prodi: 'D3 Teknik Informatika',
    telp: '08226127375',
    tipe_konsultasi: 'Online',
    keluhan_singkat: 'Merasa ketakutan berlebihan akhir-akhir ini',
    tanggal: '22 Mei 2024',
    jam_mulai: '10.00',
    jam_selesai: '11.00',
    status: 'Accepted'
  },
  {
    kode_konsultasi: 3,
    nama: 'Rizky Ananda',
    nrp: '3122510609',
    prodi: 'D3 Teknik Informatika',
    telp: '08226127375',
    tipe_konsultasi: 'Offline',
    keluhan_singkat: 'Merasa depresi akhir-akhir ini',
    tanggal: '20 Mei 2024',
    jam_mulai: '13.00',
    jam_selesai: '14.00',
    status: 'Cancelled'
  },
  {
    kode_konsultasi: 4,
    nama: 'Afiyah Fajr',
    nrp: '3122510609',
    prodi: 'D4 Teknik Rekayasa Internet',
    telp: '08226127375',
    tipe_konsultasi: 'Offline',
    keluhan_singkat: 'Merasa depresi akhir-akhir ini',
    tanggal: '20 Mei 2024',
    jam_mulai: '13.00',
    jam_selesai: '14.00',
    status: 'Completed'
  },  
  {
    kode_konsultasi: 5,
    nama: 'Gresella Shopina',
    nrp: '3122510609',
    prodi: 'D4 Teknik Informatika',
    telp: '08226127375',
    tipe_konsultasi: 'Online',
    keluhan_singkat: 'Merasa ketakutan berlebihan akhir-akhir ini',
    tanggal: '23 Mei 2024',
    jam_mulai: '10.00',
    jam_selesai: '11.00',
    status: 'Cancelled'
  },
];

export const feedback = [
  // Depresi
  {
    ID_Feedback: 1,
    Tingkat: 'Normal',
    Kategori: 'Depresi',
    Saran: 'Pertahankan pola hidup sehat dan tetap aktif secara fisik.',
    Sumber_Saran: 'https://www.healthline.com/health/depression/ways-to-avoid-depression'
  },
  {
    ID_Feedback: 2,
    Tingkat: 'Ringan',
    Kategori: 'Depresi',
    Saran: 'Luangkan waktu untuk hobi dan aktivitas yang Anda nikmati.',
    Sumber_Saran: 'https://www.verywellmind.com/how-to-overcome-mild-depression-1067410'
  },
  {
    ID_Feedback: 3,
    Tingkat: 'Sedang',
    Kategori: 'Depresi',
    Saran: 'Bicaralah dengan orang yang Anda percaya tentang perasaan Anda.',
    Sumber_Saran: 'https://ciputrahospital.com/10-cara-bangkit-dari-depresi/'
  },
  {
    ID_Feedback: 4,
    Tingkat: 'Parah',
    Kategori: 'Depresi',
    Saran: 'Carilah bantuan profesional dari psikolog atau psikiater.',
    Sumber_Saran: 'https://www.halodoc.com/artikel/inilah-7-rekomendasi-psikolog-klinis-di-surabaya'
  },
  {
    ID_Feedback: 5,
    Tingkat: 'Sangat Parah',
    Kategori: 'Depresi',
    Saran: 'Segera hubungi layanan kesehatan mental darurat atau psikolog.',
    Sumber_Saran: 'https://www.alodokter.com/layanan-darurat-untuk-kesehatan-mental'
  },

  // Kecemasan
  {
    ID_Feedback: 6,
    Tingkat: 'Normal',
    Kategori: 'Kecemasan',
    Saran: 'Lanjutkan rutinitas Anda dan tetap aktif.',
    Sumber_Saran: 'https://www.verywellmind.com/tips-for-healthy-living-5184562'
  },
  {
    ID_Feedback: 7,
    Tingkat: 'Ringan',
    Kategori: 'Kecemasan',
    Saran: 'Coba teknik pernapasan dalam saat merasa cemas.',
    Sumber_Saran: 'https://www.halodoc.com/artikel/latihan-pernapasan-yang-bisa-meredakan-kecemasan'
  },
  {
    ID_Feedback: 8,
    Tingkat: 'Sedang',
    Kategori: 'Kecemasan',
    Saran: 'Pertimbangkan terapi atau konseling untuk mengelola kecemasan.',
    Sumber_Saran: 'https://www.psychologytoday.com/us/therapy-types/cognitive-behavioral-therapy'
  },
  {
    ID_Feedback: 9,
    Tingkat: 'Parah',
    Kategori: 'Kecemasan',
    Saran: 'Carilah bantuan dari profesional kesehatan mental.',
    Sumber_Saran: 'https://www.mayoclinic.org/tests-procedures/behavioral-therapy/about/pac-20384696'
  },
  {
    ID_Feedback: 10,
    Tingkat: 'Sangat Parah',
    Kategori: 'Kecemasan',
    Saran: 'Segera hubungi layanan kesehatan mental darurat atau psikolog.',
    Sumber_Saran: 'https://www.webmd.com/anxiety-panic/guide/mental-health-resources'
  },

  // Stress
  {
    ID_Feedback: 11,
    Tingkat: 'Normal',
    Kategori: 'Stress',
    Saran: 'Pertahankan kebiasaan sehat dan luangkan waktu untuk relaksasi.',
    Sumber_Saran: 'https://www.helpguide.org/articles/stress/stress-management.htm'
  },
  {
    ID_Feedback: 12,
    Tingkat: 'Ringan',
    Kategori: 'Stress',
    Saran: 'Olahraga teratur selama 30 menit setiap hari.',
    Sumber_Saran: 'https://hellosehat.com/mental/stres/olahraga-cara-terbaik-untuk-menghilangkan-stress/'
  },
  {
    ID_Feedback: 13,
    Tingkat: 'Sedang',
    Kategori: 'Stress',
    Saran: 'Coba teknik relaksasi seperti yoga atau meditasi.',
    Sumber_Saran: 'https://www.alodokter.com/sering-sakit-dan-stres-coba-meditasi'
  },
  {
    ID_Feedback: 14,
    Tingkat: 'Parah',
    Kategori: 'Stress',
    Saran: 'Pertimbangkan terapi atau konseling untuk membantu mengelola stres.',
    Sumber_Saran: 'https://www.verywellmind.com/ways-to-reduce-stress-3145195'
  },
  {
    ID_Feedback: 15,
    Tingkat: 'Sangat Parah',
    Kategori: 'Stress',
    Saran: 'Carilah bantuan profesional dari psikolog atau psikiater.',
    Sumber_Saran: 'https://www.halodoc.com/artikel/inilah-7-rekomendasi-psikolog-klinis-di-surabaya'
  },
];


export const stats = [
  { title: "Mahasiswa", value: mahasiswa.length },
  { title: "All Schedule", value: 5 },
  { title: "Waiting List", value: 10 },
  { title: "User Completed DASS", value: skorDassData.length },
];

export const dashboardPenulisStats = [
  { title: "Article", value: articles.length },
  { title: "Feedback Stress", value: 5 },
  { title: "Feedback Depresi", value: 5 },
  { title: "Feedback Kecemasan", value: 5 },
];

export const storyStats = [
  {
    title: "All Stories",
    value: 6,
  },
  {
    title: "Diary",
    value: 2,
  },
  {
    title: "Future Plans",
    value: 2,
  },
  {
    title: "Day in Life",
    value: 2,
  },
];

export const scheduleStats = [
  { title: "Waiting List", value: 10 },
  { title: "All Schedule", value: 5 },
  { title: "Cancelled Schedule", value: 3 },
  { title: "Completed Counselling", value: 10 },
];

export const dassStats = [
  { title: "DASS Question", value: 42 },
  { title: "User Respon", value: 210 },
  { title: "User Completed DASS", value: 5 },
];
