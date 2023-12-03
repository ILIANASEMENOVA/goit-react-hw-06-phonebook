import styled from 'styled-components';

const ContactsListStyled = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 400px;
  button {
    cursor: pointer;
    background-color: #ff69b4;
    color: white;
    padding: 4px 8px;
    font: inherit;

    border-radius: 4px 8px;
    border: 3px solid #ff1493;
  }
  li {
    background-color: #ffffff;
    border: 3px solid #ff69b4;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
`;

export default ContactsListStyled;
