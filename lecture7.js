// lecture7
// task1
// 

let btn = document.getElementById('hider')
let text = document.getElementById('text')

let val = true

btn.addEventListener('click', () => {
    text.style.display = val ? 'none' : 'block'
    val = !val
})

// task 2 and 3

const newDiv = document.createElement("div");
let newH = document.createElement('h2')
newH.innerText = 'vaniko'
let newLink = document.createElement('a')
newLink.innerText = 'Go to profile'
newDiv.appendChild(newH)
newDiv.appendChild(newLink)
newDiv.style.backgroundColor = 'red'
document.body.appendChild(newDiv);