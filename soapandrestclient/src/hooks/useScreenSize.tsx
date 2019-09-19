import React, { useState } from "react";

export default (initialState: number, type: string): number => {
  const [screenSize, setScreenSize] = useState<number>(initialState);
  React.useEffect(() => {
    const resizeListener = () => {
      if (type === "width") {
        setScreenSize(window.innerWidth);
      }
      if (type === "height") {
        setScreenSize(window.innerHeight);
      }
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [screenSize]);

  return screenSize;
};
