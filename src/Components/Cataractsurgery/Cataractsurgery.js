import React from 'react';
import './Cataractsurgery.css';

const Cataractsurgery = () => {
    return (
        <div>
            <div className="cataractsurgery">
                <h1 className="cataractsurgery-title">Cataractsurgery</h1>
                <img height="325px" width="500px" src="https://images.ctfassets.net/u4vv676b8z52/6oWYaBtb9wr1B1eAiWQg4u/767283f786ccc599863a380a613a6a3d/cataract-surgery-hero.jpg?fm=jpg&q=80" alt="" />
                <p>Cataract surgery, also called lens replacement surgery, is the removal of the natural lens of the eye (also called "crystalline lens") that has developed an opacification, which is referred to as a cataract,[1] and its replacement with an intraocular lens. Metabolic changes of the crystalline lens fibers over time lead to the development of the cataract, causing impairment or loss of vision. Some infants are born with congenital cataracts, and certain environmental factors may also lead to cataract formation. Early symptoms may include strong glare from lights and small light sources at night, and reduced acuity at low light levels. During cataract surgery, a patient's cloudy natural cataract lens is removed, either by emulsification in place or by cutting it out. An artificial intraocular lens (IOL) is implanted in its place. Cataract surgery is generally performed by an ophthalmologist in an ambulatory setting at a surgical center or hospital rather than an inpatient setting. Either topical, sub-tenon, peribulbar, or retrobulbar local anesthesia is used, usually causing little or no discomfort to the patient.
                    <br />
                    Well over 90% of operations are successful in restoring useful vision, with a low complication rate. Day care, high volume, minimally invasive, small incision phacoemulsification with quick post-op recovery has become the standard of care in cataract surgery all over the world.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="cataractsurgery-doctor">
                <div>
                    <h2>Dr. Frankel Kalbuionas, MBBS, BUMS, BHMS, BDS, University of Canberra.</h2>
                </div>
                <div>
                    <img height="300px" width="400px" src="https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg" alt="" />
                    <h2>Fee: $150</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam, error optio commodi deleniti dolorem culpa. Quasi repellendus optio dolorem. A saepe perspiciatis expedita magnam optio aperiam! Assumenda sint veniam eaque, similique fugiat itaque, hic ab incidunt, vel dolorem natus non suscipit quisquam tempore. At ex fugiat nostrum laudantium tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Cataractsurgery;