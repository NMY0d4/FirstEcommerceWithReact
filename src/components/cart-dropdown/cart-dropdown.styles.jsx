import styled from "styled-components";

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 28rem;
    height: 34rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 1px solid black;
    background-color: white;
    top: 9rem;
    right: 4rem;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
        font-size: 1.3rem;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 1.8rem;
    margin: 5rem auto;
`;

export const CartItems = styled.div`
    height: 24rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
