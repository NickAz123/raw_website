import React from "react";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Article5 from "./Article5";

function Issue1({ articleid }) {
  return (
    <>
      {articleid == 0 && <Article3 />}
      {/* {articleid == 0 && <Article1 />}
      {articleid == 1 && <Article2 />}
      {articleid == 2 && <Article3 />}
      {articleid == 3 && <Article4 />}
      {articleid == 4 && <Article5 />} */}
    </>
  );
}

export default Issue1;
