
// function getUser() {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => console.log(data
//         )).catch((error)=> {
//             console.error("خطا در گرفتن اطلاعات", error);
//         })

// }

async function getUser() {
    
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response);
        

    } catch (error) {
        console.error("خطا در گرفتن اطلاعات", error);
    }
}
