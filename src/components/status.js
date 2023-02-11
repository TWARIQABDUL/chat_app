import React from 'react'

function Status({story}) {
  return (
    <div className='story-holder'>
        <div className='story'>
            <div><img src={story.img}/></div>
            <h1> {story.name}</h1>
        </div>
    </div>
  )
}

export default Status