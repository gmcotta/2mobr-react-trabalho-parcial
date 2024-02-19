import { memo } from "react";
import * as S from "./styles";
import { ButtonProps } from "./button";

const Button = memo(({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
});

export { Button };
