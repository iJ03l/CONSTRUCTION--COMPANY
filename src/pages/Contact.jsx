import React from 'react'

function Contact() {
  return (
    <div>
      <div className="w-full h-96" id="image-set1">
        <h1 className="flex text-white font-monserrat text-5xl uppercase font-semibold items-center justify-center h-full w-full text-center flex-col">
          <span className="text-3xl text-green-500">reach{""}</span>
          <span>out to us</span>
        </h1>
      </div>
      <div className="grid grid-cols-12 font-monserrat ">
        <div
          className="col-span-12 md:col-span-6 flex md:flex-row flex-col gap-3 md:gap-4 bg-green-600 text-white"
          id="image-set2"
        >
          <div className="flex flex-col w-full items-left px-0 py-7 md:px-40 md:pt-40 md:py-0 justify-center">
            <h1 className="md:py-4 md:px-0 px-10 text-3xl font-semibold py-5">Get in touch</h1>
            <p className="md:text-lg md:px-0 px-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium sed sapiente fuga. Alias nam, earum corrupti, ipsam
              praesentium dicta eius ipsum sapiente distinctio quas veniam.
              Minima placeat neque laborum officiis!
            </p>
          </div>

          <div className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 px-10">
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
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
            </span>
            <p className="md:pr-0">
              Suite B080, H&A Plaza, Plot 24 Wuye District Opposite Okanga Plaza
              Wuye, FCT
            </p>
          </div>
          <div className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 px-10">
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
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
            </span>
            <p>+1 (555) 234-5678</p>
          </div>
          <div className="flex items center text-left gap-3 md:gap-4 md:pl-40 md:pr-60 md:py-5 md:mb-5 mb-5 px-10">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <a href="#" className="link">
              info.global@gmail.com
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col items-left justify-center md:pr-64 md:pt-40 ">
            <h1 className="py-6 px-11 md:px-0 text-xl md:text-3xl font-semibold md:pl-8">
              ENTER YOUR INFORMATION IN THE FORM BELOW AND SOMEONE FROM RELYANT
              WILL CONTACT YOU.
            </h1>

            <div>
              <div className="card-body md:px-0 px-10 py-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Fullname</span>
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="phone number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Questions & Comments</span>
                  </label>
                  <textarea
                    placeholder="Type Here..."
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-500 border-none">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact