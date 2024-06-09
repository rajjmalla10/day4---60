// const sum = (a,b) => {
//     console.log(a+b);
// }

// const calculator = (a,b,sumcallback) =>{
//     sumcallback(a,b);
// }

// calculator(1,2,sum)


// const hello = () =>{
//     console.log("helo")
// }

// setTimeout(hello,2000)

// const getdata = (data) =>{
//     return new Promise((resolve,reject)=>{
//        if(data){console.log("data")
//         resolve("sucess")}
//     else{
//         reject("error")
//     }
        
//     })
// }

// let promise = getdata("raj")

// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// const async1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" Email")
//             resolve("success")
//         },5000)
//     })
// }

// const async2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" Password")
//             resolve("success")
//         },5000)
//     })
// }

// console.log("fetching email data")
// let promise = async1();
// promise.then((res)=>{
// console.log("fetching password")
// let promise2 = async2()
//     promise2.then((res)=>{
//         console("password fetched")
//     })

// })


const async3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email");
            resolve("success");
        }, 5000);
    });
}

const async4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Password");
            resolve("success");
        }, 5000);
    });
}

const fetchData = async () => {
    try {
        console.log("fetching email data");
        const emailResult = await async3();
        console.log("fetching password");
        const passwordResult = await async4();
        console.log("password fetched");
    } catch (error) {
        console.error("An error occurred", error);
    }
}

fetchData();
