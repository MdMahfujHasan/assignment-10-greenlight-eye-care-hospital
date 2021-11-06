import React from 'react';
import './Cornealtransplant.css';

const Cornealtransplant = () => {
    return (
        <div>
            <div className="cornealtransplant">
                <h1 className="cornealtransplant-title">Cornealtransplant</h1>
                <img height="250px" width="400px" src="https://www.clinic-braunschweig.com/hospitals/eye-clinic/img/corneal-transplant.jpg" alt="" />
                <p>Corneal transplantation, also known as corneal grafting, is a surgical procedure where a damaged or diseased cornea is replaced by donated corneal tissue (the graft). When the entire cornea is replaced it is known as penetrating keratoplasty and when only part of the cornea is replaced it is known as lamellar keratoplasty. Keratoplasty simply means surgery to the cornea. The graft is taken from a recently deceased individual with no known diseases or other factors that may affect the chance of survival of the donated tissue or the health of the recipient. The cornea is the transparent front part of the eye that covers the iris, pupil and anterior chamber. The surgical procedure is performed by ophthalmologists, physicians who specialize in eyes, and is often done on an outpatient basis. Donors can be of any age, as is shown in the case of Janis Babson, who donated her eyes after dying at the age 10. The corneal transplantation is performed when medicines, keratoconus conservative surgery and cross-linking can no longer heal the cornea.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="cornealtransplant-doctor">
                <div>
                    <h2>Dr. Oruluisano Giblubadia, MBBS, BHMS, Queensland University of Technology.</h2>
                </div>
                <div>
                    <img height="300px" width="200px" src="https://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130700228/20605818-bright-picture-of-male-doctor-with-stethoscope.jpg" alt="" />
                    <h2>Fee: $135</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam, error optio commodi deleniti dolorem culpa. Quasi repellendus optio dolorem. A saepe perspiciatis expedita magnam optio aperiam! Assumenda sint veniam eaque, similique fugiat itaque, hic ab incidunt, vel dolorem natus non suscipit quisquam tempore. At ex fugiat nostrum laudantium tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Cornealtransplant;