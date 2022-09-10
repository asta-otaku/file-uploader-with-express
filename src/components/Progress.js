import React from "react";

function Progress({ uploadPercentage }) {
  return (
    <div className="upload-percentage-container">
      <div
        className="upload-percentage"
        style={{ width: `${uploadPercentage}%` }}
      >
        <span className="upload-label">{`${uploadPercentage}%`}</span>
      </div>
    </div>
  );
}

export default Progress;
