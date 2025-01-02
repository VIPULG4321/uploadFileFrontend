import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from 'lucide-react';

const CloudDashboard = () => {
  const categories = [
    { title: 'Pictures', count: '480 files', bgClass: 'bg-primary' },
    { title: 'Documents', count: '190 files', bgClass: 'bg-info' },
    { title: 'Videos', count: '30 files', bgClass: 'bg-danger' },
    { title: 'Audio', count: '80 files', bgClass: 'bg-success' }
  ];

  const folders = [
    { title: 'Work', count: '820 files', icon: '▤' },
    { title: 'Personal', count: '115 files', icon: '👤' },
    { title: 'School', count: '65 files', icon: '🎓' },
    { title: 'Archive', count: '21 files', icon: '📦' }
  ];

  const recentFiles = [
    { name: 'IMG_100000', type: 'PNG file', size: '5 MB', icon: '📷' },
    { name: 'Startup pitch', type: 'AVI file', size: '105 MB', icon: '🎥' },
    { name: 'Freestyle beat', type: 'MP3 file', size: '21 MB', icon: '🎵' },
    { name: 'Work proposal', type: 'DOCx file', size: '500 kb', icon: '📄' }
  ];

  const sharedFolders = [
    { name: 'Keynote files', users: 2 },
    { name: 'Vacation photos', users: 1 },
    { name: 'Project report', users: 2 }
  ];

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
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h2 className="h4 mb-3">Categories</h2>
        <div className="row g-3">
          {categories.map((category, index) => (
            <div key={index} className="col-md-3">
              <div className={`card ${category.bgClass} text-white`}>
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text opacity-75">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Files */}
      {/* <div className="mb-4">
        <h2 className="h4 mb-3">Files</h2>
        <div className="row g-3">
          {folders.map((folder, index) => (
            <div key={index} className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="display-6 mb-2">{folder.icon}</div>
                  <h5 className="card-title">{folder.title}</h5>
                  <p className="card-text text-muted">{folder.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Recent Files */}
      <div className="mb-4">
        <h2 className="h4 mb-3">Recent files</h2>
        <div className="card">
          <div className="list-group list-group-flush">
            {recentFiles.map((file, index) => (
              <div key={index} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <span className="fs-4">{file.icon}</span>
                    <div>
                      <h6 className="mb-0">{file.name}</h6>
                      <small className="text-muted">{file.type}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <small className="text-muted">{file.size}</small>
                    <button className="btn btn-link text-primary p-0">
                      <i className="bi bi-share"></i>
                    </button>
                    <div className="dropdown">
                      <button className="btn btn-link text-muted p-0" data-bs-toggle="dropdown">
                        ⋮
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Open</a></li>
                        <li><a className="dropdown-item" href="#">Download</a></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Storage and Shared Folders */}
      <div className="row g-4">
        <div className="col-md-6">
          <h2 className="h4 mb-3">Your storage</h2>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>75 GB of 100 GB are used</span>
                <span className="text-primary">25% left</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="h4 mb-3">Your shared folders</h2>
          <div className="d-flex flex-column gap-2">
            {sharedFolders.map((folder, index) => (
              <div key={index} className="card">
                <div className="card-body d-flex justify-content-between align-items-center py-2">
                  <span>{folder.name}</span>
                  <div className="d-flex">
                    {[...Array(folder.users)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-circle bg-secondary"
                        style={{
                          width: '32px',
                          height: '32px',
                          marginLeft: i !== 0 ? '-8px' : '0',
                          border: '2px solid #fff'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-primary">
              + Add more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDashboard;