console.log("Fetch Movie API started");

fetch("https://api.tvmaze.com/search/shows?q=batman")

    .then(function (response) {

        console.log("Response received");
        console.log("Status:", response.status);

        return response.json();
    })

    .then(function (movies) {

        console.log("Movie data received");
        console.log(movies);

        console.log("First movie/show:");
        console.log(movies[0]);

        console.log("First movie/show name:");
        console.log(movies[0].show.name);

    })

    .catch(function (error) {

        console.log("Something went wrong");
        console.log(error);

    });