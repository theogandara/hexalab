import styled from "styled-components";

export const InputBase = styled.div`
    background-color: #F2F6FF;
    height: 40px;
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
`

export const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 70%;
    width: 80%;
    text-align: end;
    color: #303030;

    ::placeholder {
        color: #b1b9cc;
        margin-right: 5px;
   }
`

export const Span = styled.span`
    font-size: 15px;
    font-weight: 600;
    font-family: sans-serif;
`