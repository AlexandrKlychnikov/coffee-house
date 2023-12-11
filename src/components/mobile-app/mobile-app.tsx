import * as React from "react";
import "./mobile-app.sass";
import GooglePlayButton from "./google-play";
import AppStoreButton from "./app-store";

const MobileApp = () => {
  return (
    <section className="mobile-app" id="mobile-app">
      <div className="mobile-app__offer">
        <h2 className="mobile-app__heading">
          <span className="mobile-app__accent">Download</span> our apps to start
          ordering
        </h2>
        <p className="mobile-app__description">
          Download the Resource app today and experience the comfort of ordering
          your favorite coffee from wherever you are
        </p>
        <div className="buttons-group">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
      <div className="mobile-app__screens"></div>
    </section>
  );
};
export default MobileApp;
