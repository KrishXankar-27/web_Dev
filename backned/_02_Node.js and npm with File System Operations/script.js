//  node.js basic
// intodruction to node.js
// installing node.js and npm
// working with modules
// file system operation
// understading HTTP module 

const fs = require('node:fs');

fs.writeFile("a.txt" , "this is node js fs module testing" , function(err){
    if (err) {
        console.log("file not able to create");
        
    } else {
        console.log("DONE");
        
    }
})
fs.appendFile("a.txt" , "  its execute suessfully " , function(err){
    if (err) {
        console.log("file not able to update");
        
    } else {
        console.log("DONE");
        
    }
})

fs.renameSync('a.txt' , "rename.txt" , function(err){
    if (err) {
        console.log("file not able to update" . err);
        
    } else {
        console.log("DONE");
        
    }
})


fs.copyFile('a.txt', 'copy1.txt', function (err) {
    if (err) {
        console.error("Error while copying file:", err);
    } else {
        console.log("File successfully copied!");
    }
});


fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading rename.txt:", err);
    } else {
        console.log("rename.txt content:", data);
    }
});

fs.rm("./copy" , { recursive : true} , function(err){
    if (err) {
        console.error("Error reading rename.txt:", err);
    } else {
        console.log("rename.txt content:", data);
    }
})

