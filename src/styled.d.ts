// importing the original module declarations
import "styled-components";

// and extending them
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brand: {
        peru: string;
        black: string;
        white: string;
        lotion: string;
      };
      neutral: {
        tangelo: string;
        white: string;
        black: string;
      };
    };
    typography: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      overline: string;
      subTitle: string;
      body: string;
    };
    screens: {
      tablet: string;
      laptop: string;
    };
  }
}
