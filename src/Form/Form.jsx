import React from 'react'
import styled from 'styled-components';
import Input from './Input'

import profile from './user.png'
import padlock from './padlock.png'
import email from './email.png'


const FormContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 50px;
    border-radius: 15px;
    align-items: center;
    
`;
const Terms = styled.div`
display: inline-flex;
cursor: pointer;
margin-top: 10px;
position: relative;
`;
const CostumCheckbox = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid #757575;
    border-radius: 3px;  
`;
const CreateButton = styled.button`
padding : 20px 20px;
background-color: #00afaf;
border-radius: 30px;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
width: 300px;
margin-top: 10px;
background: #6441A5;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
const InputContainer= styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;
 `;

function Form(props) {
  return (
    <FormContainer>
      <div>
        <h2>Sign Up</h2>
      </div>
      <InputContainer className="input-container">
        <Input icon={profile} placeholder="Name" type="text" />
        <Input icon={email} placeholder="email" type="email" />
        <Input icon={padlock} placeholder="password" type="password" />

      </InputContainer>
      <Terms>
        <CostumCheckbox type="checkbox" name="checkbox" id="checkbox" />
        <span>I read and i agree to <span>Terms and conditions</span></span>
      </Terms>
      <CreateButton>Create Account</CreateButton>
      <div className="to-login">
        <p>Already have an account ? <a href="#">Sign in</a> </p>
      </div>

    </FormContainer>
  )
}

export default Form
