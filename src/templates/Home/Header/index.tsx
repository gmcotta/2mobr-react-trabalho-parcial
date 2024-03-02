import { Wrapper } from "../../../components";
import * as C from "./const";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <Wrapper>
        <S.LeftContainer>
          <S.Title>{C.headerTexts.title}</S.Title>
          <S.Subtitle>{C.headerTexts.subtitle}</S.Subtitle>
          <S.LinkContainer>
            <S.EmailLink href={C.headerTexts.emailLink.href}>
              {C.headerTexts.emailLink.text}
            </S.EmailLink>
            <S.AboutLink href={C.headerTexts.aboutLink.href}>
              {C.headerTexts.aboutLink.text}
            </S.AboutLink>
          </S.LinkContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Image
            src={C.headerTexts.image.src}
            alt={C.headerTexts.image.alt}
          />
        </S.RightContainer>
      </Wrapper>
    </S.Header>
  );
}

export { Header };
