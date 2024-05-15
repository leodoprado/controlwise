import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #23242F;
    border-bottom: 1px outset rgb(255, 255, 255);
`

export const LogoHeader = styled.div `
    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    img {
        width:40px;
        height:40px;
    }

    h1 {
        padding-left: 0.1rem;
        color: white;
        font-weight: 700;
        font-size: 1rem;
    }
`

export const NavigationHeader = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;

    a {
        gap: 1rem;
        color: #ffffff;
        text-decoration: none;
        font-weight: 400;
        font-size: 0.9rem;
    }

    a:hover {
        transition: 0.6s;
        color: #01ffd3;
    }
`
