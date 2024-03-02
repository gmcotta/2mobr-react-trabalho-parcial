import * as C from "./content";
import * as S from "./styles";

function Experiences() {
  return (
    <S.Experiences id={C.experiencesContent.id}>
      <S.Wrapper>
        <S.Title>{C.experiencesContent.title}</S.Title>
        <S.ExperiencesList>
          {C.experiencesContent.experiences.map((experience, index) => (
            <S.ExperiencesListItem key={index}>
              <S.ListItemBullet></S.ListItemBullet>
              <div>
                <S.Company>{experience.company}</S.Company>
                <S.Role>{experience.role}</S.Role>
                <S.Period>{experience.period}</S.Period>
              </div>
            </S.ExperiencesListItem>
          ))}
        </S.ExperiencesList>
      </S.Wrapper>
    </S.Experiences>
  );
}

export { Experiences };
