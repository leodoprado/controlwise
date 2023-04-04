import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #23242F;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 0px 8px gray;

    nav {
        display: flex;
        margin-right: 110px;
    }
    
    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        transition-duration: 0.3s;
        flex-grow: 1;
        height: 100%;
    }

    a:hover {
        color: #DCDCDC;
        background-color: aquamarine;
    }

    img {
        margin-left: 110px;
    }
`
