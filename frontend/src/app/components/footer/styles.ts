import styled from "styled-components";
import colors from "../../colors";

export const ContentFooter = styled.footer`
    font-size: 1em;
    background: #23242F;
    padding: 1rem;
    text-align: center;
    color: white;
    
    a {
        color: ${colors.branco};
        text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
`