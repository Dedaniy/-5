const categorySelect = document.getElementById("category-select");
const productCards = document.querySelectorAll(".filter-card");
const filterButtons = document.querySelectorAll("#filter-buttons button");

function filterProducts(selectedCategory) {
    productCards.forEach(function (card) {
        const cardCategory = card.dataset.category;
        const shouldHide =
            selectedCategory !== "all" && cardCategory !== selectedCategory;

        card.classList.toggle("hidden", shouldHide);
    });
}

categorySelect.addEventListener("change", function () {
    filterProducts(categorySelect.value);
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;
        categorySelect.value = selectedCategory;
        filterProducts(selectedCategory);
    });
});