import React from 'react';
import Blepharoplasty from '../Blepharoplasty/Blepharoplasty';
import Cornealtransplant from '../Cornealtransplant/Cornealtransplant';
import Glaucomasurgery from '../Glaucomasurgery/Glaucomasurgery';
import Retinasurgery from '../Retinasurgery/Retinasurgery';
import Cataractsurgery from '../Cataractsurgery/Cataractsurgery';
import doctor from '../../Images/doctor.png';
import './Eyesurgeries.css';

const EyeSurgeries = () => {
    return (
        <div>
            <div className="header-section">
                <div className="header-text">
                    <div>
                        <h1>Medical Treatment in <br />
                            <span style={{ color: '#FF4500' }}>Affordable Prices.</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit fuga, optio temporibus obcaecati necessitatibus unde? Dolores quisquam blanditiis veniam. Modi et dolorem vero maxime vel reiciendis error dolorum eos, culpa, voluptatibus est voluptatum quis amet ab doloremque, numquam architecto fugiat sequi accusamus eaque neque! Esse numquam mollitia porro reprehenderit.</p>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                </div>
                <div>
                    <img height="600px" width="400px" src={doctor} alt="" />
                </div>
            </div>
            <div className="eyesurgeries">
                <Blepharoplasty></Blepharoplasty>
                <hr />
                <Retinasurgery></Retinasurgery>
                <hr />
                <Cornealtransplant></Cornealtransplant>
                <hr />
                <Cataractsurgery></Cataractsurgery>
                <hr />
                <Glaucomasurgery></Glaucomasurgery>
            </div>
        </div>
    );
};

export default EyeSurgeries;