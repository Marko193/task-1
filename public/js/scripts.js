function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        return response.json();
    }).then(data => {
        let usersId = data.map(postsData => {
            return `
            <div class="card">
                    <div class="card-body">
                    <p class="user-num">User's id: <b>${postsData.userId}</b></p>
                    <p class="card-num">Number of the post: #<b>${postsData.id}</b></p>
                    <h5 class="card-title">${postsData.title}</h5>
                    <p class="card-text">${postsData.body}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`
        }).join('');
        // console.log(html);
        document
            .querySelector('.wrapper')
            .insertAdjacentHTML('afterbegin', usersId);
    }).catch(error => {
        console.log(error);
    });
}

fetchData();

// let btn = document.getElementById('btn').addEventListener('click', getPost);
// let con = 0;
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
//                     <td>${post[con].userId}</td>
//                     <td>${post[con].id}</td>
//                     <td>${post[con].title}</td>
//                     <td>${post[con].body}</td>
//                 </tr>
//                 `
//                 con = con + 1;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }