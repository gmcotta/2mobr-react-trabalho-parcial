import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    column-gap: 0.8rem;
    row-gap: 2.4rem;
`;

export const ListItemBullet = styled.span`
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-top: 1.3rem;
`;

export const ListItemTitle = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
`;