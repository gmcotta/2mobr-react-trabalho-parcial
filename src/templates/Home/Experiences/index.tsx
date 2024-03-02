import * as C from "./content";
import * as S from "./styles";

function Experiences() {
  return (
    <S.Experiences id={C.experiencesContent.id}>
      <S.ExperiencesWrapper>
        <S.Title>{C.experiencesContent.title}</S.Title>
        <S.ExperiencesList>
          {C.experiencesContent.experiences.map((experience, index) => (
            <S.ExperiencesListItem key={index}>
              <S.ExperiencesListItemBullet></S.ExperiencesListItemBullet>
              <div>
                <S.Company>{experience.company}</S.Company>
                <S.Role>{experience.role}</S.Role>
                <S.Period>{experience.period}</S.Period>
              </div>
            </S.ExperiencesListItem>
          ))}
        </S.ExperiencesList>
      </S.ExperiencesWrapper>
    </S.Experiences>
  );
}

export { Experiences };
