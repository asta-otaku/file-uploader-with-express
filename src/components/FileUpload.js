import React from "react";

function FileUpload() {
  return (
    <>
      <form>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile">
            Choose file
          </label>
        </div>
      </form>
    </>
  );
}

export default FileUpload;
