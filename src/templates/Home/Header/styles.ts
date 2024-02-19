import styled, { css } from "styled-components";

export const Header = styled.header`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const LeftContainer = styled.div`
    width: 50%;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            width: 100%;
            text-align: center;
        }
    `}
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.white};

    span {
        font-size: 7.2rem;
        line-height: 7.2rem;
        font-weight: 600;
        display: block;
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            font-size: 1.2rem;

            span {
                font-size: 6.4rem;
                line-height: 6.4rem; 
            }
        }
    `}
`;

export const Subtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            font-size: 1.6rem;
        }
    `}
`;

export const LinkContainer = styled.div`
    display: flex;
    column-gap: 0.8rem;
    margin-top: 2.4rem;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            justify-content: center;
        }
    `}
`;

export const EmailLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const AboutLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 4rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1.2rem;
`;

export const RightContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            display: none;
        }
    `}
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 40rem;  
`;
