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

const body=document.getElementsByTagName('body')[0]
const columnsContainer=document.querySelector('.columns-container')
const cards=document.querySelectorAll('.card')



const dragMobile=()=>{
    if(window.innerWidth <= 600){
        columnsContainer.classList.add('draggingMobile')
    }else{
        columnsContainer.classList.remove('draggingMobile')
    }

}

cards.forEach((card)=>{
    card.addEventListener('dragstart', dragMobile)
})
cards.forEach((card)=>{
    card.addEventListener('dragend', ()=>{
        columnsContainer.classList.remove('draggingMobile')
        // updateCardCounter()
    })
})
// window.addEventListener('resize', dragMobile)

                        
                        

                        
                            
                                
                            
                            
                                
                            
                        

                    