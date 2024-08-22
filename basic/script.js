let count = 0;

function callback(){
    console.log(count);
    count = count+1;
    
}
return
setInterval(callback,1000)

// function deletetodo(index){
//     let element = document.getElementById("todo-" + index);
//     document.getElementById("todoparnt").removeChild(element);
// }