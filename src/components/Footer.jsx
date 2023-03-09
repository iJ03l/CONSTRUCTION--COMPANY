import React from 'react'

function Footer() {
  return (
      <footer className="footer p-28 text-lg bg-base-200 text-base-content font-semibold">
        <div className='flex flex-col -mt-10'>
          <img
            className="w-32 m-0 p-0"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="logo-image"
          />
          <p>
            LUCKY LUMACS LTD
            <br />
            Contact us for efficient energy solutions.
            <br />
            <a href='#' className='link text-blue-600 font-semibold'>info@luckylumacs.com</a>
          </p>
        </div>
        <div className="uppercase">
          <span className="footer-title">Explore</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our team</a>
          <a className="link link-hover">
            faq<span className="lowercase">s</span>
          </a>
        </div>
        <div className="uppercase">
          <span className="footer-title">Company</span>
          <a className="link link-hover">Who we are</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Customer support</a>
        </div>
        <div className="uppercase">
          <span className="footer-title uppercase">reach out</span>
          <a className="link link-hover">PH: +1-865-984-1330</a>
          <a className="link link-hover">FAX: +1-865-322-9713</a>
          <a className="link link-hover">inquiry@global.com</a>
        </div>
      </footer>
  );
}

export default Footer