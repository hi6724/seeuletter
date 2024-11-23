import React from 'react';

function LetterSvg({ color }: { color: string }) {
  return (
    <svg width="320" height="241" viewBox="0 0 320 241" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 226.526V67.4285C0 67.4285 20.8074 55.2728 34.5 48.1517C79.2954 24.8551 104.017 0.913931 154.5 0.0257427C204.208 -0.848795 229.83 20.7044 274.5 42.5257C292.701 51.4167 320 67.4285 320 67.4285V226.526H0Z"
        fill="#C0561A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M320 96.9392C319.124 96.7621 318.191 96.8785 317.357 97.3135L165 176.807V240.098H320V96.9392Z"
        fill="#D9621F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 96.9392C0.876251 96.7621 1.80927 96.8785 2.64301 97.3135L155 176.807V240.098H0V96.9392Z"
        fill="#D9621F"
      />
      <path
        d="M160.5 239.526H3L41.75 208.104L80.5 176.681L149.565 132.876C154.727 129.602 161.303 129.555 166.511 132.755L238 176.681L278 208.104L318 239.526H160.5Z"
        fill="#D9621F"
      />
      <path
        d="M30 214.653L72.0826 188.327L114.165 162M298 222L250.749 193.224L203.499 164.449"
        stroke="#C0561A"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default LetterSvg;
