import React from "react";

function Track({ items }: any) {
  return (
    <div>
      <div className="p-4">
        <div className="d-flex align-items-center w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="grid-column-song">{items}</div>
        </div>
      </div>
    </div>
  );
}

export default Track;
