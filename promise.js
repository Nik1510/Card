const promiseOne = new Promise(function(resolve,reject){
    // Do an async task 
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // here we connect promise to then() function
    },1000)
})

promiseOne.then(function(){
    console.log('Promise is resolved');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 is resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"Nikhil",password:"123"})
    }else{
        reject('ERROR:Something went Wrong')
    }
},1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(`Hello ${username}`);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR:javascript went Wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const responce =await promiseFive
    console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() // here we have to use the keyword await because it take time to process 
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()



// I have to do same thing but in different way

fetch('https://jsonplaceholder.typicode.com/users')
.then((responce) =>{
    responce.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log("E:", error))