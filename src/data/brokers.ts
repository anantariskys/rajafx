import XM from '@/assets/xm.png';
import Valetax from '@/assets/valetax.png';

const brokers = [
  {
    id: 1,
    name: 'XM',
    image: XM,
    description:
      'XM merupakan broker forex yang diatur oleh beberapa otoritas keuangan terkemuka seperti ASIC dan CySEC, yang menawarkan berbagai instrumen perdagangan dengan spread kompetitif dan berbagai alat edukasi untuk trader.',
    minDeposit: '$5',
    spread: '0.8',
    maxLeverage: '1:1000',
    accountTypes: '3 tipe',
    link: '/xm',
  },
  {
    id: 2,
    name: 'Valetax',
    image: Valetax,
    description:
      'Valetax menyediakan berbagai instrumen pasar, termasuk pasangan mata uang, indeks, logam, kripto, saham, dan energi, dengan menawarkan kondisi trading yang fleksibel dan akses global bagi trader.',
    minDeposit: '$1',
    spread: '0.0',
    maxLeverage: '1:2000',
    accountTypes: '6 tipe',
    link: '/valetax',
  },
];

export default brokers;
