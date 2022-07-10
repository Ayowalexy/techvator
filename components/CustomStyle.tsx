import { Global } from "@emotion/react";

function CustomStyle(): JSX.Element {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'Century Gothic';
            font-style: bold;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/Century-Gothic-Bold.otf') format('opentype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        @font-face {
            font-family: 'Century Gothic';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('./fonts/Century-Gothic.otf') format('opentype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

        @font-face {
            font-family: 'Montserrat';
            font-style: bold;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        @font-face {
            font-family: 'Montserrat';
            font-style: italic;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/Montserrat-Italic.ttf') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar{
            display: none !important;
          }

        `}
    />
  );
}

export default CustomStyle;
