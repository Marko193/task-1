let btn = document.getElementById('btn').addEventListener('click', fetchData);
let counter = 0;
let wrapper = document.getElementById('wrapper');

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json();
    }).then(postsData => {
        for (let i = 0; i < 20; i++) {
            wrapper.innerHTML = wrapper.innerHTML + `
            <div class="card">
                    <div class="card-body">
                    <p class="user-num">User's id: <b>${postsData[counter].userId}</b></p>
                    <p class="card-num">Number of the post: #<b>${postsData[counter].id}</b></p>
                    <h5 class="card-title">${postsData[counter].title}</h5>
                    <p class="card-text">${postsData[counter].body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
            counter = counter + 1;
        }
    }).catch(error => {
        countersole.log(error);
    });
}

fetchData();

// let btn = document.getElementById('btn').addEventListener('click', getPost);
// let counter = 0;
// let div = document.getElementById('cardDiv');

// function getPost() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {
//             return res.json();
//         })
//         .then(post => {
//             for (let i = 0; i < 20; i++) {
//                 div.innerHTML = div.innerHTML + `
//                 <tr>
//                     <td>${post[counter].userId}</td>
//                     <td>${post[counter].id}</td>
//                     <td>${post[counter].title}</td>
//                     <td>${post[counter].body}</td>
//                 </tr>
//                 `
//                 counter = counter + 1;
//             }
//         })
//         .catch(error => {
//             countersole.log(error);
//         })
// }