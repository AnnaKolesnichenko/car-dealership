// import { MdFreeCancellation } from 'react-icons/md';
// import { GiMagnifyingGlass } from 'react-icons/gi';
// import { GiWallet } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
// import { BiMapPin } from 'react-icons/bi';
// import { FcShipped } from 'react-icons/fc';
import { MdAddLocationAlt } from 'react-icons/md';
import { SiAdguard } from 'react-icons/si';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { FaHandsHoldingChild } from 'react-icons/fa6';

const casco = SiAdguard;

export const OurServices = [
  {
    title: ' insured cars',
    span: 'CASCO',
    picture: 'casco',
    description:
      'We travel with CASCO insurance, no additional fees are implied.',
  },
  {
    title: 'selection',
    span: 'Wide',
    icon: {},
    description: '',
  },
  {
    title: ' Support',
    span: '24/7',
    picture: MdOutlineSupportAgent,
    description:
      'We will suggest routes and beautiful places. We come, we help, if necessary, we change the car.',
  },
  {
    title: 'for everyone',
    span: 'Security',
    picture: FaHandsHoldingChild,
    description:
      'Child seats and safety pillows are available for all car models and ages.',
  },
  {
    title: ' No smoking cars',
    span: 'Car washed.',
    picture: RiCarWashingFill,
    description:
      'Working with our partners to keep you safe, comfortable and in the driving seat.',
  },
  {
    title: ' pickup and return',
    span: 'Convenient',
    picture: MdAddLocationAlt,
    description:
      'We pick the car up from any locaiton you might need to leave it at. We deliver the car to your location on demand.',
  },
];
