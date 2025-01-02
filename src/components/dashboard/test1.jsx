import React from 'react'
import Component2 from './Dashboard';
import Component1 from './test2';
// import Component2 from './test1';
import CloudDashboard from './claudetest';

const Dashboard = () => {
  return (
    <div className='' style={{marginTop: '80px'}}>
        <div className="col-md-12">
            <div className="container">
                <div className="d-flex">
                    <div className="col-md-8">
                        <div className="border">
                            <Component1 />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="border">
                            <Component2 />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard;