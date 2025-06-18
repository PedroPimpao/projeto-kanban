const updateColumnCounter=()=>{
    const columns=[...document.querySelectorAll(".column")]
    const columnsCounter=document.querySelector('.column-counter')

    let countColumn=columns.length
    columnsCounter.innerHTML=`${countColumn}`
    return countColumn
}
updateColumnCounter()

const updateCardCounter=()=>{
    const columns=document.querySelectorAll('.column')
    columns.forEach((item)=>{
        const cardCounter=item.querySelector('.card-counter-value')
        const cards=[...item.querySelectorAll('.card')]
        let cardCount=cards.length
        cardCounter.innerHTML=`${cardCount}`
        return cardCount
    })
}
updateCardCounter()

export{ updateCardCounter, updateColumnCounter }