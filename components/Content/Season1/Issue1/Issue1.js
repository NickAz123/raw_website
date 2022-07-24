import React from "react";
import Article1 from "./Article1";
import Article4 from "./Article4";

function Issue1({ articleid }) {
  console.log("this is the articleid", articleid);
  return (
    <div>
      {articleid == 1 && <Article1 />}
      {articleid == 4 && <Article4 />}
    </div>
  );
}

export default Issue1;
