console.log("Fetch Product API started");

fetch("https://dummyjson.com/products")

    .then(function (response) {

        console.log("Response received");
        console.log("Status:", response.status);

        return response.json();
    })

    .then(function (data) {

        console.log("Product data received");
        console.log(data);

        console.log("First product:");
        console.log(data.products[0]);

        console.log("First product title:");
        console.log(data.products[0].title);

    })

    .catch(function (error) {

        console.log("Something went wrong");
        console.log(error);

    });