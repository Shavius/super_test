export { Select, Select2 };

class Select {
    constructor(select) {
        this.el = document.querySelector(select);
    }
    getSelect() {
        return this.el;
    }
}

class Select2 extends Select {
    constructor(select) {
        super('.' + select);
        this.switch = 1;
    }
    setColorGreen(color = 'green') {
        if (this.switch == 1) {
            this.el.style.color = color;
            this.switch = 0;
            console.log(this.switch, 'yes');
        }
        else {
            this.el.style.color = 'gray';
            this.switch = 1;
            console.log(this.switch, 'no');
        }
    }
}
