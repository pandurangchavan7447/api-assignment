const xhr=new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com");
xhr.onload=function(){
    if(xhr.status==200){
        const data=JSON.parse(xhr.responseText);
        console.log(data);
    }else{
        console.log("something went wrong ");

    }
};
xhr.send();