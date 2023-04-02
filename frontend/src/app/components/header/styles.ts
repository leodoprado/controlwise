import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #46B241;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Figtree', sans-serif;
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
        font-weight: 700;
        margin-left: 20px;
        transition-duration: 0.3s;
    }

    a:hover {
        color: #DCDCDC;
        box-shadow: 0 0 10px #46B241;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    img {
        margin-left: 110px;
    }
`
