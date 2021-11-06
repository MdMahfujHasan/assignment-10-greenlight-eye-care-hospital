import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './Blepharoplasty.css';

const Blepharoplasty = () => {
    return (
        <div>
            <div className="blepharoplasty">
                <h1 className="blepharoplasty-title">Blepharoplasty</h1>
                <img src="https://www.drchristopherzoumalan.com/wp-content/uploads/2020/07/male-blepharoplasty-gal-6d.jpg" alt="" />
                <p>The operative goals of a blepharoplastic procedure are the restoration of the correct functioning to the affected eyelid(s) and the restoration of the aesthetics of the eye-region of the face, which are achieved by eliminating excess skin from the eyelid(s), smoothing the underlying eye muscles, tightening the supporting structures, and resecting and re-draping the excess fat of the retroseptal area of the eye, in order to produce a smooth anatomic transition from the lower eyelid to the cheek.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="blepharoplasty-doctor">
                <div>
                    <h2>Dr. Harusil Bikarsfel, MBBS, BDS, BAMS, Deakin University.</h2>
                </div>
                <div>
                    <img height="300px" width="400px" src="https://www.medicalartseye.com/images/blog/Image_2.jpg" alt="" />
                    <h2>Fee: $100</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam, error optio commodi deleniti dolorem culpa. Quasi repellendus optio dolorem. A saepe perspiciatis expedita magnam optio aperiam! Assumenda sint veniam eaque, similique fugiat itaque, hic ab incidunt, vel dolorem natus non suscipit quisquam tempore. At ex fugiat nostrum laudantium tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Blepharoplasty;