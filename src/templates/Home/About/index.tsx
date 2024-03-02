import { Link } from "../../../components";
import * as C from "./content";
import * as S from "./styles";

function About() {
  return (
    <S.About id={C.aboutContent.id}>
      <S.Wrapper>
        <S.AboutMe>{C.aboutContent.title}</S.AboutMe>
        {C.aboutContent.texts.map((text, index) => (
          <S.Text key={index}>{text}</S.Text>
        ))}
        <S.AddressText>{C.aboutContent.address}</S.AddressText>
        <S.Description>{C.aboutContent.description}</S.Description>
        <S.SocialMediaTitle>{C.aboutContent.socialMediaTitle}</S.SocialMediaTitle>
        <S.SocialMediaButtonContainer>
          {C.aboutContent.socialMediaLinks.map((link, index) => (
            <Link key={index} href={link.href} target="_blank">
              {link.text}
            </Link>
          ))}
        </S.SocialMediaButtonContainer>
      </S.Wrapper>
    </S.About>
  );
}

export { About };
