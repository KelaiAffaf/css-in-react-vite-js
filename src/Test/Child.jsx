import { array } from 'prop-types'
import React from 'react'





function child(props) {
    const notPropfunction =()=>{
        props.handelevent(props.name);
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <button onClick={notPropfunction}>click</button>
        </div>
    )
}

child.defaultProps = {
    name: 'youcef',
    age: '21'
}

export default child
