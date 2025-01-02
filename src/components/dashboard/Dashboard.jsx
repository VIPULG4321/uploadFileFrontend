import React from 'react'
import UploadFile from './UploadFile';
import AllFiles from './AllFiles';


const Dashboard = () => {
  return (
    <div className='' style={{marginTop: '80px'}}>
        <div className="col-md-12">
            <div className="container">
                <div className="d-flex">
                    <div className="col-md-8">
                        <div className="border">
                            <AllFiles />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border">
                            <UploadFile />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard;