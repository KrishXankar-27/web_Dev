//  fundamental of js
// arrays and object
// function return
// async js coding
// forEach , map  , filter , find indexof

let arr = [1 ,2 ,3 , 4, 9 , 8 , 10 , 2 , 4 ,5 ,1 ,2 ]
// for each

arr.forEach(function (val) {
    // console.log(val + " halo ");
});
arr.forEach(element => {
    // console.log(element + " worlds");
});

// map

let newarr = arr.map(element => {
    return element+10;
})

// console.log(newarr);

//  filter 
 
let filterarr = arr.filter(function (val){
    if (val > 3) {
        return true
        
    } else {
        return false;
    }
})

// console.log(filterarr);

// find 

let indexarr = arr.findIndex(function(num){
    return num>5
})
console.log(indexarr);

console.log(arr.indexOf(10));
;

let obj = {
    name:"KrishXankar" ,
    title: "Ghosh" ,
    age:18
}

console.log(obj['name']);
console.log(obj.title);
console.log(obj['age']);

let anss =  function ans (){
    return('console');
    
} 
console.log( anss());
