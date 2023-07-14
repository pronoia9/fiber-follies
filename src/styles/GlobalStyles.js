import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain) */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }

  @font-face { font-family: 'Roboto'; src: url('/src/assets/fonts/Roboto_Flex/RobotoFlex-VariableFont.ttf') }
  @font-face { font-family: 'Orelo'; src: url('/src/assets/fonts/Orelo SemiWide Medium/Orelo SemiWide Medium.ttf') }
  @font-face { font-family: 'Inter'; src: url('/src/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf'); }
  @font-face {
    font-family: 'Ayer Poster';
    src: local('Ayer Poster Medium'), local('Ayer-Poster-Medium'), url('/src/assets/fonts/AyerPoster/AyerPoster-Medium.woff2') format('woff2'), url('/src/assets/fonts/AyerPoster/AyerPoster-Medium.woff') format('woff'),
      url('/src/assets/fonts/AyerPoster/AyerPoster-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  :root {
    --c-bg-primary: ${({ theme }) => theme.bgPrimary};
    --c-bg-secondary: ${({ theme }) => theme.bgSecondary};
    --c-bg-tertiary: ${({ theme }) => theme.bgTertiary};
    --c-font-primary: ${({ theme }) => theme.fontPrimary};
    --c-accent-primary: ${({ theme }) => theme.accentPrimary};
    --c-cursor: ${({ theme }) => theme.cursor};
    --f-primary: 'Roboto', serif;
    --f-secondary: 'Orelo', serif;
  }

  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  html {
    background: var(--c-background);
    transition: background 0.5s ease-in-out;
  }

  body, #root {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    color: var(--c-font-primary);
    overflow-x: hidden;
    transition: color 0.5s ease-in-out;
  }
    svg {
      fill: var(--c-font-primary);
      opacity: 0.75;
    }

  #root {
    font-family: var(--f-primary);
    background: linear-gradient(135deg, var(--c-bg-primary), var(--c-accent-primary));
    transition: background 0.5s ease-in-out;

    .cursor {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      --size: 40px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      border: 1px solid var(--c-cursor);
      margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
      transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
      display: none;
      pointer-events: none;

      @media (pointer: fine) {
        display: block;
      }
    }

    .cursor2 {
      --size: 2px;
      transition-duration: 0.7s;
    }
  }

  canvas {
    width: 100%;
    min-height: 100vw;
    height: 100%;
    min-height: 100vh;
    opacity: 0;
    animation: fade-in 1s ease 0.3s forwards;
  }
`;
