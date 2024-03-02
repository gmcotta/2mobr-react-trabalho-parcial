import { memo } from "react";

import * as C from './content';
import { MenuProps } from "./menu";
import * as S from "./styles";
import { useMenu } from "./hooks/useMenu";

const Menu = memo(({ links }: MenuProps) => {
  const { isActive, handleMenuActive, handleMenuLinkClick } = useMenu();

  return (
    <>
      <S.MenuButton
        type="button"
        onClick={handleMenuActive}
        isActive={isActive}
        title={isActive ? C.menuTexts.closeMenu : C.menuTexts.openMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </S.MenuButton>
      <S.Menu isActive={isActive}>
        <S.MenuContainer>
          {links.map((link, index) => (
            <li key={index}>
              <S.MenuLinkItem href={link.href} onClick={handleMenuLinkClick}>
                {link.name}
              </S.MenuLinkItem>
            </li>
          ))}
        </S.MenuContainer>
      </S.Menu>
    </>
  );
});

export { Menu };
