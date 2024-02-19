import * as C from "./const";
import * as S from "./styles";

function Hobbies() {
  return (
    <S.Hobbies id="hobbies">
      <S.Wrapper>
        <S.Title>Experiências</S.Title>
        <S.HobbiesList>
          {C.hobbies.map((hobby, index) => (
            <S.HobbiesListItem key={index}>
              <S.ListItemBullet></S.ListItemBullet>
              <div>
                <S.Hobby>{hobby}</S.Hobby>
              </div>
            </S.HobbiesListItem>
          ))}
        </S.HobbiesList>
      </S.Wrapper>
    </S.Hobbies>
  );
}

export { Hobbies };
