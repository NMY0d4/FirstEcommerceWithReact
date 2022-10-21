import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 18rem;
    width: auto;
    height: 5rem;
    letter-spacing: 0.5px;
    line-height: 5rem;
    padding: 0 3rem 0 3rem;
    font-size: 1.4rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;