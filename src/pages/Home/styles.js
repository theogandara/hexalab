import styled from "styled-components";

export const PageContent = styled.div`

@media(min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

`

export const Display = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: auto;

  @media(min-width: 1024px) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 80%;
    background-color: #fff;
    border-radius: 8px;
    height: 400px;
    max-width: 1000px;
  }
`;

export const Titles = styled.label`
    width: 80%;
    font-size: 14px;
    margin-left: 15px;
    margin: 15px 0px 5px 10px ;
    font-family: 'Mulish', sans-serif;

`

export const Main = styled.div`
    width: 50%;
    min-height: 350px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    max-width: 450px;
    min-width: 300px;
`;

export const Results = styled.div`
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    max-width: 400px;

    @media(min-width: 1024px) {
      background-color: #F2F6FF;
      min-height: 200px;

  }
`;

export const ButtonCase = styled.div`
    width: 100%;
    text-align: center;
`

export const Header = styled.h1`
width: 100%;
    font-size: 25px;
    text-align: center;
`