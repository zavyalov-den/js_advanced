let goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];


class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `
              <div class="section goods-item">
                    <div class="item">
                        <div class="image">

                        </div>

                        <div class="text">

                            <h4>Описание: </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur assumenda deserunt
                                dicta
                                incidunt ipsam laborum porro sed sunt ullam! Ad amet assumenda commodi consequatur dolores
                                eligendi fugiat minus, necessitatibus obcaecati, odit officia perspiciatis porro quos
                                voluptas
                                voluptate! Aperiam assumenda deleniti eum fugit id in, odit optio quaerat totam
                                veritatis.</p>
                        </div>
                        <div class="buy-block">
                                <div class="discount"><span>-66.6%</span></div>
                            <div class="bestsell"><span>Надо брать!</span></div>
                            <br>
                            <span class="name"><a
                                    href="#">${this.title}</a></span><br>
                            <div class="price">
                                <span class="price"> ${this.price} &#8381;</span>

                                    <span class="old-price"> ${this.price * 3} &#8381;</span>

                                <br>
                                <button class="buy"><a href="#">Добавить товар</a></button>
                            </div>

                        </div>
                    </div>
                </div>
        `;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(goods = []) {
        this.goods = goods;
    }

    getTotalCost() {
        return this.goods.reduce((sum, {price}) => (sum + price), 0);
    }

    render() {
        let listHtml = '';
        this.goods.forEach(({title, price}) => {
            const goodItem = new GoodsItem(title, price);
            listHtml += goodItem.render();
        });
        document.querySelector('.main').innerHTML = listHtml;
    }
}

window.onload = () => {
    const list = new GoodsList();
    list.fetchGoods(goods);
    list.render()
    console.log(list.getTotalCost())
}


