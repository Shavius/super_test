export {Select};

class Select {
    constructor(select) {
        this.el = document.querySelector(select);
    }
    getSelect() {
        return this.el;
    }
}