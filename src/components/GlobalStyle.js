import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,'Inter', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.03em;
  color: #212121;
  
  background: linear-gradient(
          315deg,
          rgba(101, 0, 94, 0.7) 3%,
          rgba(60, 132, 206, 0.7) 38%,
          rgba(48, 238, 226, 0.7) 68%,
          rgba(255, 25, 25, 0.7) 98%
        );
        animation: gradient 15s ease infinite;
        background-size: 400% 400%;
        background-attachment: fixed;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
        100% {
          background-position: 0% 0%;
        }
      }

      .wave {
        background: rgb(255 255 255 / 25%);
        border-radius: 1000% 1000% 0 0;
        position: fixed;
        width: 200%;
        height: 12em;
        animation: wave 10s -3s linear infinite;
        transform: translate3d(0, 0, 0);
        opacity: 0.8;
        bottom: 0;
        left: 0;
        z-index: -1;
      }

      .wave:nth-of-type(2) {
        bottom: -1.25em;
        animation: wave 18s linear reverse infinite;
        opacity: 0.8;
      }

      .wave:nth-of-type(3) {
        bottom: -2.5em;
        animation: wave 20s -1s reverse infinite;
        opacity: 0.9;
      }

      @keyframes wave {
        2% {
          transform: translateX(1);
        }

        25% {
          transform: translateX(-25%);
        }

        50% {
          transform: translateX(-50%);
        }

        75% {
          transform: translateX(-25%);
        }

        100% {
          transform: translateX(1);
        }
      }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
a {
  text-decoration: none;
  display: inline-block;
}
`;
export const theme = {
  bcg: '#E8E8E8',
  black: '#021C1E',
  white: '#F1F1F1',
  accent: '#DBDBDB',
  hover: '#C3C7D0',
  border: '#686868',
  font: 'Inter',
};



