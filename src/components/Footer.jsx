import React from "react";

export default function Footer() {
  return (
    <footer id='main-footer' className='bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center py-4'>
            <h3>LoopLAB</h3>
            <p>Copyright &copy; <span id="year">{new Date().getFullYear()}</span></p>
			<button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">
				Contact Us
			</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
