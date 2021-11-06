import React from 'react';
import { Button } from 'react-bootstrap';
import './Glaucomasurgery.css';

const Glaucomasurgery = () => {
    return (
        <div>
            <div className="glaucomasurgery">
                <h1 className="glaucomasurgery-title">Glaucomasurgery</h1>
                <img height="325px" width="500px" src="https://cdn.sanity.io/images/0vv8moc6/ophtalmology/9def464c14548ec2e34dc0e350ede6cd6523a60d-3423x2282.jpg" alt="" />
                <p>A trabeculoplasty is a modification of the trabecular meshwork. Laser trabeculoplasty (LTP) is the application of a laser beam to burn areas of the trabecular meshwork, located near the base of the iris, to increase fluid outflow. LTP is used in the treatment of various open-angle glaucomas. The two types of laser trabeculoplasty are argon laser trabeculoplasty (ALT) and selective laser trabeculoplasty (SLT). As its name suggests, argon laser trabeculoplasty uses an argon laser to create tiny burns on the trabecular meshwork. Selective laser trabeculoplasty is newer technology that uses a Nd:YAG laser to target specific cells within the trabecular meshwork and create less thermal damage than ALT. SLT shows promise as a long term treatment. In SLT a laser is used to selectively target the melanocytes in the trabecular meshwork. Though the mechanism by which SLT functions is not well understood, it has been shown in trials to be as effective as the older Argon Laser Trabeculoplasty. However, because SLT is performed using a much lower power laser, it does not appear to affect the structure of the trabecular meshwork (based on electron microscopy) to the same extent, so retreatment may be possible if the effects from the original treatment should begin wear off, although this has not been proven in clinical studies. ALT is repeatable to some extent with measurable results possible.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="glaucomasurgery-doctor">
                <div>
                    <h2>Dr. Rashgublas Ullimaksuipa, MBBS, BHMS, BDS, University of Canberra.</h2>
                </div>
                <div>
                    <img height="300px" width="350px" src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" alt="" />
                    <h2>Fee: $200</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam, error optio commodi deleniti dolorem culpa. Quasi repellendus optio dolorem. A saepe perspiciatis expedita magnam optio aperiam! Assumenda sint veniam eaque, similique fugiat itaque, hic ab incidunt, vel dolorem natus non suscipit quisquam tempore. At ex fugiat nostrum laudantium tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Glaucomasurgery;