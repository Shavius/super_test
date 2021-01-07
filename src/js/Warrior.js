export {Warrior};

/**
 * class Warrior
 */
class Warrior {
    /**
     * Класс Warrior
     * @param {object} options Обект nmae, race, level
     */
    constructor(options) {
        this.name = options.name;
        this.race = options.race;
        this.level = options.level;
    }
    getWarriorInfo() {
        console.log(this.name);
        console.log(this.race);
        console.log(this.level);
    }
}