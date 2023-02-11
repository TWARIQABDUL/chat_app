import React from 'react'

function UserInfo({data}) {
    console.log(data);
    return (
        <div className='infos'>
            <p>{data.name}</p>
            <p>{data.num_freind} friends</p>
        </div>
        
    )
}

export default UserInfo