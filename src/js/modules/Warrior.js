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
        return this.name + ' ' + this.race + ' ' + this.level;
    }
}