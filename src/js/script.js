import {Warrior} from './Warrior';

let lenargoWarrior = new Warrior({
    nmae: 'Lenargo',
    race: 'Elf',
    level: 20
});

console.table(lenargoWarrior);

console.log('---');

// Вызов функции
lenargoWarrior.getWarriorInfo();
