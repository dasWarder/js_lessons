const delay = (ms) => new Promise(
                        (r) =>  setTimeout(r, ms));

delay(2000).then(() => console.log('Await'));

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const fetchTodos = () => {
//     return delay(2000)
//         .then( () => fetch(url) )
//         .then( response => response.json() )
// };
//
// fetchTodos()
//     .then( response => console.log(response) )
//     .catch( err => console.error(err) )
//     .finally(() => {
//         console.log('Finished!');
//     });

async function fetchAsyncTodos() {
    try {
        await delay(2000);
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('Finished!');
    }
}

fetchAsyncTodos();
