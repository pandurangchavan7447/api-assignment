console.log("post is coonected ")
const xhr = new XMLHttpRequest()
xhr.open("POST","https://jsonplaceholder.typicode.com/todos");
xhr.setRequestHeader(
    "Content-Type",
    "application/json"
);
xhr.onload=function(){
    if(xhr.status===201){
        const data =JSON.parse(xhr.responseText)

        console.log("Post Succesfully");
        console.log(data);
    }else{
        console.log("sometnhing went wrong");
        console.log(xhr.status);

    }
};
const studentData={
    title:"i am learing get post ",
    body:"i am king ",
    id:101

}
xhr.send(JSON.stringify(studentData));
/*
"First, I create an XMLHttpRequest object. Then I use the open() method with the POST method and API URL. I set the Content-Type header to application/json because I'm sending JSON data. I create the request body as a JavaScript object and convert it into a JSON string using JSON.stringify(). Then I send it using xhr.send(). In the onload callback, I check the HTTP status and parse the response using JSON.parse()."
*/