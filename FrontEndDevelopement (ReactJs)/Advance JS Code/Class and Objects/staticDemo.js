class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static get getPrice() {
        return this.price;
    }
}

let p1 = new Product("iphone", 1000);
console.log(Product.getPrice);