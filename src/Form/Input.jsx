import React from 'react'
import styled from 'styled-components';

const MyInput = styled.input`
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 300px;
border: none;
border-bottom: 1px solid #757575;
padding:20px
:focus {
    outline: none;
}
padding-left:40px

`;

const Inputcontainer = styled.div`
display: flex;
margin-bottom: 10px;
position: relative;
`;
const Icon = styled.img`
width: 30px;
height: 30px;
position: absolute;
`;

function Input({icon, placeholder}) {
    return (
        <Inputcontainer>
            <Icon src={icon} alt="icon" />
            <MyInput type="text"  placeholder={placeholder} />
        </Inputcontainer>
    )
}

export default Input
