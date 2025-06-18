import { updateCardCounter, updateColumnCounter } from "./counters.js"

// Manipulação de Cards
const removeCardButton=document.querySelectorAll('.remove-card')
const editCardButton=document.querySelectorAll('.edit-card')
const createCardButton=document.querySelectorAll('.plus')

const createCard=({target})=>{
    console.log(target)
    const buttonContainer=target.parentElement
    const columnControl=buttonContainer.parentElement
    const columnHeader=columnControl.parentElement
    const column=columnHeader.parentElement
    const cardContainer=column.querySelector('.card-container')
    console.log(cardContainer)


    // Criacao do Card

    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("draggable", "true")

    const textContent = document.createElement("div")
    textContent.classList.add("text-content")
    textContent.setAttribute("contenteditable", "false")
    textContent.innerHTML = "Tarefa..."

    const cardControl = document.createElement("div")
    cardControl.classList.add("card-control")

    const removeCard = document.createElement("div")
    removeCard.classList.add("remove-card", "option")
    const removeIcon = document.createElement("i")
    removeIcon.classList.add("bi", "bi-x-lg")
    removeIcon.setAttribute("title", "Excluir")
    removeCard.appendChild(removeIcon)

    const editCard = document.createElement("div")
    editCard.classList.add("edit-card", "option")
    const editIcon = document.createElement("i")
    editIcon.classList.add("bi", "bi-pencil-fill")
    editIcon.setAttribute("title", "Editar")
    editCard.appendChild(editIcon)

    cardControl.appendChild(removeCard)
    cardControl.appendChild(editCard)

    card.appendChild(textContent)
    card.appendChild(cardControl)
    cardContainer.append(card)
}


const editCard=({target})=>{
    console.log(target)
    const buttonContainer=target.parentElement
    const cardControl=buttonContainer.parentElement
    console.log(cardControl)
    const card=cardControl.parentElement
    const textContent=card.querySelector('.text-content')
    textContent.contentEditable='true'
    textContent.focus()
    textContent.addEventListener('focusout', ()=>{
        textContent.contentEditable='false'
    })
}

const removeCard=({target})=>{
    console.log(target)
    const buttonContainer=target.parentElement
    const cardControl=buttonContainer.parentElement
    console.log(cardControl)
    const card=cardControl.parentElement
    card.remove()
}

createCardButton.forEach((item)=>{
    item.addEventListener('click', createCard)
    item.addEventListener('click', updateCardCounter)
})

editCardButton.forEach((item)=>{
    item.addEventListener('click', editCard)
})

removeCardButton.forEach((item)=>{
    item.addEventListener('click', removeCard)
    item.addEventListener('click', updateCardCounter)
})