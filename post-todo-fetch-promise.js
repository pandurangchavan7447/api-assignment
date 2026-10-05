console.log("Fetch POST started");

const studentData = {
    title: "Learn Fetch POST",
    body: "I am learning Fetch API with Promise",
    userId: 1
};

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(studentData)

})
.then(function (response) {

    console.log("Response received");
    console.log("Status:", response.status);    

    return response.json();

})
.then(function (data) {

    console.log("POST successful");
    console.log(data);

})
.catch(function (error) {

    console.log("Something went wrong");
    console.log(error);

});