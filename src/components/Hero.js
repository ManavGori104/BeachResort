// import React from "react";

// export default function Hero({ children, hero }) {
//   return <header className={hero}>{children}</header>;
// }

// Hero.defaultProps = {
//   hero: "defaultHero",
// };
import React from "react";

const Hero = ({ children, hero = "defaultHero" }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
