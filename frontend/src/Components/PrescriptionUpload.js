import React, { useState } from "react";
import "../Styles/PrescriptionUpload.css";
import { Upload, CloudUpload } from "lucide-react";

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        setError("Only image files are allowed");
        setFile(null);
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        setFile(null);
        return;
      }
      setError("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload a prescription");
      return;
    }
    alert("Prescription uploaded successfully");
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="upload-title">DOC-Chain+</h2>
        <p className="upload-subtitle">Upload Your Prescription</p>
        <form onSubmit={handleSubmit} className="upload-form">
          <label className="upload-label">Upload File</label>
          <div className="upload-box">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />
            <label htmlFor="fileUpload" className="upload-icon-label">
              <CloudUpload size={40} className="upload-icon" />
              <span className="upload-text">Click to upload</span>
              {file && <span className="upload-filename">{file.name}</span>}
            </label>
          </div>
          {error && <p className="upload-error">{error}</p>}
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionUpload;