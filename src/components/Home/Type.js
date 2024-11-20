import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Website Developer",
          "MERN Stack Developer",
          "Technology lover",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
