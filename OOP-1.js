// step one

/* const name = "Monitor";
const price = 10000;
const quantity = 4;

function total(name, price, quantity) {
    const total = price * quantity;
    console.log(`Total price of ${name} ${total}`); 
} 

total(name, price, quantity); */

/* ======================================================================================== */

// step two

/* const monitor = {
    name: "Dell Monitor",
    price: 20000,
    quantity: 2,
    total: function () {
        const total = this.price * this.quantity;
        console.log(`Total price of ${this.monitor} around ${total}`);
    }
}

monitor.total(); */


/* ======================================================================================== */

// step three

/* function productPrice(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        totalPrice: function () {
            const total = this.price * this.quantity;
            console.log(`Total price of ${this.name} around ${total}`);
        }
    }
}

const price = productPrice("Black Berry Phone", 35000, 2);
console.log(price); */


/* ======================================================================================== */

// step four

/* function ProductPrice(name, price, quantity) {
    this.productName = name;
    this.productPrice = price;
    this.productQuantity = quantity;
    this.totalPrice = function () {
        console.log(`Total price of ${this.productName} ${this.productPrice*this.productQuantity}`);
    }
}

const price = new ProductPrice('Microphone', 3000, 4);
console.log(price); */