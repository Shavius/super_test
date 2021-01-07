import {Warrior} from './modules/Warrior';
import {Select} from './modules/Select';
import {Select2} from './modules/Select';

let lenargoWarrior = new Warrior({
    name: 'Lenargo',
    race: 'Elf',
    level: 20
});

// Вызов класса и присвоение переменной ноды боди
let mainBody = new Select('.main__body').getSelect();

console.log(mainBody);

console.log('---');

console.table(lenargoWarrior);

console.log('---');

// Вызов функции
lenargoWarrior.getWarriorInfo();

// Вывод из метода класса на страницу
mainBody.innerHTML = lenargoWarrior.getWarriorInfo();

let h1Tile = new Select2('header__title');

console.log(h1Tile);

console.log('---');

h1Tile.setColorGreen();
