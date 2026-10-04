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