const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
];

const renderGoodsItem = (title = "Товар", price = 100) => {
  return /*html*/ `
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
                        href="{% url 'main:product' item.pk %}">${title}</a></span><br>
                <div class="price">
                    <span class="price"> ${price} &#8381;</span>

                        <span class="old-price"> ${price * 3} &#8381;</span>

                    <br>
                    <button class="buy"><a href="{% url 'basket:add' item.id %}">Добавить товар</a></button>
                </div>

            </div>
        </div>
    </div>
    `;
};

const renderGoodsList = (list = goods) => {
  let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
  document.querySelector(".main").innerHTML = goodsList;
};

window.onload = () => {
  renderGoodsList();
};
