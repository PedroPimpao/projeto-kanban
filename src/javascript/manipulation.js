import { updateCardCounter, updateColumnCounter } from "./counters.js"
import { options } from "./dragDrop.js"
import { dragMobile, dragMobileEnd } from "./dragDrop.js"

// Manipulação de Cards
const removeCardButton=document.querySelectorAll('.remove-card')
const editCardButton=document.querySelectorAll('.edit-card')
const createCardButton=document.querySelectorAll('.plus')

const newCard=()=>{
    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("draggable", "true")

    const textContent = document.createElement("div")
    textContent.classList.add("text-content")
    textContent.setAttribute("contenteditable", "false")
    textContent.innerHTML = "Tarefa..."

    const cardControl = document.createElement("div")
    cardControl.classList.add("card-control")

    const removeCardButton = document.createElement("div")
    removeCardButton.classList.add("remove-card", "option")
    const removeIcon = document.createElement("i")
    removeIcon.classList.add("bi", "bi-x-lg")
    removeIcon.setAttribute("title", "Excluir")
    removeCardButton.appendChild(removeIcon)

    const editCardButton = document.createElement("div")
    editCardButton.classList.add("edit-card", "option")
    const editIcon = document.createElement("i")
    editIcon.classList.add("bi", "bi-pencil-fill")
    editIcon.setAttribute("title", "Editar")
    editCardButton.appendChild(editIcon)

    cardControl.appendChild(removeCardButton)
    cardControl.appendChild(editCardButton)

    card.appendChild(textContent)
    card.appendChild(cardControl)
    
    editCardButton.addEventListener('click', editCard)
    removeCardButton.addEventListener('click', removeCard)
    removeCardButton.addEventListener('click', updateCardCounter)

    card.addEventListener('dragstart', dragMobile)
    card.addEventListener('dragend', dragMobileEnd)

    return card
}

const createCard=({target})=>{
    console.log(target)
    const buttonContainer=target.parentElement
    const columnControl=buttonContainer.parentElement
    const columnHeader=columnControl.parentElement
    const column=columnHeader.parentElement
    const cardContainer=column.querySelector('.card-container')
    console.log(cardContainer)

    cardContainer.append(newCard())
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

// Manipulação de Colunas
const createColumnButton=document.querySelector('.plusColumn')
const removeColumnButton=document.querySelectorAll('.remove')
const columnTitle=document.querySelectorAll('.column-title')

const newColumn=()=>{
    const column = document.createElement('div')
    column.classList.add('column')

    const columnHeader = document.createElement('div')
    columnHeader.classList.add('column-header')

    const columnTitle = document.createElement('h2')
    columnTitle.classList.add('column-title')
    columnTitle.textContent = `Coluna ${updateColumnCounter()+1}`

    const columnControl = document.createElement('div')
    columnControl.classList.add('column-control')

    const plusButton = document.createElement('div')
    plusButton.classList.add('plus')

    const plusIcon = document.createElement('i')
    plusIcon.classList.add('bi', 'bi-plus-lg')
    plusIcon.title = 'Criar card'
    plusButton.appendChild(plusIcon)

    const removeButton = document.createElement('div')
    removeButton.classList.add('remove')

    const removeIcon = document.createElement('i')
    removeIcon.classList.add('bi', 'bi-x-lg')
    removeIcon.title = 'Excluir coluna'
    removeButton.appendChild(removeIcon)

    columnControl.appendChild(plusButton)
    columnControl.appendChild(removeButton)

    columnHeader.appendChild(columnTitle)
    columnHeader.appendChild(columnControl)

    const cardCounter = document.createElement('div')
    cardCounter.classList.add('card-counter')

    const counterTitle = document.createElement('span')
    counterTitle.classList.add('card-counter-title')
    counterTitle.textContent = 'Tarefas: '

    const counterValue = document.createElement('span')
    counterValue.classList.add('card-counter-value')
    counterValue.innerHTML = `1`

    cardCounter.appendChild(counterTitle)
    cardCounter.appendChild(counterValue)

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    column.appendChild(columnHeader)
    column.appendChild(cardCounter)
    column.appendChild(cardContainer)

    plusButton.addEventListener('click', createCard)
    plusButton.addEventListener('click', updateCardCounter)

    removeButton.addEventListener('click', removeColumn)
    removeButton.addEventListener('click', updateColumnCounter)

    columnTitle.addEventListener('dblclick', editColumnTitle)
    
    cardContainer.append(newCard())

    new Sortable(cardContainer, options)
    cardContainer.addEventListener('change', updateCardCounter)

    return column
}

const createColumn=()=>{
    const columnsContainer=document.querySelector('.columns-container')
    columnsContainer.append(newColumn())
}

const removeColumn=({target})=>{
    console.log(target)
    const buttonContainer=target.parentElement
    const columnControl=buttonContainer.parentElement
    const columnHeader=columnControl.parentElement
    const column=columnHeader.parentElement
    column.remove()
}

const editColumnTitle=({target})=>{
    target.contentEditable='true'
    target.focus()
    target.addEventListener('focusout', ()=>{
        target.contentEditable='false'
    })
}

createColumnButton.addEventListener('click', createColumn)
createColumnButton.addEventListener('click', updateColumnCounter)

removeColumnButton.forEach((item)=>{
    item.addEventListener('click', removeColumn)
    item.addEventListener('click', updateColumnCounter)
})

columnTitle.forEach((title)=>{
    title.addEventListener('dblclick', editColumnTitle)
})