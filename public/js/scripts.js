let btn = document.getElementById('btn').addEventListener('click', getPost);
let con = 0;
let div = document.getElementById('cardDiv');

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json();
        })
        .then(post => {
            for (let i = 0; i < 20; i++) {
                div.innerHTML = div.innerHTML + `
                <tr>
                    <td>${post[con].userId}</td>
                    <td>${post[con].id}</td>
                    <td>${post[con].title}</td>
                    <td>${post[con].body}</td>
                </tr>
                `
                con = con + 1;
            }
        })
        .catch(error => {
            console.log(error);
        })
}