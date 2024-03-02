import styled, { css } from "styled-components";

import { Wrapper as _Wrapper } from "../../../components";

export const Navbar = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.6rem 0;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    
`;

export const Wrapper = styled(_Wrapper)`
    justify-content: space-between;
    align-items: center;
    position: relative;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            padding: 0 4rem;
        }

        @media (max-width: ${theme.breakpoints.sm}px) {
            padding: 0 2rem;
        }
    `}
`;

export const Logo = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.2rem;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.default};
    z-index: 2;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            font-size: 2rem;
        }
    `}

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            font-size: 1.6rem;
        }
    `}
`;

export const LinkContainer = styled.ul`
    list-style: none;
    display: flex;
    column-gap: 1.6rem;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            column-gap: 1.2rem;
        }
    `}

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            display: none;
        }
    `}
`;

export const LinkItem = styled.a`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1.6rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            font-size: 1.2rem;
        }
    `}
`;
