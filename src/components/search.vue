<template>
    <input v-model="inputText" type="text" placeholder="Поиск">
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                inputText: ''
            }
        },
        watch: {
            inputText() {
                this.$emit('search-update', this.inputText)
            }
        }
    }

</script>
