// lecture 12
// task 1

let userID = document.getElementById('userID')
let id = document.getElementById('id')
let title = document.getElementById('title')
let body = document.getElementById('body')

let div = document.getElementById('div')

function pipe(...arr){
    for(const i in arr){
        console.log(arr[i])
    }
}

// pipe(2.4, 'h', 434,'fjk')

// task 2

let clone

const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url, {
    Method: 'POST',
    Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
    },
    Body: body,
    Cache: 'default'
})
    .then((response) => {return response.json()})
    .then((data) => {
        for(const i in data){
            userID.innerHTML = data[i].userId
            id.innerHTML = data[i].id
            title.innerHTML = data[i].title
            body.innerHTML = data[i].body
            clone = div.cloneNode(true)
            document.body.appendChild(clone)
        }
    })
    .catch((err) => {console.log('err')})


async function deepcopy(obj){
    try{
        
    }
}


