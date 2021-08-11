

// console.log('Waiting for server response...');
//
// const p = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const serverData = {
//             server: 'aws',
//             port: '5432',
//             status: 'isCreated'
//         }
//         resolve(serverData)
//     }, 3000);
// });
//
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(data != null) {
//                 data.reseived = true;
//                 console.log('Data modified');
//                 resolve(data);
//             } else {
//                 reject('Data not found');
//             }
//         }, 2000)
//     });
// }).then(serverData => {
//         return new Promise((resolve, reject) => {
//             setTimeout( () => {
//                     if(serverData != null) {
//                         console.log(serverData);
//                     } else {
//                         reject('Data not found exception');
//                     }
//                 }, 2000)
//             }
//         );
// }).catch(err => console.log('Error: ', err))

const sleep = (ms) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('Waiting');
            resolve();
        }, ms)
    });
};


sleep(2000)
    .then( () => console.log('After 2 seconds'));
