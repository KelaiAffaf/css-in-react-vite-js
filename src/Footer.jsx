import React from 'react'
import styled from 'styled-components';

const YourButton = styled.div`
  cursor: pointer;
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;
  background: transparent;
  transition: all 0.1s ease-in;
  background-Color: #afaf;
  &:hover {
    background-Color: #00afaf;
    }
`;
function Footer() {
    return (
        <div>
         <button style={YourButton}>BTN1</button>
         <YourButton>btn2</YourButton>
        </div>
    )
}

export default Footer
