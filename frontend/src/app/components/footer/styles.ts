import styled from "styled-components";
import colors from "../../colors";

export const ContentFooter = styled.footer`
    font-size: 0.7rem;
    background: #23242F;
    padding: 0.8rem;
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