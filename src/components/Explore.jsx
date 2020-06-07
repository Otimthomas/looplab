import React from "react";
import {FaCheck} from "react-icons/fa";

const Explore = () => {
  return (
    <>
      <section id='explore-head-section'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center py-5'>
              <h1 className='display-4'>Explore</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                sunt sequi laborum, labore sed voluptatum. Necessitatibus sint
                dolores in cupiditate?
              </p>
              <a href='#' className='btn btn-outline-secondary'>
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='explore-section' className='bg-light text-muted py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src='img/explore-section1.jpg'
                alt=''
                className='img-fluid mb-3 rounded-circle'
              />
            </div>
            <div className='col-md-6'>
              <h3>Explore & Connect</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                iusto ipsa voluptates iure ea expedita error accusantium odio
                autem mollitia.
              </p>
              <div className='d-flex'>
                <div className='explore-icon p-4 align-self-start'>
                  <FaCheck />
                </div>
                <div className='p-4 align-self-end'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aperiam praesentium nesciunt tempore? Omnis, numquam.
                </div>
              </div>
              <div className='d-flex'>
                <div className='explore-icon p-4 align-self-start'>
                  <FaCheck />
                </div>
                <div className='p-4 align-self-end'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aperiam praesentium nesciunt tempore? Omnis, numquam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
