import styled, { css } from "styled-components";

export const Menu = styled.div<{ isActive: boolean }>`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    padding: 8rem 2rem;
    position: fixed;
    top: 0;
    left: ${({ isActive }) => (isActive ? '0%' : '100%')};
    transition: left ${({ theme }) => theme.transitions.default};
    z-index: 1;

    ${({ theme }) => css`
        @media (min-width: ${theme.breakpoints.sm + 1}px) {
            display: none;
        }
    `}
`;

export const MenuContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
`;

export const MenuLinkItem = styled.a`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 3.2rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const MenuButton = styled.button<{ isActive: boolean }>`
    border: none;
    width: 3.2rem;
    height: 3.2rem;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    z-index: 2;

    &:hover > span {
        background-color: ${({ theme }) => theme.colors.primary}; 
    }

    & > span {
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.white};
        transition: background-color ${({ theme }) => theme.transitions.default}, opacity ${({ theme }) => theme.transitions.default};
    }

    & > span:nth-child(1) {
        top: 0.8rem;
    }

    & > span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
    }

    & > span:nth-child(3) {
        bottom: 0.8rem;
    }

    & > span:nth-child(4) {
        transform: rotate(45deg);
    }

    & > span:nth-child(5) {
        transform: rotate(-45deg);
    }



    ${({ theme, isActive }) => css`
        & > span:nth-child(1),
        & > span:nth-child(2),
        & > span:nth-child(3) {
            opacity: ${isActive ? '0' : '1'};
        }

        & > span:nth-child(4),
        & > span:nth-child(5) {
            opacity: ${isActive ? '1' : '0'};
        }

        @media (min-width: ${theme.breakpoints.sm + 1}px) {
            display: none;
        }
    `}
`;
