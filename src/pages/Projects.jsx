import React from 'react'
import image1 from "../assets/images/project-image-1.jpeg";
import image2 from "../assets/images/project-image-2.jpg";
import image3 from "../assets/images/project-image-3.jpg";
import image4 from "../assets/images/project-image-4.jpeg";
import image5 from "../assets/images/project-image-5.jpeg";
import image6 from "../assets/images/project-image-6.jpeg";
import image7 from "../assets/images/project-image-7.jpg";
import image8 from "../assets/images/project-image-8.jpeg";

function Projects() {
  return (
    <div className='mt-36 '>
      <div className="col-span-12 mt-11">
        <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 shadow-xl">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10">
              <span className="font-bold text-5xl text-warning">
                Our Clients Since 1991
              </span>
              <span className="w-11 h-3 ml-10 bg-green-700"></span>
            </div>

            <div className="flex">
              <div className="flex items-center justify-center">
                <ul className="steps steps-vertical text-white">
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                  <li data-content="★" className="step step-warning"></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Relyant Global</li>
                  <li> Central Asia Development Group (CADG)</li>
                  <li>Federal Ministry of Water Resources</li>
                  <li> Federal University of Petroleum Resources Effurun</li>
                  <li>Federal Fire Service</li>
                  <li>Niger Delta Development Commission</li>
                  <li>Edo state Government</li>
                  <li>Delta state Government</li>
                  <li>Energy commission of Nigeria</li>
                  <li>
                    {" "}
                    Rural Water Supply and Sanitation Agency, RUWASA, Delta
                    State
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
        <img src={image1} alt="project-image-1" />
        <img src={image2} alt="project-image-1" />
        <img src={image3} alt="project-image-1" />
        <img src={image4} alt="project-image-1" />
        <img src={image5} alt="project-image-1" />
        <img src={image6} alt="project-image-1" />
        <img src={image7} alt="project-image-1" />
        <img src={image8} alt="project-image-1" />
      </div>
    </div>
  );
}

export default Projects