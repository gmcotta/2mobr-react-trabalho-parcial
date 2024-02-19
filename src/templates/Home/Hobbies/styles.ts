import styled, { css } from "styled-components";
import { Wrapper as _Wrapper } from "../../../components";

export const Hobbies = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Wrapper = styled(_Wrapper)`
    display: flex;
    max-width: 80rem;
    flex-direction: column;
    padding-top: 12rem;
    align-items: start;
    text-align: left;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            padding-top: 8rem;
        }
    `}
`;

export const Title = styled.h2`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
`;

export const HobbiesList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
`;

export const HobbiesListItem = styled.li`
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    column-gap: 0.8rem;
    row-gap: 2.4rem;
`;

export const ListItemBullet = styled.span`
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin-top: 1rem;
`;

export const Hobby = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
`;
