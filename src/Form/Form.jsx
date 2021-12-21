import React from 'react'
import styled from 'styled-components';
import Input from './Input'

const FormContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;
const Terms = styled.div`
display: inline-flex;
cursor: pointer;
position: relative;
`;
const CostumCheckbox = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid #757575;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    &::checked {
        background-color: #00afaf;
    }
    ::after {
       background-color: #00afaf;
    }
`;
const CreateButton = styled.button`
padding : 20px 40px;

`;
const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;
function Form(props) {
    return (
        <FormContainer>
            <div>
                <h2>Sign Up</h2>
            </div>
            <div className="input-container">
                <Input placeholder="Name" />
                <Input placeholder="password" />
                <Input placeholder="password" />
            </div>
            <Terms>
                <CostumCheckbox type="checkbox" name="checkbox" id="checkbox" />
                <p>I read and i agree to <span>Terms and conditions</span></p>
            </Terms>
            <CreateButton>Create Account</CreateButton>
            <div className="to-login">
                <p>Already have an account ? <a href="#">Sign in</a> </p>
            </div>
            <Styled
                onClick={() => props.onChange(!props.checked)}
            >
                <input
                    type="checkbox"
                    checked={props.checked}
                />
                <label>{props.label}</label>
            </Styled>
        </FormContainer>
    )
}

export default Form
