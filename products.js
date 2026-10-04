console.log("Product API started");

const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://dummyjson.com/products"
);

xhr.onload = function () {

    console.log("Response received");
    console.log("Status:", xhr.status);

    if (xhr.status === 200) {

        const products = JSON.parse(xhr.responseText);

        console.log("Product data received");
        console.log(products);

        console.log("First product:");
        console.log(products.products[0]);

        console.log("Product title:");
        console.log(products.products[0].title);

    } else {

        console.log("Something went wrong");
        console.log(xhr.status);
    }
};

xhr.onerror = function () {
    console.log("Request failed");
};

xhr.send();

console.log("Request sent");