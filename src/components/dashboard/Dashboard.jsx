import React, { useState, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Parent from './test1';

const Component2 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [
      ...prevFiles,
      ...filesArray.map((file) => ({
        name: file.name,
        size: file.size,
      })),
    ]);
  };

  const formatFileSize = (size) => {
    const units = ["B", "KB", "MB", "GB"];
    let index = 0;

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
  };

  const removeFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div id="app">
      {/* <h2>Upload Files</h2> */}
      <div className="container">
        <div className="file-input-box">
          <div className="wrapper-file-input">
            <div className="input-box" onClick={openFileInput}>
              <h4 className="mt-3">
                <i className="fa-solid fa-upload me-2"></i>
                Choose File to upload
              </h4>
              <p className="mt-2 text-secondary">Maximum file size 50MB</p>
              <input
                ref={fileInputRef}
                type="file"
                hidden
                onChange={handleFileChange}
                multiple
              />
            </div>
            <small>Files Supported: PDF, TEXT, DOC, DOCX, JPG, PNG, SVG</small>
          </div>

          <div className="wrapper-file-section">
            {selectedFiles.length > 0 && (
              <div className="selected-files">
                <h5>Selected Files</h5>
                <ul
                  className="file-list"
                  style={{
                    maxHeight: selectedFiles.length ? "220px" : "auto",
                    overflowY: "auto",
                  }}
                >
                  {selectedFiles.map((file, index) => (
                    <li className="item" key={file.name}>
                      <span className="name">
                        {file.name} ({formatFileSize(file.size)})
                      </span>
                      <div
                        className="remove"
                        onClick={() => removeFile(index)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
