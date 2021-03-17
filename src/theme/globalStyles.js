import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle
`:root{
  --black:#000000;
  --white:255,255,255;
  --darkblue: #2f323f;
 --darkgreyblue: 47, 50, 63;
 --mediumdarkgrey: #3a3e52;
 --greyblue: #7A7F9B;
 --lightreyblue:163, 168, 197;
 --lightblue:#CDD2F0;
 --petrolium:40, 115, 149;
 --lightpetrolium:0, 183, 195;
 --turquoise:#6FFACC;
 --radius:0.3rem
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color:var( --darkblue);
  font-size: calc(1.4rem + (26 - 14) * ((100vw - 30rem) / (1600 - 300)));
  
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

h2,h3,h4,p{
  font-family: "Roboto", sans-serif;
}
body > #root > div {
  height: 100vh;
}
`;
 
export default GlobalStyle;