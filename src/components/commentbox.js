import React from 'react'

function Cometbox({list}) {
    return (
        <div className='comment-box'>
            <img src={`https://testafriatemarket.000webhostapp.com/resources/img/${list.image}`}/>
            <div className='text-coment'>
                <h4>{list.name}</h4>
                <p>{list.coment}</p>
            </div>
        </div>
    )
}

export default Cometbox