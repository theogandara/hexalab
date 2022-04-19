import styled from "styled-components";

export const InputBase = styled.div`
    background-color: #F2F6FF;
    height: 45px;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

    border: solid 2px red;
`

export const Input = styled.input`
    background-color: transparent;
    border: none;
    height: 70%;
    width: 80%;
`

export const Span = styled.span`
    font-weight: 600;
    font-family: sans-serif;
`