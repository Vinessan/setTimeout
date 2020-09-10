new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve("ok")
    }, 3000);
}).then(res => { 
    document.querySelector("header").innerHTML = "<h1>Welcome!</h1>";
}).catch(err => {
    document.querySelector("header").innerHTML = "<h1>Undefined!</h1>";
})