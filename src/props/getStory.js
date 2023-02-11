import React, { useEffect, useState } from 'react'
import Status from '../components/status'
import img from '../image/1.jpg'
import { GoDiffAdded } from 'react-icons/go'
import { Link } from 'react-router-dom';
function GetStory() {
    const url = 'https://testafriatemarket.000webhostapp.com/resources/img/default.jpg'
    const storyList = [
        {
            id: 1,
            name: 'Twariqabdu',
            img: url
        },
        {
            id: 2,
            name: 'Shema',
            img: url
        },
        {
            id: 3,
            name: 'shemsa',
            img: url
        },
        {
            id: 4,
            name: 'shemsa',
            img: url
        },
        {
            id: 5,
            name: 'shemsa',
            img: url
        }
    ]
    const stories = storyList.map(story => <Status key={story.id} story={story} />)
    // console.log(storyList.id);
    return (
        <div className='story-main'>
            <div className='story-holder'>
                <div className='story'>
                    <div><img src={img} /></div>
                    <Link className='me' to='poststory'>
                        <GoDiffAdded />
                    </Link>
                </div>
            </div>
            {stories}
        </div>
    )
}

export default GetStory