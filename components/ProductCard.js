export default {
    props: {
        product: Object
    },

    template: `
        <div class="vue-card">
            <h3>{{ product.name }}</h3>
            <p>Категорія: {{ product.category }}</p>
            <p>Ціна: {{ product.price }} грн</p>

            <button @click="$emit('add-to-cart', product)">
                Додати в кошик
            </button>
        </div>
    `
}