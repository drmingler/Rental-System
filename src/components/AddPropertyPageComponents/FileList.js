import React from "react";
import {ReactComponent as Cancel} from "../../assets/img/x.svg";

const FileList = ({ name, size, id, handleRemoveFile }) => {
  let fileSize = (size / 1000).toFixed(2);

  return (
    <li className="file-list">
      <div className="name">
        <span>{name}</span>
      </div>
      <span className="size">{fileSize + "kb"}</span>
      <div className="icon" onClick={() => handleRemoveFile(id)}>
        <Cancel />
      </div>
    </li>
  );
};
export default FileList;
