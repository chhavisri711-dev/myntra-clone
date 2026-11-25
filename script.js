// VARIABLES AND DATA TYPES

let bagCount = 0;

const storeName = "Myntra Fashion Store";

let isStoreOpen = true;

let totalProducts = 4;


// ARRAY

let products = [
    "Men Casual T-Shirt",
    "Women Western Dress",
    "Casual Sneakers",
    "Beauty Care Kit"
];


// OBJECT

let customer = {
    name: "Chhavi",
    city: "Lucknow",
    membership: "Regular"
};


// FUNCTION TO ADD PRODUCTS TO BAG

function addToBag() {

    bagCount++;

    document.getElementById("bagCount").innerText = bagCount;

    alert("Product added to your bag!");

}


// SEARCH FUNCTION

function searchProducts() {

    let input = document.getElementById("searchInput").value;

    // STRING METHOD

    let searchText = input.toLowerCase().trim();

    let found = false;

    // LOOP

    for (let i = 0; i < products.length; i++) {

        if (products[i].toLowerCase().includes(searchText)) {

            alert("Product Found: " + products[i]);

            found = true;

            break;
        }
    }

    // CONDITIONAL STATEMENT

    if (searchText === "") {

        alert("Please enter a product name.");

    } else if (found === false) {

        alert("Sorry! Product not found.");

    }

}


// ARROW FUNCTION

const showStoreName = () => {

    console.log("Welcome to " + storeName);

};

showStoreName();


// ARRAY METHOD

products.forEach(function(product) {

    console.log(product);

});


// ARITHMETIC OPERATORS

let price = 1000;

let discount = 20;

let finalPrice = price - (price * discount / 100);

console.log("Final Price: " + finalPrice);


// DISPLAY CUSTOMER DETAILS

console.log("Customer Name: " + customer.name);

console.log("Customer City: " + customer.city);


// WHILE LOOP

let count = 1;

while (count <= totalProducts) {

    console.log("Product Number: " + count);

    count++;

}


// FOR OF LOOP

for (let product of products) {

    console.log(product);

}


// SWITCH STATEMENT

let category = "women";

switch(category) {

    case "men":
        console.log("Men Fashion");
        break;

    case "women":
        console.log("Women Fashion");
        break;

    case "kids":
        console.log("Kids Fashion");
        break;

    default:
        console.log("Explore All Categories");

}