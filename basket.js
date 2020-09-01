class Basket {
    constructor(user, items = []) {
        this.user = user;
        this.created = new Date();
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        this.items = this.items.filter(value => value.name !== item.name);
    }

    getItemList() {
        return this.items
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
