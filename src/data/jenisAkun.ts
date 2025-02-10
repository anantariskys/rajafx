import Standart from "@/assets/standart.png";
import Shares from "@/assets/shares.png";
import Ultralow from "@/assets/ultralow.png";

export const jenisAkunXM = [
  {
    image: Standart,
    name: "Standard",
    description:
      "Akun XM paling populer, nikmati bonus untuk meningkatkan kemampuan trading Anda, dan antisipasi potensi risiko terhadap modal Anda.",
    minimum_deposit: "$5",
    market: [
      "Forex",
      "Logam Mulia",
      "Indeks Saham",
      "Mata Uang Kripto",
      "Indeks Tematik",
      "Saham",
      "Saham Turbo",
      "Komoditas",
      "Energi",
    ],
    bonus_eligibility: true,
    micro_account_option: true,
    max_leverage: "1000:1",
    stop_out_level: "20%",
    swap_free: false,
    commission: false,
    spreads: {
      emas: 2.7,
      usdjpy: 2,
      eurusd: 1.6,
    },
  },
  {
    image: Ultralow,
    name: "Ultra Low",
    description:
      "Solusi ideal bagi anda yang ingin trading dengan volume tinggi. Nikmati penghematan melalui spread, swap, dan komisi yang lebih rendah.",
    minimum_deposit: "$5",
    market: [
      "Forex",
      "Logam Mulia",
      "Indeks Saham",
      "Mata Uang Kripto",
      "Indeks Tematik",
      "Saham",
      "Saham Turbo",
      "Komoditas",
      "Energi",
    ],
    bonus_eligibility: false,
    micro_account_option: true,
    max_leverage: "1000:1",
    stop_out_level: "20%",
    swap_free: true,
    commission: false,
    spreads: {
      emas: 2.7,
      usdjpy: 2,
      eurusd: 1.6,
    },
  },
  {
    image: Shares,
    name: "Shares",
    description:
      "Cocok untuk anda yang ingin berinvestasi saham dan manfaatkan beragam peluang di pasar saham.",
    minimum_deposit: "$10,000",
    market: [
      "Saham",
    ],
    bonus_eligibility: false,
    micro_account_option: false,
    max_leverage: "1:1",
    stop_out_level: "0%",
    swap_free: true,
    commission: true,
    // spreads: {
    //   emas: 2.7,
    //   usdjpy: 2,
    //   eurusd: 1.6,
    // },
  },
];

export const jenisAkunValetax = [
  {
    icon: "majesticons:cent-circle",
    name: "CENT",
    description:
      "Cocok untuk anda trader pemula dan algoritmik, memberikan kesempatan untuk mengalami strategi trading dengan risiko rendah.",
    minimum_deposit: "$1",
  },
  {
    icon: "fa6-solid:money-bill",
    name: "Standard",
    description:
      "Cocok untuk trader yang mencari leverage hingga 1:2000, menawarkan kondisi trading yang mirip dengan pasar antar bank dan institusi.",
    minimum_deposit: "$1",
  },
  {
    icon: "teenyicons:star-circle-solid",

    name: "ECN",
    description:
      "Cocok untuk trader ahli dan scalper, dengan spread nol dan akses langsung dari penyedia likuiditas serta.",
    minimum_deposit: "$50",
  },
  {
    icon: "fa6-solid:money-bill",
    name: "Booster",
    description:
      "Akun Booster menawarkan keuntungan ganda dari trading pribadi dan referral, cocok untuk anda yang ingin meningkatkan pengalaman dan memperluas jaringan.",
    minimum_deposit: "$1",
  },
  {
    icon: "mingcute:gift-fill",
    name: "Bonus",
    description:
      "Dapatkan keuntungan maksimal dengan bonus, yang memberikan fleksibilitas penuh dalam mengelola modal dan berbagai strategi trading.",
    minimum_deposit: "$1",
  },
  {
    icon: "fluent:crown-24-filled",
    name: "PRO",
    description:
      "Akun Pro dirancang khusus untuk trader berpengalaman yang memerlukan kondisi trading terbaik dengan spread ultra-rendah, eksekusi tinggi, dan tanpa komisi.",
    minimum_deposit: "$500",
  },
];

import IMG1 from "@/assets/akun1.png";
import IMG2 from "@/assets/akun2.png";
import IMG3 from "@/assets/akun3.png";
import IMG4 from "@/assets/akun4.png";
import IMG5 from "@/assets/akun5.png";
import IMG6 from "@/assets/akun6.png";
export const jenisAkunValetax2 = [
  {
    id: 1,
    heroIMG: IMG1,
    name: "Cent",
    name2: "Cent",
    slug: "cent",
    description: "Mulai deposit dengan 1 USD",
    description2:
      "Deposit hanya USD 1, menampilkan saldo dalam sen, dan Bebas Swap!",
    description3:
      "Akun Cent ideal untuk pedagang pemula dan algoritmik, karena menawarkan pengalaman trading serupa dengan trading lot standar yang memanfaatkan akun yang dihitung dalam satuan lebih kecil (USD ¢).",
    spread: "mulai dari 1.2 pip",
    icon: "majesticons:cent-circle",
    details: {
      "Deposit Minimal": "1$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "1 lot: 1000",
      Spread: "dari 1.2pip",
      Komisi: "0",
      "Leverage Maksimal": "1:1000",
      "Harga Call/Stop Out": "60%/40%",
      "Instrumen Perdagangan": "65",
    },
  },
  {
    id: 2,
    heroIMG: IMG2,
    name: "Akun Standar",
    name2: "Standar",
    slug: "standard",
    description: "Akun paling populer",
    description2: "Akun paling populer",
    description3:
      "Akun Standard memberikan akses ke trading hingga 12000, spread ketat, dan bebas komisi. Dengan deposit minimal $100.00, nikmati perdagangan dengan ketentuan terbaik di industri.",
    spread: "mulai dari 1.2 pip",
    icon: "fa6-solid:money-bill",
    details: {
      "Deposit Minimal": "1$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "100,000",
      Spread: "dari 1.2pip",
      Komisi: "0",
      "Leverage Maksimal": "1:200",
      "Harga Call/Stop Out": "60%/40%",
      "Instrumen Perdagangan": "65",
    },
  },
  {
    id: 3,
    heroIMG: IMG3,

    name: "ECN",
    name2: "ECN",
    slug: "ecn",
    description: "Rasakan kekuatan akses pasar langsung untuk perdagangan Anda",
    description2:
      "Rasakan kemudahan dan kecepatan akses  pasar untuk mendukung perdagangan Anda.",
    description3:
      "Akun ECN menawarkan pengalaman trading yang lebih optimal di bursa utama, dengan akses likuiditas yang mendalam dan eksekusi pasar secepat kilat. Ideal bagi trader yang mengutamakan spread yang lebih ketat.",
    spread: "mulai dari 0.0 pip",
    icon: "teenyicons:star-circle-solid",
    details: {
      "Deposit Minimal": "100$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "100,000",
      Spread: "dari 0.0 pip",
      Komisi: "5$",
      "Leverage Maksimal": "1:200",
      "Harga Call/Stop Out": "60%/40%",
      "Instrumen Perdagangan": "47",
    },
  },
  {
    id: 4,
    heroIMG: IMG4,

    name: "Akun Booster",
    name2: "Booster",
    slug: "booster",
    description:
      "Dapatkan rebate tertinggi untuk anda, jaringan anda, dan para trader",
    description2:
      "Deposit hanya USD 1, menampilkan saldo dalam sen, dan Bebas Swap!",
    description3:
      "Dengan Akun Booster, Anda dapat mengoptimalkan likuiditas terbaik hanya dengan modal deposit minimal $1. Akun ini cocok bagi trader yang ingin memanfaatkan leverage tinggi.",
    spread: "mulai dari 2.0 pip",
    icon: "fa6-solid:money-bill",
    details: {
      "Deposit Minimal": "1$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "100,000",
      Spread: "dari 1.2 pip",
      Komisi: "0",
      "Leverage Maksimal": "1:1000",
      "Harga Call/Stop Out": "60%/20%",
      "Instrumen Perdagangan": "41",
    },
  },
  {
    id: 5,
    heroIMG: IMG5,

    name: "Bonus Account",
    name2: "Account",
    slug: "bonus",
    description: "Tingkatkan ekuitas dengan bonus yang tersedia",
    description2:
      "Deposit hanya USD 1, menampilkan saldo dalam sen, dan Bebas Swap!",
    description3:
      "Dengan bonus yang tersedia, Anda dapat meningkatkan ekuitas dan memperluas peluang trading di pasar keuangan. Hal ini akan memberikan kesempatan kepada para trader untuk mencoba dan mendapatkan hasil trading dengan lebih efektif.",
    spread: "mulai dari 2.0 pip",
    icon: "mingcute:gift-fill",
    details: {
      "Deposit Minimal": "1$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "100,000",
      Spread: "dari 2.0 pip",
      Komisi: "9",
      "Leverage Maksimal": "1:500",
      "Harga Call/Stop Out": "60%/30%",
      "Instrumen Perdagangan": "20",
    },
  },
  {
    id: 6,
    heroIMG: IMG6,

    name: "Akun PRO",
    name2: "PRO",
    slug: "pro",
    description:
      "Spread sangat rendah dan tanpa komisi, dirancang khusus untuk trader berpengalaman",
    description2:
      "Raih keuntungan lebih dengan spread rendah dan tanpa komisi, pilihan tepat untuk trader berpengalaman.",
    description3:
      "Dengan Akun PRO, Anda dapat merasakan stabilitas tidak hanya dalam eksekusi tetapi juga dalam strategi trading yang lebih luas dan profesional. Fitur premium pada akun ini memungkinkan Anda memanfaatkan setiap peluang di pasar dengan optimal.",
    spread: "mulai dari 0.6 pip",
    icon: "fluent:crown-24-filled",
    details: {
      "Deposit Minimal": "500$",
      "Mata Uang Pasar": "USD",
      "Ukuran Kontrak": "100,000",
      Spread: "dari 0.0 pip",
      Komisi: "No",
      "Leverage Maksimal": "1:300",
      "Harga Call/Stop Out": "40%/20%",
      "Instrumen Perdagangan": "40",
    },
  },
];
