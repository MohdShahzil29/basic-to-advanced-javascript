// console.log('Hello')
// console.log('How are you')
// console.log('Hello')

// function fetchData(callBack) {
//     setTimeout(() => {
//         console.log('Data fetched')
//         callBack();
//     }, 2000)
// }

// function displayData() {
//     console.log("Displaying data....")
// }

// fetchData(displayData);


// let Promise = new Promise((resolve, reject) => {
//     let success = false;

//     setTimeout(() => {
//        if (success) {
//         resolve("Data fetched succesfully")
//        } else {
//         reject("Failed to fetch data")
//        }
//     }, 2000);
// })

// Promise
// .then(result => console.log(result))
// .catch(error => console.log(error));


// async function functionData() {
//     try {
//         let result = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Data fetched")
//             }, 2000);
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }