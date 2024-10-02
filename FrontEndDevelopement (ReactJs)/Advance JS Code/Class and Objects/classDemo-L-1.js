class Product {

    #name;
    #price;
    category;
    description;
    image;

    constructor(productCategory, productDescription, productImage) {
        this.category = productCategory;
        this.description = productDescription;
        this.image = productImage;
    }



    set setName(newName) {
        this.#name = newName;
    }

    get getName() {
        return this.#name;
    }


    displayProduct() {
        console.log("Product displayed");
    }



};

let iphone = new Product("mobile", "Good Phone", "image1.png");

iphone.setName = "Iphone";
console.log(iphone.getName);    
