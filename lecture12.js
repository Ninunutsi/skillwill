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
    Body: JSON.stringify({ userId: 1, title: 'test', body: 'test' }),
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
    .catch(() => {console.error('err')})


    const originalObj = {
        a: 1,
        b: { c: 2 },
        d: [3, 4]
      };


async function deepCopy(obj){
    let clonedObj

    if(typeof obj != 'object' || obj === null){
        return 'parameter is not an object'
    }

    if (Array.isArray(obj)) {
        clonedObj = [];
      } else {
        clonedObj = {};
    }

    for (let key in obj) {
    clonedObj[key] = await deepCopy(obj[key]);
    }
  
    return clonedObj;
}

(async function() {
    const copiedObj = await deepCopy(originalObj);
    console.log(copiedObj);
    
    copiedObj.a = 5;
    copiedObj.b.c = 6;
    copiedObj.d.push(7);
    
    console.log(copiedObj);
    console.log(originalObj); 
  })();



