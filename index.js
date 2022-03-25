// setTimeout(() => {
//     console.log("hello")
// }, 5000);

// setInterval(() => {
//     console.log("merhaba dünya")
// }, 2000);

import fetch from "node fetch" 

fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json()).then(users => console.log(users)
)
