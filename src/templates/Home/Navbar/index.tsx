import { Menu } from "../../../components";
import * as C from "./content";
import * as S from "./styles";

function Navbar() {
  return (
    <S.Navbar>
      <S.NavbarWrapper>
        <S.Logo href={C.navbarContent.logo.href}>
          {C.navbarContent.logo.text}
        </S.Logo>
        <S.LinkContainer>
          {C.navbarContent.links.map((link, index) => (
            <li key={index}>
              <S.LinkItem href={link.href}>{link.name}</S.LinkItem>
            </li>
          ))}
        </S.LinkContainer>
        <Menu links={C.navbarContent.links} />
      </S.NavbarWrapper>
    </S.Navbar>
  );
}

export { Navbar };
