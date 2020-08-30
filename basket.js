class Basket {
    constructor(user, items = []) {
        this.user = user;
        this.created = new Date()
    }

    updated: null;

    add(item) {
        item.push(item);
    }

    // исключительно фантазии на тему, а не работчий код. Хотя не исключено, что будет работать =)
    remove(item) {
        this.items = this.items.filter(value => value.name !== item.name)
    }
}

class BasketItem {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    // снова совсем не то, что нужно делать для применения скидки, но "и так сойдет".
    applyDiscount(discount = 0) {
        this.price = this.price - (this.price * (discount / 100));
    }

}