console.log("JavaScript file is connected!");

const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/todos"
);

xhr.onload = function () {

    if (xhr.status === 200) {

        const data = JSON.parse(xhr.responseText);

        console.log(data);

    } else {

        console.log("Something went wrong");

    }
};

xhr.send();
//"First, I create an XMLHttpRequest object. Then I use the open() method to configure a GET request with the API URL. I register an onload callback to handle the response after the request completes. Inside the callback, I check whether the HTTP status is 200. If it is successful, I read the response using responseText, convert the JSON string into a JavaScript object using JSON.parse(), and then process the data. Finally, I use send() to send the request."