import React from "react";
import Issue1 from "./Issue1/Issue1";

function Season1(issue, articleid) {
  return <div>{(issue = "issue 1" && <Issue1 articleid={articleid} />)}</div>;
}

export default Season1;
