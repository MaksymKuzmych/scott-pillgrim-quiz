import { BASE_URL } from '../../utils/base-url';

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
  const whiteColorNumber = 16777215;

  return `#${Math.floor(Math.random() * whiteColorNumber).toString(16)}`;
}

function makeHundredRandomCars() {
  const carsArray = [];

  for (let i = 0; i < 100; i += 1) {
    const carName = `${arrayRandElement(producer)} ${arrayRandElement(model)}`;
    const carObject = {
      name: carName,
      color: generateRandomColor(),
    };

    carsArray.push(carObject);
  }

  return carsArray;
}

export async function postGerenatedCars() {
  const carsArray = makeHundredRandomCars();

  carsArray.forEach(async (car) => {
    await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  });
}
