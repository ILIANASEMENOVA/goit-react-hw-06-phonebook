import { styled } from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background: rgb(235, 182, 236);
  background: linear-gradient(
    90deg,
    rgba(253, 29, 222, 1) 0%,
    rgba(235, 182, 236, 0.9809173669467787) 70%
  );
  border: 3px solid #ff69b4;
  border-radius: 4px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: #fff;
    font-size: 20px;
  }
  input {
    font: inherit;
    width: 375px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 4px;
    border: 3px solid #ff69b4;
    cursor: pointer;
  }
  button {
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 3px solid #ff69b4;
    color: #f08080;
    font-size: 20px;
  }
`;

export default FormStyle;
