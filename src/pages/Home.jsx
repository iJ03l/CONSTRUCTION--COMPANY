import React from 'react'
import construction1 from "../assets/images/construction-image.jpg";
import construction2 from "../assets/images/construction-image3.jpg";
import construction3 from "../assets/images/construction-image5.jpg";
import image1 from "../assets/images/project-image-1.jpeg";
import image2 from "../assets/images/project-image-2.jpg";
import image3 from "../assets/images/project-image-3.jpg";
import image4 from "../assets/images/project-image-4.jpeg";
import image5 from "../assets/images/project-image-5.jpeg";
import image6 from "../assets/images/project-image-6.jpeg";
import image7 from "../assets/images/project-image-7.jpg";
import image8 from "../assets/images/project-image-8.jpeg";
import TypeWriterEffect from 'react-typewriter-effect';
import '../pages/timeline.css'
import { Link, NavLink} from 'react-router-dom'

function Home() {
  return (
    <div className="font-monserrat">
      <section>
        <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full lg:h-[700px] h-[200px]" id="image-div">
              <img
                src={construction1}
                alt="construction-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 lg:pt-0">
            <div className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-[2.5rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-20 ">
                <span className="text-green-600">
                  Experience
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3F3D56",
                      fontWeight: 800,
                      display: "block",
                    }}
                    startDelay={2000}
                    cursorColor="#3F3D56"
                    multiText={["COMMITMENT.", "Quality.", "Innovation."]}
                    multiTextDelay={2000}
                    typeSpeed={200}
                  />
                </span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
                we are committed to excellence in all that we do. Our team of
                skilled craftsmen and licensed electricians work together to
                deliver exceptional results that exceed our clients'
                expectations. Our vision is to set a new standard for excellence
                and innovation in construction and electrical services, building
                strong relationships with our clients through our commitment to
                quality and expertise.
              </p>
              <NavLink to="/about">
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black">
                  Learn more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse">
          <div className="lg:col-span-6 col-span-12 green-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full">
            <h1 className="text-gray-500 uppercase text-[2.3rem] md:text-[2.5rem] text-muted py-1">
              <span className="text-warning font-bold uppercase">
                We are Experts in
              </span>{" "}
              renewable energy and environmental science
            </h1>
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              We also know our customers’ needs and keep an eye on new
              technological trends to provide the best benefits, solutions and
              value.
            </p>
          </div>
          <div className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px] ">
            <img
              src={construction2}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            id="escape"
          >
            <img
              src={construction3}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 col-span-12 flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full">
            <h1 className="text-green-600 text-[2.5rem] py-1">
              <span className="text-muted font-bold">ONE TEAM.</span> ONE
              PURPOSE
            </h1>
            <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl text-muted lg:pb-0 md:pb-32">
              Each member of RELYANT’s executive and management team holds a set
              of unique capabilities and a long history of success in performing
              construction, engineering, munitions response, environmental
              remediation, logistics support, facility maintenance, training,
              and other expeditionary support services. Only a small percentage
              of companies are qualified and experienced in the management of
              all of these services, especially in austere or remote locations.
              RELYANT’s pledge on each project, to each and every client, is
              that we are one team with one purpose: success.
            </p>
          </div>
        </div>
      </section>

      <section className="flex px-6">
        <div className="flex flex-col md:justify-center md:items-center w-full my-8">
          <h1 className="flex flex-col md:items-center font-bold text-warning uppercase text-[2.5rem] ">
            <span className="text-3xl">our</span>
            <span className="text-green-600 md:text-[4rem] m-0">services</span>
          </h1>
          <span className="w-16 h-4 bg-warning relative rounded-full"></span>
          <div>
            <div className="main font-monserrat my-10 px-4">
              <h3 className="heading">Here's what we do</h3>

              <div className="container">
                <ul>
                  <li>
                    <h3 className="title font-semibold">
                      {" "}
                      We are Experts in renewable energy and environmental
                      science
                    </h3>
                    <p>
                      We also know our customers’ needs and keep an eye on new
                      technological trends to provide the best benefits,
                      solutions and value.
                    </p>
                    <a href="#">Read More </a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Power Custom Installation
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem eaque quidem esse? Incidunt, odit beatae?
                    </p>
                    <a href="#">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Equipment Procurement
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem eaque quidem esse? Incidunt, odit beatae?
                    </p>
                    <a href="#">Read More</a>
                    <span className="circle"></span>
                  </li>
                  <li>
                    <h3 className="title font-semibold">
                      Solar Powered Boreholes
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem eaque quidem esse? Incidunt, odit beatae?
                    </p>
                    <a href="#">Read More </a>
                    <span className="circle"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-6">
        <div className="flex md:justify-center md:items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Recent </span>
            <span className="font-thin text-black"> projects</span>
          </h1>
        </div>
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
          <img src={image1} alt="project-image-1" />
          <img src={image2} alt="project-image-1" />
          <img src={image3} alt="project-image-1" />
          <img src={image4} alt="project-image-1" />
          <img src={image5} alt="project-image-1" />
          <img src={image6} alt="project-image-1" />
          <img src={image7} alt="project-image-1" />
          <img src={image8} alt="project-image-1" />
        </div>

        <div className="w-full flex items-center justify-center mb-12">
          <NavLink to="/projects">
            <button className="btn btn-lg btn-success text-white">
              see gallery{" "}
            </button>
          </NavLink>
        </div>
      </section>

      <section className="flex px-6">
        {/* <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Testimonials</span>
          </h1>
          <span className="w-16 h-4 bg-green-600 relative rounded-full"></span>
        </div> */}
      </section>
    </div>
  );
}

export default Home