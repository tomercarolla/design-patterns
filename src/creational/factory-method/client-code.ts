import {Car} from "./vehicle/car";
import {CarFactory} from "./factories/car-factory";
import {randomCarAlgorithm} from "./main/random-vehicle-algorithm";
import {randomNumbers} from "./utils/random-numbers";


//WITHOUT FACTORY

//every time you use "new" in your code, you are stuck to this new.
//if you change something in Car class, you break your code (every place you use Car class)
const toyota = new Car('toyota');
toyota.pickUp('tomer');
toyota.stop();

const hiunday = new Car('hiunday');
hiunday.pickUp('tomer');
hiunday.stop();

//WITH FACTORY

const carFactory = new CarFactory();
const kaya = carFactory.getVehicle('kaya');
kaya.pickUp('tomer');
kaya.stop();

//CALL METHOD FROM VEHICLE FACTORY

// const newCar = carFactory.pickUp('new customer', 'new car');

//RANDOM WITH FACTORY

const customerNames = ['tomer', 'eran', 'asaf', 'lin'];

for(let i = 0; i < 10; i++) {
    const vehicle = randomCarAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();
    console.log('---');
}
