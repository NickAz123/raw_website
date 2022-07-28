import React from "react";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Article5 from "./Article5";

function Issue1({ articleid }) {
  console.log("this is the articleid", articleid);
  return (
    <div>
      {articleid == 1 && <Article1 />}
      {articleid == 2 && <Article2 />}
      {articleid == 3 && <Article3 />}
      {articleid == 4 && <Article4 />}
      {articleid == 5 && <Article5 />}

    </div>
  );
}

export default Issue1;
