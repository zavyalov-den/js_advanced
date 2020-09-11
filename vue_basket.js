Vue.component('basket', {
    template: `
        <div class="basket">
        <div v-for="(item, index) in items" :key="index" class="basket-item">
        {{index + 1}} {{item.product_name}}, {{item.price}}р. {{item.quantity}}шт. <button @click="basketRemove(item, index)">удалить</button>
</div>
Всего: {{getTotalCost()}} 
</div>
    `,
    props: ['items'],
    data() {
        return {
            // basketItems: []
        }
    },
    methods: {
        getTotalCost() {
            return this.items.reduce((sum, {price, quantity}) => (sum + price * quantity), 0);
        },
        basketRemove(item, i) {
            // this.items = this.items.filter(value => value.name !== item.name);
            // снова проблема с обновлением компонента.
            this.items[i].quantity > 1 ? this.items[i].quantity-- : this.items.pop(i)
            this.$emit('update')
        }
    }
})
