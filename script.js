
//const todos = []
window.addEventListener('load', loadSite)

function loadSite(){
    const button = document.querySelector('button')
    button.addEventListener('click', addToDoListener)
}

function addToDoListener(){
    //const input = document.querySelector('div input')
    const input = event.target.previousElementSibling
    //add text to the todo list
    //todos.push(input.value)

    //Add list item (li) to list (ul)
    showTodoOnScreen(input.value)

    //clear inout field
    input.value= ""
}

function removeTodoListener(event){

    const li = event.target.parentElement

    //Remove li
    li.remove()
}

function showTodoOnScreen(todoText){
    //create a li-element
    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.type= 'checkbox'
    checkbox.addEventListener('click',removeTodoListener)

    //Add checkbox and todo-text
    li.append(checkbox)
    li.append(todoText)

    //add li to ul
    document.querySelector('ul').append(li)
}