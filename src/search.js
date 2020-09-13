Vue.component('search', {
    template: `
          <input v-model="inputText" type="text" placeholder="Поиск">
    `,
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
})
