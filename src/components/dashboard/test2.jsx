import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "lucide-react";
import {
  FileText,
  Image,
  FileSpreadsheet,
  File,
  Download,
  Trash2,
} from "lucide-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const FileItem = ({ fileName, size, uploadDate, onDelete, onDownload }) => {
  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return <FileText className="file-icon text-danger" />;
      case "png":
      case "jpg":
        return <Image className="file-icon text-primary" />;
      case "xlsx":
      case "zip":
        return <FileSpreadsheet className="file-icon text-success" />;
      default:
        return <File className="file-icon text-secondary" />;
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([""]));
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onDownload?.();
  };

  return (
    <div className="file-item row py-3 border-bottom align-items-center mx-0">
      <div className="col-1 d-flex justify-content-end">
        {getFileIcon(fileName)}
      </div>
      <div className="col-12 col-sm-4">
        <p className="mb-0 fw-medium">{fileName}</p>
        <small className="text-muted">{size}</small>
      </div>
      <div className="col-12 col-sm-4 text-center">
        <small className="text-muted">
          {new Date(uploadDate).toLocaleDateString()}
        </small>
      </div>
      <div className="col-12 col-sm-3 d-flex justify-content-end gap-2">
        <button onClick={handleDownload} className="action-btn btn">
          <Download className="text-secondary" />
        </button>
        <button onClick={onDelete} className="action-btn btn">
          <Trash2 className="text-secondary" />
        </button>
      </div>
    </div>
  );
};

const Component1 = () => {
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setsearchQuery] = useState(0);

  const categories = [
    { title: "Documents", count: "480 files", bgClass: "bg-primary", eventHandle: "handlePdf" },
    { title: "Images", count: "190 files", bgClass: "bg-info", eventHandle: "handleImg" },
    { title: "Videos", count: "30 files", bgClass: "bg-danger", eventHandle: "handleVideo" },
    { title: "Audios", count: "80 files", bgClass: "bg-success", eventHandle: "handleAudio" },
  ];

  const files = [
    {
      fileName: "Sections Wireframe Kit.zip",
      size: "9.83 MB",
      // uploadDate: "2024-12-31",
      uploadDate: "2025-01-01T12:41:06.028+00:00",
    },
    {
      fileName: "Project Documentation.pdf",
      size: "2.4 MB",
      uploadDate: "2024-06-15T08:30:00.000+00:00",
    },
    { fileName: "Design Assets.png", size: "5.2 MB", uploadDate: "2024-01-01T14:20:00.000+00:00" },
    {
      fileName: "Analytics Report.xlsx",
      size: "1.8 MB",
      uploadDate: "2024-01-05T14:20:00.000+00:00",
    },
    
  ];

  const blogCategories = [
    "By Date(Ascending)",
    "By Date(Descending)",
    "by Size",
  ];

  
  const handleSearch = (e) => {
    
    console.log(e.target.value.length);

    let filteredData = files.filter((file)=>file.fileName.toLowerCase().includes(e.target.value.toLowerCase()));
    setsearchQuery(e.target.value);
    setFilterData(filteredData);
    
  }
  console.log(filterData);

  const handlePdf = () => {
    let filteredData = files.filter((file) =>
      file.fileName.toLowerCase().includes("pdf") || file.fileName.toLowerCase().includes("xlsx") || file.fileName.toLowerCase().includes("docx")
    );
    setFilterData(filteredData);
  }

  const handleImg = () => {
    let filteredData = files.filter((file) =>
      file.fileName.toLowerCase().includes("jpeg") || file.fileName.toLowerCase().includes("jpg") || file.fileName.toLowerCase().includes("png") || file.fileName.toLowerCase().includes("svg")
    );
    setFilterData(filteredData);
  }

  const handleVideo = () => {
    let filteredData = files.filter((file) =>
      file.fileName.toLowerCase().includes("mp4") || file.fileName.toLowerCase().includes("mkv") || file.fileName.toLowerCase().includes("mov")
    );
    setFilterData(filteredData);
  }

  const handleAudio = () => {
    let filteredData = files.filter((file) =>
      file.fileName.toLowerCase().includes("mp3") || file.fileName.toLowerCase().includes("m4a") || file.fileName.toLowerCase().includes("wav")
    );
    setFilterData(filteredData);
  }

  const handleSortByDate = () => {
    let sortedData = files
      .filter((file) => file.uploadDate) // Ensure the file has a date property
      .sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate)); // Sort by parsed dates in ascending order
  
    setFilterData(sortedData); // Assuming you're using state to store the filtered data
  };

  const handleSortByDateDescending = () => {
    let sortedData = files
      .filter((file) => file.uploadDate) // Ensure the file has a date property
      .sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)); // Sort by parsed dates in descending order
  
    setFilterData(sortedData); // Assuming you're using state to store the filtered data
  };

  const FileSizeAscending = () => {
    let sortedData = files
      .filter((file) => file.size) // Ensure the file has a size property
      .sort((a, b) => a.size - b.size); // Sort by size in ascending order
  
    setFilterData(sortedData); // Assuming you're using state to store the filtered data
  };
  
  
  

  // i aam getting date in this format "2024-12-31" now i wnat you to make a function where i am getting date as prop and i want filter by assending order

  const handleCate = (category) => {

    switch (category) {
      case "handlePdf":
        return handlePdf();
      case "handleImg":
        return handleImg();
      case "handleVideo":
        return handleVideo();
      case "handleAudio":
        return handleAudio();
      case "handleSortByDate":
        return handleSortByDate();
      
      default:
        return (
          <div>
            <h1>Not Found</h1>
          </div>
        )
    }
  }

  return (
    <div className="container-fluid bg-light p-4">
      {/* Search Bar */}
      <div className="position-relative mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white border-end-0">
            <Search size={20} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search"
            onChange={(e)=>handleSearch(e)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h2 className="h4 mb-3">Categories</h2>
        <div className="row g-3">
          {categories.map((category, index) => (
            <div key={index} className="col-md-3">
              
              <div className={`card ${category.bgClass} text-white`} onClick={()=>handleCate(category.eventHandle)}>
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text opacity-75">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-4">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="h4 mb-3">All Files</h2>
          <div className="dash-drop">
            <li className="dropdown-menu-parrent">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-variants-Info"
                  className="bg-transparent border-1 hover-none dropdown-dark"
                >
                  <span className="me-2 cate_btn"> Filters</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  align="end"
                  style={{ maxHeight: "240px", overflowY: "auto" }}
                >
                  {/* {blogCategories.map((val, index) => (
                    <Dropdown.Item key={index} className="cate_item">
                      <Link to="" className="text-dark" onClick={()=>handleCate(val)}>
                        {val}
                      </Link>
                    </Dropdown.Item>
                  ))} */}
                  <Dropdown.Item className="cate_item">
                    <Link to="" className="text-dark" onClick={()=>handleSortByDate()}>By Date(Ascending)</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="cate_item">
                    <Link to="" className="text-dark" onClick={()=>handleSortByDateDescending()}>By Date(Descending)</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="cate_item">
                    <Link to="" className="text-dark" onClick={()=>FileSizeAscending()}>By Size</Link>
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body p-0">
            
            {/* {
              filterData.length > 0 ? filterData.map((file, index) => (
              <FileItem
                key={index}
                {...file}
                onDelete={() => console.log("Delete:", file.fileName)}
                onDownload={() => console.log("Download:", file.fileName)}
              />
            )) :
            files.map((file, index) => (
              <FileItem
                key={index}
                {...file}
                onDelete={() => console.log("Delete:", file.fileName)}
                onDownload={() => console.log("Download:", file.fileName)}
              />
            )) 
            } */}
            {
              filterData.length > 0 ? (
                filterData.map((file, index) => (
                  <FileItem
                    key={index}
                    {...file}
                    onDelete={() => console.log("Delete:", file.fileName)}
                    onDownload={() => console.log("Download:", file.fileName)}
                  />
                ))
              ) : searchQuery && searchQuery.length > 0 ? ( // Check if a search is active
                <p>No results found</p>
              ) : (
                files.map((file, index) => (
                  <FileItem
                    key={index}
                    {...file}
                    onDelete={() => console.log("Delete:", file.fileName)}
                    onDownload={() => console.log("Download:", file.fileName)}
                  />
                ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
