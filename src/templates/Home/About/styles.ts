import styled, { css } from "styled-components";

import { SectionTitle, Wrapper } from "../../../components";

export const About = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const AboutWrapper = styled(Wrapper)`
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

export const AboutMe = styled(SectionTitle)``;

export const Text = styled.p`
    font-size: 3.2rem;

    & strong {
        color: ${({ theme }) => theme.colors.primary};
    }

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            font-size: 2.4rem;
        }
    `}

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            font-size: 2rem;
        }
    `}
`;

export const AddressText = styled.p`
    font-size: 2.4rem;
    margin-top: 3.2rem;
    font-weight: 600;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.md}px) {
            font-size: 2rem;
        }
    `}
`;

export const Description = styled.p`
    font-size: 1.6rem;
    margin-top: 3.2rem;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.sm}px) {
            font-size: 1.4rem;
        }
    `}
`;

export const SocialMediaTitle = styled.p`
    margin-top: 3.2rem;
    font-size: 1.6rem;
`;

export const SocialMediaLinkContainer = styled.div`
    margin-top: 2.4rem;
    display: flex;
    column-gap: 2.4rem;
`;
