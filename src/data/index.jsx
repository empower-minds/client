import Journal from './../assets/illustration/Journal.png';
import DASS from './../assets/illustration/DASS.png';
import Counselling from './../assets/illustration/Counselling.png';

export const navigation = [
  {
    href: window.location.pathname === '/' ? '/#home' : '/',
    name: 'Home',
  },
  {
    href: window.location.pathname === '/' ? '/#about' : '/',
    name: 'About',
  },
  {
    href: window.location.pathname === '/' ? '/#feature' : '/',
    name: 'Features',
  },
  {
    href: window.location.pathname === '/' ? '/#faq' : '/',
    name: 'FAQ',
  },
  {
    href: '#contactus',
    name: 'Contact Us',
  },
];

export const empowerMinds = [
  {
    title: 'Empower Minds',
    desc: 'Platform yang memberikan dukungan yang dibutuhkan dalam mengatasi tekanan akademik, stres, dan kecemasan yang sering terjadi pada mereka.',
  },
];

export const features = [
  {
    title: 'Story',
    desc: 'Pengguna dapat mencatat cerita mereka, future plan, dan daily in life.',
    image: Journal // Hilangkan kurung kurawal
  },
  {
    title: 'DASS',
    desc: 'DASS (Depression Anxiety Stress Scale) adalah seperangkat skala subyektif untuk mengukur tingkat depresi, kecemasan, dan stres seseorang',
    image: DASS, // Hilangkan kurung kurawal
  },
  {
    title: 'Counselling',
    desc: 'Layanan konseling tersedia untuk mereka yang ingin berbicara lebih dalam dengan konselor.',
    image: Counselling // Hilangkan kurung kurawal
  }
];

export const faqs = [
  {
    id: 1,
    question: 'Apa itu Empower Minds?',
    answer: 'Empower Minds merupakan platform yang memberikan dukungan yang dibutuhkan dalam mengatasi tekanan akademik, stres, dan kecemasan yang sering terjadi pada mereka.',
  },
  {
    id: 2,
    question: 'Bagaimana cara menggunakan website Empower Minds?',
    answer: 'Untuk mengakses fitur pada platform ini, Anda dapat login terlebih dahulu. Nantinya jika berhasil login, akan diarahkan ke dashboard untuk mengakases semua fitur seperti: Story, DASS, Schedule Counselling, dan Article yang relavan',
  },
  {
    id: 3,
    question: 'Bagaimana cara mendaftar konseling?',
    answer: 'Yang pertama, Anda harus login terlebih dahulu. Lalu klik Menu "Schedule" pada sidebar dashboard. Lalu klik "Create Schedule"',
  },
];

export const contact = [
  {
    title: 'Kantor EmpowerMinds',
    desc: 'Jl. Raya ITS, Kota Surabaya',
    type: 'kantor',
  },
  {
    title: 'Email',
    desc: 'empowerminds@gmail.com',
    type: 'email',
  },
  {
    title: 'Telp',
    desc: '08123456789',
    type: 'telp',
  },
];
