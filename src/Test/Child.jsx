import { array } from 'prop-types'
import React from 'react'





function child({name,age, handelevent}) {
    let lastName="kelai"
    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={handelevent}>click</button>
        </div>
    )
}

child.defaultProps = {
    name: 'youcef',
    age: '21'
}

export default child
