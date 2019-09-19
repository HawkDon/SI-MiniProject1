import React, { useState } from "react";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const resizeListener = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, [windowWidth]);
  return <div style={{ width: windowWidth }}>{windowWidth}</div>;
};

export default App;
