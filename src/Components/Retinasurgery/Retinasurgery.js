import React from 'react';
import './Retinasurgery.css';

const Retinasurgery = () => {
    return (
        <div>
            <div className="retinasurgery">
                <h1 className="retinasurgery-title">Retina Surgery</h1>
                <img height="300px" width="500px" src="https://cdn.sanity.io/images/0vv8moc6/modernretina/d84970e628f41f2708e80609676fc00a370586bf-700x466.jpg" alt="" />
                <p>Since the eye is heavily supplied by nerves, anesthesia is essential. Local anesthesia is most commonly used. Topical anesthesia using lidocaine topical gel is often used for quick procedures. Since topical anesthesia requires cooperation from the patient, general anesthesia is often used for children, traumatic eye injuries, or major orbitotomies, and for apprehensive patients. The physician administering anesthesia, or a nurse anesthetist or anesthetist assistant with expertise in anesthesia of the eye, monitors the patient's cardiovascular status. Sterile precautions are taken to prepare the area for surgery and lower the risk of infection. These precautions include the use of antiseptics, such as povidone-iodine, and sterile drapes, gowns, and gloves.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="retinasurgery-doctor">
                <div>
                    <h2>Dr. Sarulnasib Huopilew, MBBS, BHMS, BYNS, Flinders University.</h2>
                </div>
                <div>
                    <img height="300px" width="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AbZKYMUtLlaRubKYnZ8GGxqsd11mLHWQcA&usqp=CAU" alt="" />
                    <h2>Fee: $120</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam, error optio commodi deleniti dolorem culpa. Quasi repellendus optio dolorem. A saepe perspiciatis expedita magnam optio aperiam! Assumenda sint veniam eaque, similique fugiat itaque, hic ab incidunt, vel dolorem natus non suscipit quisquam tempore. At ex fugiat nostrum laudantium tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Retinasurgery;