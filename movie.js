console.log("Movie API started");

const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://api.tvmaze.com/search/shows?q=batman"
);

xhr.onload = function () {

    console.log("Response received");
    console.log("Status:", xhr.status);

    if (xhr.status === 200) {

        const movies = JSON.parse(xhr.responseText);

        console.log("Movie data received");
        console.log(movies);

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
