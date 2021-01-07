import {Warrior} from './Warrior';
import {Select} from './Select';

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
