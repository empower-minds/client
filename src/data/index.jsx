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
  BookOpenIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  SparklesIcon,
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
    icon: Story1,
    category: "Future Plan",
    createdAt: "1 hour ago",
  },
  {
    title: "24 Hours: An Inside Look at My Daily Activities",
    icon: Story2,
    category: "Day in Life",
    createdAt: "2 hour ago",
  },
  {
    title: "Capturing Moments: The Diary of College Life",
    icon: Story3,
    category: "Diary",
    createdAt: "3 hour ago",
  },
  {
    title: "Plan: Mission in the next 3o days",
    icon: Story1,
    category: "Future Plan",
    createdAt: "1 week ago",
  },
  {
    title: "A day in my life: Work edition at Office",
    icon: Story2,
    category: "Day in Life",
    createdAt: "2 week ago",
  },
  {
    title: "The Diary of My Familly",
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
    title: "Stress Management",
    desc: "How to reduce, prevent, and relieve stress",
    image: StressedWoman, // Hilangkan kurung kurawal
  },
  {
    title: "Transcranial Magnetic Stimulation (TMS) Therapy",
    desc: "How it’s used to treat mood disorders",
    image: Relax, // Hilangkan kurung kurawal
  },
  {
    title: "Transcranial Magnetic Stimulation (TMS) Therapy",
    desc: "How it’s used to treat mood disorders",
    image: StressedWoman, // Hilangkan kurung kurawal
  },
];
