// const a = setTimeout(()=>{
//     console.log("Hello");
// },1000)

// function NikhilWaits(){
//     return new Promise(function(resolve,reject){
//         console.log("The thread just entered Promise");
//         setTimeout(()=>{
//             console.log("The is in setTimeOut which is inside Promise");
//             resolve(()=>{
//                 setTimeout(()=>{
//                     console.log("In resolve parameter")
//                 },1000)
//             });
//         },1000)
//         console.log("Calling outside function");
        
//     }).then((data)=>{
//         data();
//         console.log("promise is consumed",data);
        
//     })
// }
// NikhilWaits();

// --- Same code using Async 

const a = setTimeout(()=>{
    console.log("Hello World!");
},1000);

async function NikhilWaits() {
    console.log("THe thread just entered async function");
    
    const result = await new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("This is in setTimeOut which is inside async");
            resolve(()=>{
            setTimeout(()=>{
                console.log("in Resolve parameter");
            })
        },1000)
        },1000)
        
    })
    result();
    console.log("Promise is consumed",result);
}
NikhilWaits()