function Product(name, price, description) {  // Function constructor
    this.name = name;
    this.price = price;
    this.description = description;
    this.displayProduct = function display() {
        console.log("Product displayed",this.name,this.price,this.description);
    }
}

const p = new Product("iphone", 100000, "Good Phone");
console.log(p);
p.displayProduct();
