class Product {
    name;
    price;
    description;

    constructor(builder) {
        console.log("Calling Product Constructor");
        this.name = builder.name;
        if (builder.price > 0) {
            this.price = builder.price;
        } else {
            console.log("Invalid Price");
        }
        this.description = builder.description;
    }

    displayProduct() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`);
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = "";
                this.price = 0;
                this.description = "";
            }
            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }
            setName(incomingName) {
                this.name = incomingName;
                return this;
            }
            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }
            build() {
                return new Product(this); // Try to return the object of product
            }
        }
        return new Builder();
    }
};

const Iphone = Product.Builder.setName("Iphone 15 pro Max").setPrice(1000).setDescription("Mobile Phone").build();
// Iphone.displayProduct();
console.log(Iphone);
