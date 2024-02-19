import { Menu } from "../../../components";
import * as C from "./const";
import * as S from "./styles";

function Navbar() {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Logo href="/">Gustavo Matias</S.Logo>
        <S.LinkContainer>
          {C.links.map((link, index) => (
            <li key={index}>
              <S.LinkItem href={link.href}>{link.name}</S.LinkItem>
            </li>
          ))}
        </S.LinkContainer>
        <Menu links={C.links} />
      </S.Wrapper>
    </S.Navbar>
  );
}

export { Navbar };
