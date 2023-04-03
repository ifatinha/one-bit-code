class Product {

    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addStock(quantity) {
        return (this.inStock += quantity);
    }

    calculateDiscount(percentagem) {
        return this.price = this.price - ((this.price * percentagem) / 100);
    }
}

const product1 = new Product("Notebook", "Notebook Gamer Acer Aspire Nitro 5 AN515-54-58CL Intel Core i5 9300H", 5500);
console.log(product1);

product1.addStock(50);
console.log(product1);

console.log(product1.calculateDiscount(5));