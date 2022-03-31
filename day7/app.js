var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var buttonRemove = document.querySelector('.remove-all')
var tags = ['Nodejs', 'ReactJs']
function createTags(){
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=
        `<li>
        <span>${tag}</span>
        <i class="fa-solid fa-x" onclick="removeTag(${i})"></i>
        </li>`
    }
    content.appendChild(input)
    input.focus()
}
createTags()

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        createTags()
        input.value = null
    }
})

// Remove Tag

function removeTag(index) {
    tags.splice(index, 1)
    createTags()
}

buttonRemove.addEventListener('click', function(){
    tags.length = 0
    createTags()
})
