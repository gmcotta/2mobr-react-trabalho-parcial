import styled, { css } from "styled-components";
import { SectionTitle, Wrapper as _Wrapper } from "../../../components";

export const Hobbies = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    padding-bottom: 10rem;
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

export const Title = styled(SectionTitle)``;

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
`;

export const ListItemBullet = styled.span`
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    margin-top: 1.3rem;
`;

export const Hobby = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
`;

export const YoutubeIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 8rem;
    border: 0;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            margin-top: 6rem;
        }
    `}
`;