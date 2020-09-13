<template>
    <div class="basket">
        <div v-for="(item, index) in items" :key="index" class="basket-item">
            {{index + 1}} {{item.product_name}}, {{item.price}}р. {{item.quantity}}шт.
            <button @click="basketRemove(item, index)">удалить</button>
        </div>
        Всего: {{getTotalCost()}}
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {}
        },
        methods: {
            getTotalCost() {
                return this.items.reduce((sum, {price, quantity}) => (sum + price * quantity), 0);
            },
            basketRemove(item, i) {
// снова проблема с обновлением компонента.
                this.items[i].quantity > 1 ? this.items[i].quantity-- : this.items.pop(i)
                this.$emit('update')
            }
        }
    }
</script>
