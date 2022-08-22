import React from "react";
import Issue1 from "./Issue1/Issue1";

function Season1({ issue, articleid }) {
  return <>{(issue = "issue 1" && <Issue1 articleid={articleid} />)}</>;
}

export default Season1;
