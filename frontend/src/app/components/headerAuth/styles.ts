import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background: #23242F;
    box-shadow: 0px 0px 8px gray;
`

export const LogoHeader = styled.div `
    a { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        h1:hover {
            transition: 0.6s;
            color: #01ffd3;
        }
    }

    img {
        width:50px;
        height:50px;
    }

    h1 {
        padding-left: 0.1rem;
        color: white;
        font-weight: 700;
    }
`

export const NavigationHeader = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3.5rem;
    gap: 5rem;

    a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 400;
        font-size: 0.9rem;
        display: flex;
        gap: 5px;
    }

    a:hover {
        transition: 0.6s;
        color: #01ffd3;
    }
`

export const LogoutHeader = styled.div`
    a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 400;
        font-size: 0.9rem;
        display: flex;
        gap: 5px;
    }

    a:hover {
        transition: 0.6s;
        color: #01ffd3;
    }    
`
