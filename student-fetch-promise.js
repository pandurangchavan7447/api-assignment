console.log("Fetch Student API started");

fetch("https://jsonplaceholder.typicode.com/users")

    .then(function (response) {

        console.log("Response received");
        console.log("Status:", response.status);

        return response.json();
    })

    .then(function (students) {

        console.log("Student data received");
        console.log(students);

        console.log("First student:");
        console.log(students[3]);

        console.log("First student name:");
        console.log(students[3].email);
        console.log(students[4].name);

    })

    .catch(function (error) {

        console.log("Something went wrong");
        console.log(error);

    });