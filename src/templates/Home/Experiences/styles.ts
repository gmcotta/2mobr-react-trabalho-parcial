import styled, { css } from "styled-components";
import { 
    List, 
    ListItem,
    ListItemBullet, 
    ListItemTitle, 
    SectionTitle, 
    Wrapper } from "../../../components";

export const Experiences = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const ExperiencesWrapper = styled(Wrapper)`
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

export const Title = styled(SectionTitle)`
    color: ${({ theme }) => theme.colors.white};
`;

export const ExperiencesList = styled(List)``;

export const ExperiencesListItem = styled(ListItem)``;

export const ExperiencesListItemBullet = styled(ListItemBullet)``;

export const Company = styled(ListItemTitle)``;

export const Role = styled.p`
    font-size: 1.6rem;
`;

export const Period = styled.p`
    font-size: 1.6rem;
`;

