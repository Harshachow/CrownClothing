import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 35px;
  font-size: 12px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 25px;

  &:hover {
    color: black;
    border: 1px solid black;
    border-radius: 25px;
    background-color : white;
    padding: 0 28px 0 35px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    color: #4285f4;
    border: 1px solid black;
    border-radius: 25px;
    background-color : #white
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 25px;

  &:hover {
    color: white;
    border: 1px solid black;
    border-radius: 25px;
    background-color : black
  }
`;
