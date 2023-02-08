import { postItem } from '../../utils/post-item';
import { WHITE_COLOR_NUMBER } from '../../utils/variables';

const producer = [
  'Nissan',
  'Porsche',
  'Audi',
  'Hyundai',
  'Ford',
  'Volkswagen',
  'Honda',
  'BMW',
  'Mercedes',
  'Toyota',
  'Fiat',
  'Renault',
  'Geely',
  'Mazda',
  'Mitsubishi',
  'Chery',
  'Tesla',
  'Chevrolet',
  'Infinity',
  'Volvo',
];

const model = [
  'Qashqai',
  'Cayenne',
  'A6',
  'Tucson',
  'Fusion',
  'Touareg',
  'Accord',
  'X5',
  'Sprinter',
  'Camry',
  'Ducato',
  'Duster',
  'Emgrand',
  'Miata',
  'Outlander',
  'Tiggo',
  'Model X',
  'Camaro',
  'Q30',
  'XC90',
];

function arrayRandElement(array: string[]) {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
}

function generateRandomColor(): string {
  return `#${Math.floor(Math.random() * WHITE_COLOR_NUMBER).toString(16)}`;
}

function makeHundredRandomCars() {
  const carsArray = Array(100);
  carsArray.fill(null);

  return carsArray.map(() => {
    const carName = `${arrayRandElement(producer)} ${arrayRandElement(model)}`;
    return {
      name: carName,
      color: generateRandomColor(),
    };
  });
}

export async function postGerenatedCars() {
  const carsArray = makeHundredRandomCars();

  carsArray.forEach(async (car) => {
    postItem('garage', car);
  });
}
