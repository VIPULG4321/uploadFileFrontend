import React from 'react';
import '../../app.css'

const Home = () => {
  return (
    <div>
        <video autoPlay loop muted plays-inline="true" className="background-video">
            <source src="./public/bg-video1.mp4" type="video/mp4" />
            {/* https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/82f375e7-244f-4c21-90ac-9abd7549ed05 */}
        </video>
            
        <section className="content">
            <h1>The North</h1>
            <a href="#" className="btn light" />
        </section>
        <section style={{height: "100vh"}}>
            dafklhdsfkh
        </section>
    </div>
  )
}

export default Home;