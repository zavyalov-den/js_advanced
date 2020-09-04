const app = new Vue({
    el: "#app",
    data: {
        API_URL: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        goods: [],
        filteredGoods: [],
        inputText: ''
    },
    watch: {
        inputText(val) {
            this.handleFiltering()
        }
    },
    methods: {
        fetchGoods() {
            this.makeRequest('GET', `${this.API_URL}/catalogData.json`)
                .then(data => {
                        this.goods = JSON.parse(data);
                        this.filteredGoods = JSON.parse(data);
                        // this.render();
                    }
                )
        },
        filterGoods(value) {
            const re = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(item =>
                re.test(item.product_name));
        },
        handleFiltering() {
            console.log(this.inputText)
            this.filterGoods(this.inputText)
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
        }
    },
    mounted() {
        this.fetchGoods()
    }
})
