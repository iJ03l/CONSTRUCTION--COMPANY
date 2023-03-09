import React from 'react'
import image1 from "../assets/images/construction-image4.jpg";
import image2 from "../assets/images/projects1.jpeg";
import image3 from "../assets/images/projects2.jpeg";
import { BsArrowDownSquareFill } from 'react-icons/bs'

function Services() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-96" id="image-set">
        <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
          <span className="text-3xl text-warning">our{""}</span>
          <span>services</span>
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-12 font-monserrat  w-full">
          <div className="md:col-span-6 col-span-12 ">
            <img
              src={image1}
              alt="image-here"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12 md:p-20 p-6 items-start">
            <h1 className="text-6xl py-5 font-bold uppercase text-green-600">
              <span className="font-light text-orange-500">what we</span> offer
            </h1>
            <div className="flex md:flex-row flex-col md:gap-4 text-white z-50">
              <div className="w-72 text-xl flex items-center ">
                We offer a range of services that span across energy audits,
                installations, commissioning and system maintenance
              </div>
              <div className="flex items-center justify-center md:mt-0 md:relative -mt-36">
                <span className="w-52 h-52 opacity-10 md:opacity-100 bg-green-700"></span>
              </div>
            </div>
          </div>
          <div className="col-span-12 mb-10">
            <div className="flex md:w-[50%] mx-auto flex-col items-start justify-center -mt-20 md:-mt-40 bg-gray-200 text-xl p-6 md:p-20 mb-10 shadow-xl">
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>construction services</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="">
                  <p className="font-light text-sm">
                    Whether delivering both design and construction under 1
                    contract (Design-Build) or performing the construction of an
                    established design (Design-Bid-Build) we are a competitive
                    and high-quality contractor that works with U.S. Government,
                    intergovernmental, and commercial clients on a diverse range
                    of projects in locations across the globe. For our
                    Design-Build projects, we have established relationships and
                    maintain a large database of outstanding Architect.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Power Custom Installation</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Energy Audit is defined as “the verification, monitoring and
                    analysis of use of energy including submission of technical
                    report containing recommendations for improving energy
                    efficiency with cost-benefit analysis and an action plan to
                    reduce energy consumption. Having an energy audit made by an
                    energy expert is the best way to get a comprehensive view of
                    the actions that need to be taken in order to improve the
                    energy efficiency of a company or home.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Equipment Procurement</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    We know the industry as we have been in business for a long
                    time. We are experts in renewable energy and environmental
                    science. We also know our customers’ needs, and keep an eye
                    on new technologies and trends to provide the best benefits,
                    solutions and value. Unlike other companies, we do not
                    charge our customers to cover sales people’s commissions,
                    cost of leads or company profits. We buy the solar systems
                    at wholesale prices and contract fully qualified designers
                    and installers.
                  </p>
                </div>
              </div>
              <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-row justify-between items-center py-10">
                  <span>Solar Powered Boreholes</span>
                  <span>
                    <BsArrowDownSquareFill />
                  </span>
                </div>
                <div className="collapse-content">
                  <p className="font-light text-sm">
                    Whether delivering both design and construction under 1
                    contract (Design-Build) or performing the construction of an
                    established design (Design-Bid-Build) we are a competitive
                    and high-quality contractor that works with U.S. Government,
                    intergovernmental, and commercial clients on a diverse range
                    of projects in locations across the globe. For our
                    Design-Build projects, we have established relationships and
                    maintain a large database of outstanding Architect.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                      <li>
                        {" "}
                        Federal University of Petroleum Resources Effurun
                      </li>
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
        </div>
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-12 gap-5 px-5 my-8">
          <div className="md:col-span-6 col-span-12 flex items-center justify-end">
            <img src={image2} alt="" className="h-96 object-cover" />
          </div>
          <div className="md:col-span-6 col-span-12 flex items-center justify-start">
            <img src={image3} alt="" className="h-96 " />
          </div>
        </div>
        <div className="w-full flex item-center justify-center">
          <button className="btn btn-lg bg-green-700 ">view gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Services