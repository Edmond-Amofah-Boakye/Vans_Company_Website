import React from 'react'

function ItemsRender({ItemList}) {
    return (
        <div className = "allWrapper">
            <h1 className = "maltechDigital">MalTech Digital History</h1>
            <div className="all" >
                {ItemList.map((items, itemKey)=>{
                    return(
                        <div key = {itemKey}>
                            <img src={items.image}alt="" />
                            <h1>{items.quote}</h1>
                        </div>
                    );
                })}
            </div>
            
        </div>
    )
}

export default ItemsRender
