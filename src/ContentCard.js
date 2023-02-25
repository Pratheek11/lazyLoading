import React, { useState } from "react";
import "./Card.css";

function ContentCard({ info }) {
  const [moreContent, setMoreContent] = useState(false);
  if (info.desc.lenght < 50) {
    setMoreContent(true);
  }

  return (
    <div className="contentCard">
      <div className="cardTitle">{info.title}</div>
      {moreContent ? (
        <div className="cardDesc">
          <p style={{ display: "inline" }}>{info.desc}</p>
          <p
            style={{ display: "inline" }}
            className="cardMore"
            onClick={() => setMoreContent(!moreContent)}
          >
            &nbsp;...less
          </p>
        </div>
      ) : (
        <>
          <div className="cardDesc">
            <p style={{ display: "inline" }}>{info.desc.slice(0, 51)}</p>
            <p
              style={{ display: "inline" }}
              className="cardMore"
              onClick={() => setMoreContent(!moreContent)}
            >
              &nbsp;...more
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ContentCard;
