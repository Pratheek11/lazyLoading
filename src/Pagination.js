import React from "react";
import "./Card.css";

const Pagination = ({ totalItem, curPage, setCurrPage, numItemPerPage }) => {
  const totalPages = Math.round(totalItem / numItemPerPage);
  const pagesNum = [];
  for (var i = 1; i <= totalPages; i++) {
    pagesNum.push(i);
  }
  return (
    <div className="pageCard">
      <div className="pageNumSet">
        {pagesNum.map((el) => (
          <div
            onClick={() => setCurrPage(el)}
            className={curPage == el ? "pageNum active" : "pageNum"}
          >
            <p>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
