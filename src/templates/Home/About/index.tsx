import { Button } from "../../../components";
import * as S from "./styles";

function About() {
  return (
    <S.About id="sobre">
      <S.Wrapper>
        <S.AboutMe>Sobre mim</S.AboutMe>
        <S.Text>
          Eu sou <strong>Gustavo Matias</strong>
        </S.Text>
        <S.Text>
          Desenvolvedor <strong>front-end</strong>
        </S.Text>
        <S.AddressText>Guarulhos, SP</S.AddressText>
        <S.Description>
          Atuo na área de tecnologia da informação desde 2019, e como
          desenvolvedor front-end desde 2020, com foco em ReactJS.
        </S.Description>
        <S.SocialMediaTitle>Minhas redes:</S.SocialMediaTitle>
        <S.SocialMediaButtonContainer>
          <Button>LinkedIn</Button>
          <Button>GitHub</Button>
        </S.SocialMediaButtonContainer>
      </S.Wrapper>
    </S.About>
  );
}

export { About };
