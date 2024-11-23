import React from 'react';

function LetterFront({ ...rest }: any) {
  return (
    <svg width="640" height="290" viewBox="0 0 320 145" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M320 0.939186C319.124 0.762121 318.191 0.878537 317.357 1.31355L165 80.8067V144.098H320V0.939186Z"
        fill="#D9621F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.939186C0.876251 0.762121 1.80927 0.878537 2.64301 1.31355L155 80.8067V144.098H0V0.939186Z"
        fill="#D9621F"
      />
      <path
        d="M160.5 143.526H3L41.75 112.104L80.5 80.6813L149.565 36.876C154.727 33.602 161.303 33.5551 166.511 36.7551L238 80.6813L278 112.104L318 143.526H160.5Z"
        fill="#D9621F"
      />
      <path
        d="M30 118.653L72.0826 92.3265L114.165 66M298 126L250.749 97.2245L203.499 68.449"
        stroke="#C0561A"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default LetterFront;
