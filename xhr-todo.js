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

        const todoContainer = document.getElementById("todoContainer");

        data.forEach(function(todo) {

            todoContainer.innerHTML += `
                <div>
                    <h3>${todo.id}. ${todo.title}</h3>
                    <p>User ID: ${todo.userId}</p>
                    <p>Completed: ${todo.completed}</p>
                </div>
                <hr>
            `;

        });

    } else {

        console.log("Something went wrong");

    }
};

xhr.send();