import {Vehicle} from "../vehicle/vehicle.model";
import {CarFactory} from "../factories/car-factory";
import {BycicleFactory} from "../factories/bycicle-factory";
import {randomNumbers} from "../utils/random-numbers";

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const car1 = carFactory.getVehicle('chevrolet');
    const car2 = carFactory.getVehicle('tesla');

    const bycicleFactory = new BycicleFactory();
    const bycicle = bycicleFactory.getVehicle('bycicle');

    const cars = [car1, car2, bycicle];

    return cars[randomNumbers(cars.length)];
 }
