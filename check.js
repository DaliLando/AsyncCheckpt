// Task 1 //

// let arr = [1,2,3,4,5,6,7,8,52,41,26];
//  async function iterateWithAsyncAwait (arr){
//     for (let i=0; i<arr.length; i++){
//         await new Promise(resolve=>
//             setTimeout(
//                 resolve
//             ,1000))
//             console.log(arr[i]);
// }
//  }
// iterateWithAsyncAwait(arr);


// Task 2  //
// let tab =[];
// async function awaitCall (){
//     await fetch ("https://jsonplaceholder.typicode.com/todos")
//    .then (item => {
//     return item.json()
//    } )
//    .then (item => console.log(item) )
//    .catch ((error)=>{
//     console.error('hi this is a message',error)
// })
// }
// awaitCall();

// Task 3 //

// async function chainedAsyncFunctions (){
//      await msg1()
//      .then ( item => console.log(item))
//       await msg2()
//       .then ( item => console.log(item))

//        await msg3 ()
//        .then ( item => console.log(item))

// }

// async function msg1 (){
//     return new Promise ((resolve)=> {
//         setTimeout(()=>{
//             resolve ("first message")
//        }
//        ,1000)
//     }
//     )
// }
// async function msg2 (){
//     return new Promise ((resolve)=> {
//         setTimeout(()=>{
//             resolve ("second message")
//        }
//        ,1000)
//     }
//     )
// }
// async function msg3 (){
//     return new Promise ((resolve)=> {
//         setTimeout(()=>{
//             resolve ("third message")
//        }
//        ,1000)
//     }
//     )
// }
// chainedAsyncFunctions ()

// Task 4 // 
// async function concurrentRequests(){
//     let data1 = await fetch ("https://jsonplaceholder.typicode.com/todos")
//     .then (item => {
//      return item.json()
//     } )
//     let data2= await  fetch ("https://jsonplaceholder.typicode.com/users")
//     .then (item => {
//      return item.json()
//     } )

//     Promise.all([data1,data2])
//     .then (item => console.log(item))
// }
// concurrentRequests()

// Task 5 //
tab = ["https://jsonplaceholder.typicode.com/todos","https://jsonplaceholder.typicode.com/users"]
 async function parallelCalls(){
 const calls = await tab.map(async (item) => {
    const response = await fetch(item);
    return response.json() })
 Promise.all (calls)
 .then (value => console.log(value))
 }


// const dataFetched= async(value)=> {
    // const response = await fetch(value);
    // return response.json()
// }
parallelCalls(tab)