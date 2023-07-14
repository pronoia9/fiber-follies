import { createGlobalStyle } from 'styled-components';

import { orelo, roboto } from '../assets';

export const GlobalStyles = createGlobalStyle`
  ${'' /* @font-face { font-family: 'Roboto'; src: ${`url(${roboto})`}; } */}
  ${'' /* @font-face { font-family: 'Orelo'; src: ${`url(${orelo})`}; } */}
  @font-face { font-family: 'Roboto'; src: url('/src/assets/fonts/Roboto_Flex/RobotoFlex-VariableFont.ttf') }
  @font-face { font-family: 'Orelo'; src: url('/src/assets/fonts/Orelo SemiWide Medium/Orelo SemiWide Medium.ttf') }

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
`;
