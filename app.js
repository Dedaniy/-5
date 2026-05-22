import ProductCard from "./components/ProductCard.js";

const app = Vue.createApp({
    components: {
        ProductCard
    },

    data() {
        return {
            searchText: "",
            selectedCategory: "all",
            cart: [],
            products: [
                { id: 1, name: "Ноутбук Acer Aspire", category: "Ноутбуки", price: 22999 },
                { id: 2, name: "Samsung Galaxy A15", category: "Смартфони", price: 8999 },
                { id: 3, name: "Навушники TWS", category: "Аксесуари", price: 1499 },
                { id: 4, name: "Power Bank 20000 mAh", category: "Аксесуари", price: 1199 },
                { id: 5, name: "ASUS VivoBook", category: "Ноутбуки", price: 26999 },
                { id: 6, name: "Xiaomi Redmi Note", category: "Смартфони", price: 9999 }
            ]
        };
    },

    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                const matchesText = product.name
                    .toLowerCase()
                    .includes(this.searchText.toLowerCase());

                const matchesCategory =
                    this.selectedCategory === "all" ||
                    product.category === this.selectedCategory;

                return matchesText && matchesCategory;
            });
        },

        cartTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },

    methods: {
        addToCart(product) {
            this.cart.push(product);
        }
    }
});

app.mount("#app");