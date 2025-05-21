// Promise is an object 
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task 
    // db calls ,crytography, network call
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000);
    console.log("Hello");
});

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise (function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task Two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nikhil", email: "example@gmail.com"});
    },1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:"Nikhil",password:"123"})
        }else{
            reject("ERROR, Something went wrong")
        }
    },1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(err){
    console.log(err)
})
.finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({
                username:"Nikhil",
                password:"1234"
            })
        }else{
            reject("ERROR: JS went Wrong")
        }
    },1000)
});

// it is not necessary to use .then(), .catch()
// you can use async and await also 
async function consumePromiseFive() {
    // promise is object 
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();

// async function getAllUsers() {
//    try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//    } catch (error) {
//         console.log("E:",error);
        
//    }
// }

// getAllUsers()


// if i want to go getAllUsers in .then() and .catch formate

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log("ERROR !  "))
