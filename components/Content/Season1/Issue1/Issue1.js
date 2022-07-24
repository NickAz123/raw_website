import React from "react";
import Article1 from "./Article1";

function Issue1(articleid) {
  return <div>{(articleid = 1 && <Article1 />)}</div>;
}

export default Issue1;
