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

                        
                        

                        
                            
                                
                            
                            
                                
                            
                        

                    