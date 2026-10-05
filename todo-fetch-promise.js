console.log("Fetch TODO started");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {

        console.log("Response received");
        console.log("Status:", response.status);

        return response.json();
    })
    .then(function (data) {

        console.log("TODO data received");
        console.log(data);

    })
    .catch(function (error) {

        console.log("Something went wrong");
        console.log(error);

    });