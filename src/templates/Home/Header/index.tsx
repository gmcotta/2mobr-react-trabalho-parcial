import { Wrapper } from "../../../components";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <Wrapper>
        <S.LeftContainer>
          <S.Title>
            Olá, eu sou <span>Gustavo</span>
          </S.Title>
          <S.Subtitle>Desenvolvedor front-end</S.Subtitle>
          <S.LinkContainer>
            <S.EmailLink href="mailto:gmcotta34@gmail.com">
              Entre em contato
            </S.EmailLink>
            <S.AboutLink href="#sobre">Sobre mim</S.AboutLink>
          </S.LinkContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Image
            src="https://avatars.githubusercontent.com/u/46160812?v=4"
            alt=""
          />
        </S.RightContainer>
      </Wrapper>
    </S.Header>
  );
}

export { Header };
