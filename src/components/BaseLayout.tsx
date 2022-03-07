import { memo } from "react";
import Main from "./Main";
import "../assets/fonts/Ubuntu/Ubuntu-Regular.ttf";

const BaseLayout = memo(() => {
  return (
    <>
      <div className="baseLayout-main-wrapper">
        <Main />
      </div>
    </>
  );
});

export default BaseLayout;
