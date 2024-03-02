import { PropsWithChildren, memo } from "react";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import { theme } from "../../styles/theme";
import { GlobalStyles } from "../../styles/globalStyles";

const StyledComponentsWrapper = memo(({ children }: PropsWithChildren) => {
    function shouldForwardProp(prop: string, elementToBeCreated: unknown): boolean {
        if (typeof elementToBeCreated === "string") {
          return emotionIsPropValid(prop)
        }
        return true
      }

      return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
      </StyleSheetManager>
    );
});

export { StyledComponentsWrapper };
