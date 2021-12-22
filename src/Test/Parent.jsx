import React from 'react'
import Child from './Child'


 const f1=()=>{
        console.log('====================================');
        console.log('clicked button');
        console.log('====================================');
    }
function Parent() {
    return (
        <div>
            <Child  name="Afaf" age="26" handelevent={f1}/>
            <Child  name="Afaf" handelevent={f1}/>
            <Child handelevent={f1}/>
        </div>
    )
}



export default Parent
