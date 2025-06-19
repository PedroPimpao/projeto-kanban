import { updateCardCounter } from "./counters.js"

export const options = {
    group: 'kanban',
    animation: 150,
    scroll: true,
    scrollSensitivity: 120,
    scrollSpeed: 8,
    touchStartThreshold: 10
}

const cardContainer=document.querySelectorAll('.card-container')
cardContainer.forEach((container)=>{
    new Sortable(container, options)
    container.addEventListener('change', updateCardCounter)
})

const cards=document.querySelectorAll('.card')

export const dragMobile=()=>{
    const columns=document.querySelectorAll('.column')
    if(window.innerWidth <= 600){
        columns.forEach((column)=>{
            column.classList.add('draggingMobile')
        })
    }else{
        columns.forEach((column)=>{
            column.classList.remove('draggingMobile')
        })
    }
}

export const dragMobileEnd=()=>{
    const columns=document.querySelectorAll('.column')
    columns.forEach((column)=>{
        column.classList.remove('draggingMobile')
    })
}

cards.forEach((card)=>{
    card.addEventListener('dragstart', dragMobile)
})

cards.forEach((card)=>{
    card.addEventListener('dragend', dragMobileEnd)
})

                        
                        

                        
                            
                                
                            
                            
                                
                            
                        

                    