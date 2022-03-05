import { memo } from "react";
import Main from "./Main";

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
