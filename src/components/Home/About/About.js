import React from 'react';
import about from '../../../images/about.jpg';
import './About.css'

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <img className="about-image" src={about} alt=""/>
                    </div>

                    <div className="col-md-6">
                        <h1>Introducing the Private <br/> Investigation Agency</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;