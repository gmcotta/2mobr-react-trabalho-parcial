import * as C from "./content";
import * as S from "./styles";

function Hobbies() {
  return (
    <S.Hobbies id={C.hobbiesContent.id}>
      <S.Wrapper>
        <S.Title>{C.hobbiesContent.title}</S.Title>
        <S.HobbiesList>
          {C.hobbiesContent.hobbies.map((hobby, index) => (
            <S.HobbiesListItem key={index}>
              <S.ListItemBullet></S.ListItemBullet>
              <div>
                <S.Hobby>{hobby}</S.Hobby>
              </div>
            </S.HobbiesListItem>
          ))}
        </S.HobbiesList>
        <S.YoutubeIframe 
          src={`https://www.youtube.com/embed/${C.hobbiesContent.youtubeVideo.id}`} 
          title="YouTube video player" 
          allow="autoplay" 
          allowFullScreen
        ></S.YoutubeIframe>
      </S.Wrapper>
    </S.Hobbies>
  );
}

export { Hobbies };
