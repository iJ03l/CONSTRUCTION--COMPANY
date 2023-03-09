import React from "react";
import construction1 from "../assets/images/construction-image-null.jpg";
import icon1 from "../assets/images/ico1.png";
import icon2 from "../assets/images/ico3.png";
import icon3 from "../assets/images/ico2.png";
import TypeWriterEffect from "react-typewriter-effect";

function About() {
  return (
    <div>
      <div className="grid w-full grid-cols-12 mb-10 ">
        <div className="col-span-12 w-full h-96 " id="image-set">
          <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
            <span className="text-3xl">Here's{""}</span>
            <span>who we are</span>
          </h1>
        </div>
        <div className="col-span-12 -mt-[7%] w-[80%] mx-auto bg-white shadow-xl">
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-6 col-span-12 md:p-20 p-6">
              <h1 className="text-4xl py-5 font-bold uppercase text-green-600">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(22 163 74)",
                    fontWeight: 700,
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="rgb(22 163 74)"
                  multiText={["we are awesome"]}
                  multiTextDelay={2000}
                  typeSpeed={100}
                />
              </h1>
              <p className="text-2xl">
                To be a pacesetter in the development and construction sector
                known for exceptional quality, integrity and resourcefulness.
                And our MISSION is to Provide Value added services to clients by
                consistently improving our levels of service delivery.
              </p>
            </div>
            <div className="md:col-span-6 col-span-12 p-6">
              <img src={construction1} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-12 font-monserrat items-center  w-full">
            <div className="md:col-span-3 col-span-12 p-6 md:w-[50px] md:h-80">
              {/* <img src={construction1} alt="" /> */}
            </div>
            <div className="md:col-span-9 bg-gray-800 col-span-12 md:p-20 p-6">
              <h1 className="text-6xl py-5 font-bold uppercase text-green-600">
                <span className="font-light text-warning">Vision &</span>{" "}
                mission
              </h1>
              <div className="flex md:flex-row flex-col md:gap-4 text-white">
                <div>
                  We are one of Nigeria’s leading commercial renewable energy
                  companies. Incorporated in 1991, we have turned businesses,
                  SMEs’ and government sites into ecosystems of sustainable
                  energy through rooftop solar panels, battery storage and solar
                  carports. Our partnership with some of the biggest brands in
                  the industry has enabled us to deliver financial savings and
                  renewable energy for our clients all over the country.
                </div>
                <div>
                  Our expertise in rooftop solar panels is unparalleled. We have
                  truly left the pack behind because whilst our competitors were
                  focusing on mounting rooftop solutions, we charted a new path
                  by heralding the installation of solar carports. By constantly
                  striving to provide bespoke solar solutions for our numerous
                  clients, we have been able to maintain our focus and this has
                  allowed us to continually raise the bar and set the standards
                  in a solar installation across the country. By leveraging on
                  our relationships with other international engineering firms
                  and our technical partners, we are able to keep pace with the
                  innovation around the World.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center mt-10">
            <div className="col-span-12 font-monserrat my-10">
              <h1
                className="w-full flex gap-2 items-center
               justify-center font-bold uppercase md:text-5xl text-xl text-green-800"
              >
                <span>Here's what </span>
                <span className="font-medium md:font-thin w-50 text-warning">
                  we stand for
                </span>
              </h1>
              <div className="flex md:flex-row flex-col flex-wrap items-center justify-center gap-4">
                <div className="flex flex-col text-center w-72 h-80 gap-3 items-center justify-center">
                  <img src={icon1} className="w-28" alt="" />
                  <h1 className="text-3xl font-bold text-green-700">
                    ACCOUNTABILITY
                  </h1>
                  <p className="text-xl">
                    We take responsibility for our actions and decisions.
                  </p>
                </div>

                <div className="flex flex-col text-center  w-72 h-80  gap-3 items-center justify-center">
                  <img src={icon3} className="w-28" alt="" />
                  <h1 className="text-3xl font-bold text-green-700">
                    EXCELLENCE
                  </h1>
                  <p className="text-xl">
                    Our work is carried out with the highest standards.
                  </p>
                </div>

                <div className="flex flex-col text-center w-72 h-80  gap-3 items-center justify-center">
                  <img src={icon2} className="w-28 text-3xl " alt="" />
                  <h1 className="text-3xl font-bold text-green-700">RESPECT</h1>
                  <p className="text-xl">
                    We respect our fellow employees, clients, contractors, and
                    suppliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
