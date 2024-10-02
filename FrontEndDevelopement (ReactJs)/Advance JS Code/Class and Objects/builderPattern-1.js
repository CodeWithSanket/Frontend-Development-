class Product {
    constructor(builder) {
        this.name = builder.name;
        if (builder.price > 0 && typeof (builder.price) === "number") {
            this.price = builder.price;
        } else {
            return {};
        }
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating;
    }

    getPrice() {
        return this.price;
    }

    set Price(p) {
        if (p > 0) {
            this.price = p;
        } else {
            console.log("Invalid price");
        }
    }
};


const iphone = new Product({
    name: "Iphone",
    price: 1000,
    category: "Electronics",
    description: "Apple Iphone",
    rating: 4.5
});

console.log(iphone);
iphone.getPrice();


