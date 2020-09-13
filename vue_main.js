const app = new Vue({
    el: "#app",
    data: {
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        goods: [],
        filteredGoods: [],
        basketItems: [],
        bKey: 0
        // inputText: ''
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
                    // да костыль, но иначе компонент не обновляется,если меняются объекты внутри массива, а не сам
                    // массив. Возможно я делаю что-то не так)
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
})
