import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";
import WeAreSpeakingLouderMain from "./components/weAreSpeakingLouderSection/WeAreSpeakingLouderMain";

const App = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 100 });

    setTimeout(() => {
      setIsLoading(false);
    }, 6500);

    setTimeout(() => {
      setShowPage(true);
    }, 5000);
  }, [showPage]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {showPage && (
        <>
          <Hero></Hero>
          <WeAreSpeakingLouderMain></WeAreSpeakingLouderMain>
        </>
      )}
    </div>
  );
};

export default App;
