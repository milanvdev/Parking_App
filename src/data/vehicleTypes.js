import BikeIcon from '../assets/svg/BikeIcon';
import BusIcon from '../assets/svg/BusIcon';
import CarIcon from '../assets/svg/CarIcon';
import VanIcon from '../assets/svg/VanIcon';

export const vehicleTypes = [
  {
    id: 1,
    img: <CarIcon />,
    name: 'Car',
    location: 120,
  },
  {
    id: 2,
    img: <BikeIcon />,
    name: 'Bike',
    location: 340,
  },
  {
    id: 3,
    img: <BusIcon />,
    name: 'Bus',
    location: 60,
  },
  {
    id: 4,
    img: <VanIcon />,
    name: 'Van',
    location: 20,
  },
];

export const vehicleLocation = [
  {
    id: 1,
    locationImg: require('../assets/images/ZilsaImg.png'),
    locationName: 'Zilsa cultural centre',
    locationAddress: '3891 Ranchview Dr. Richardson, California 62639',
    locationRating: '4.8',
    locationKm: '1.2',
    locationPrice: '5',
  },
  {
    id: 2,
    locationImg: require('../assets/images/AlzebiaImg.png'),
    locationName: 'Alzebia centre mall',
    locationAddress: '4140 Parker Rd. Allentown, New Mexico 31134',
    locationRating: '4.8',
    locationKm: '1.2',
    locationPrice: '7',
  },
  {
    id: 3,
    locationImg: require('../assets/images/AlzebiaImg.png'),
    locationName: 'Plumb Tree Garden',
    locationAddress: '3891 Ranchview Dr. Richardson, California 62639',
    locationRating: '4.8',
    locationKm: '2.5',
    locationPrice: '7',
  },
];
