<template>
    <div>

        <div v-if="!filteredGoods.length" class="section">
            <h3>Нет данных для отображения</h3>

        </div>

        <div v-for="item in filteredGoods" :key="item.id_product" class="section goods-item">
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
                            href="#">{{item.product_name}}</a></span><br>
                    <div class="price">
                        <span class="price"> {{item.price}}  &#8381;</span>

                        <span class="old-price"> {{item.price * 3}} &#8381;</span>

                        <br>
                        <button @click="basketAdd(item)" class="buy">Добавить товар</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="test">
            <basket :items="basketItems" :key="bKey" @update="bKey++"></basket>
        </div>

    </div>

</template>

<script>
    import basket from './Basket'

    export default {
        components: {
            basket
        },
        name: 'catalog',
        props: ['searchText'],
        data() {
            return {
                API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
                goods: [],
                filteredGoods: [],
                basketItems: [],
                bKey: 0
            }
        },
        watch: {
            searchText(val) {
                this.filterGoods(val)
            }
        },
        methods: {
            fetchGoods() {
                this.makeRequest('GET', `${this.API_URL}/catalogData.json`)
                    .then(data => {
                            this.goods = JSON.parse(data);
                            this.filteredGoods = JSON.parse(data);
                        }
                    )
            },
            filterGoods(value) {
                console.log(value)
                const re = new RegExp(value, 'i');
                this.filteredGoods = this.goods.filter(item =>
                    re.test(item.product_name));
            },
            getTotalCost() {
                return this.filteredGoods.reduce((sum, {price}) => (sum + price), 0);
            },
            makeRequest(method, url) {
                return new Promise((resolve, reject) => {
                    let xhr;

                    if (window.XMLHttpRequest) {
                        xhr = new XMLHttpRequest();
                    }
                    // else if (window.ActiveXObject) {
                    //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
                    // }

                    xhr.open(method, url, true);

                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            resolve(xhr.responseText)
                        } else {
                            reject()
                        }
                    }

                    xhr.onerror = () => {
                        reject()

                    }
                    xhr.send();
                })
            },
            basketAdd(item) {
                let exists = false
                for (const i of this.basketItems) {
                    if (item.id_product === i.id_product) {
                        i.quantity++
                        exists = true
                        // todo make an Array.slice() instead?
                        this.bKey++
                    }
                }
                if (!exists) {
                    item.quantity = 1
                    this.basketItems.push(item)
                }
            }
        },
        mounted() {
            this.fetchGoods()
            // this.filterGoods(this.searchText)
        }
    }
</script>
