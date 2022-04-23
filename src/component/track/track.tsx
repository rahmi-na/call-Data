import React from "react";

function Track({ items }: any) {
  return (
    <div>
      <div className="p-4 pr-2">
        <div className=" align-items-center justify-content-center">
          <div className="grid-column-song">{items}</div>
        </div>
      </div>
    </div>
  );
}

export default Track;
