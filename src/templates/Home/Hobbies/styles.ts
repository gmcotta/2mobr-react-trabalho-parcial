import styled, { css } from "styled-components";

import { List, ListItem, ListItemBullet, ListItemTitle, SectionTitle, Wrapper } from "../../../components";

export const Hobbies = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    padding-bottom: 10rem;
`;

export const HobbiesWrapper = styled(Wrapper)`
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

export const HobbiesList = styled(List)``;

export const HobbiesListItem = styled(ListItem)`
    color: ${({ theme }) => theme.colors.black};
`;

export const HobbiesListItemBullet = styled(ListItemBullet)`
    background-color: ${({ theme }) => theme.colors.black};
`;

export const Hobby = styled(ListItemTitle)``;

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