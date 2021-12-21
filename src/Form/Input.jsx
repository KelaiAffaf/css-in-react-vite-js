import React from 'react'
import styled from 'styled-components';

const MyInput = styled.input`
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 500px;
height: 40px;
border: none;
border-radius: 30px;
box-shadow: 0px 0px 10px #8267BE;
padding:20px
background-color: transparent;
:focus{
    outline: none;
}
padding-left:50px

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
left: 10px;
top: 20%;
`;

function Input({icon, placeholder,type}) {
    return (
        <Inputcontainer>
            <Icon src={icon} alt="icon" />
            <MyInput type="text" placeholder={placeholder}type={type} />
        </Inputcontainer>
    )
}

export default Input
