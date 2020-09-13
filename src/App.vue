<template>
    <div id="app">
        <div class="container">
            <div class="main">
                <div class="section categories">

                    <div class="section banner">
                        <h1>Stuff!</h1>
                        <h6>Пожалуй лучший товар в мире.</h6>
                        <span>Page is under construction...</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <span>&copy; Zavyalov Den 2020</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
                goods: [],
                filteredGoods: [],
                basketItems: [],
                bKey: 0
// inputText: ''
            }
        },
        watch: {
// inputText(val) {
//     this.filterGoods()
// }
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
                    } else if (window.ActiveXObject) {
                        xhr = new ActiveXObject("Microsoft.XMLHTTP");
                    }

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
                exists = false
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
        }
    }

</script>

<style>
    @import "./css/style.css";
</style>
