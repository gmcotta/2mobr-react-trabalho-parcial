import styled from "styled-components";

export const Link = styled.a`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
`;