console.log("Student API started");

const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/users"
);

xhr.onload = function () {

    if (xhr.status === 200) {

        const students = JSON.parse(xhr.responseText);

        console.log("Student data received");
        console.log(students);

    } else {

        console.log("Something went wrong");
        console.log(xhr.status);

    }
};

xhr.send();