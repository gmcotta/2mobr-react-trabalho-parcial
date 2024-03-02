import { memo } from "react";
import * as S from "./styles";
import { LinkProps } from "./link";

const Link = memo(({ children, ...props }: LinkProps) => {
  return <S.Link {...props}>{children}</S.Link>;
});

export { Link };
