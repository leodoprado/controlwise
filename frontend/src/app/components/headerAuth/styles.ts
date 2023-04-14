import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    align-items: center;
    background: #23242F;
    font-family: 'Comfortaa', sans-serif;
    box-shadow: 0px 0px 8px gray;
`

export const NavigationHeader = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 800;
        font-size: 0.9rem;
    }

    a:hover {
        transition: 0.6s;
        color: #0084bc;
    }
`
