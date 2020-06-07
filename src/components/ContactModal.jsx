import React from "react";

const ContactModal = () => {
  return (
    <div className='modal fade text-dark' id='contactModal'>
      <div className='modal-dialog'>
        <div className='modal-content p-4'>
          <div className='model-header'>
            <h5 className='modal-title'>Contact Us</h5>
            <button className='close' data-dismiss='modal'>
              &times;
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' class='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' class='form-control' />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea class='form-control' />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-primary btn-block'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
