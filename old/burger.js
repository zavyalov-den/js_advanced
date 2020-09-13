sizes = [
    {
        name: 'small',
        cals: 20,
        price: 50
    },
    {
        name: 'big',
        cals: 40,
        price: 100
    },
]

options = [
    {
        name: 'cheese',
        cals: 20,
        price: 10
    },
    {
        name: 'potato',
        cals: 10,
        price: 15
    },
    {
        name: 'salad',
        cals: 5,
        price: 20
    },
]

extras = [
    {
        name: 'mayonnaise',
        cals: 5,
        price: 20
    },
    {
        name: 'flavoring',
        cals: 5,
        price: 20
    },
    {
        name: 'None',
        cals: 0,
        price: 0
    },

]

class Burger {
    constructor(size, option, extra) {
        this.size = size;
        this.option = option;
        this.extra = extra;
    }

    getPrice() {
        return this.size.price + this.option.price + this.extra.price;
    }

    getCals() {
        return this.size.cals + this.option.cals + this.extra.cals;
    }

    render() {
        const el = document.querySelector('.burgerInfo');
        el.innerHTML = `
            <h5>Your persoral burger</h5>
            <p>price: ${this.getPrice()}$</p>
            <p>calories: ${this.getCals()}</p>
        `
    }

}

for (let size of sizes) {
    const option = document.createElement('option');
    option.value = JSON.stringify(size);
    option.innerText = size.name;
    document.querySelector('#size').appendChild(option);
}

for (let option of options) {
    const option_el = document.createElement('option');
    option_el.value = JSON.stringify(option);
    option_el.innerText = option.name;
    document.querySelector('#options').appendChild(option_el);
}

for (let extra of extras) {
    const option = document.createElement('option');
    option.value = JSON.stringify(extra);
    option.innerText = extra.name;
    document.querySelector('#extras').appendChild(option);
}

const createBurger = () => {
    const size = JSON.parse(document.querySelector('#size').value);
    const option = JSON.parse(document.querySelector('#options').value);
    const extra = JSON.parse(document.querySelector('#extras').value);
    const burger = new Burger(size, option, extra);
    burger.render();

    console.dir(burger);
    console.log(burger.getPrice());
}
