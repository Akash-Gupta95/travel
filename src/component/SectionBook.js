import React from 'react'
import img from '../Images/book-img.png';
import "./SectionBook.css";

const SectionBook = () => {
  return (
    <section className="book" id="book">
        <div className="container main-text">
            <h1><span>B</span>ook</h1>
        </div>

        <div className="row">
            <div className="col-md-6 py-3 py-md-0">
                <div className="card">
                   <img src={img} alt="" />
                    
                </div>
            </div>

            <div className="col-md-6 py-3 py-md-0">
                <form action='#'>
                    <input type="text" className="form-control" placeholder='Where To' required />
                    <input type="text" className="form-control" placeholder='How Many' required />
                    <input type="date" className="form-control" placeholder='Arrivals' required />
                    <input type="date" className="form-control" placeholder='Leaving' required />
                    <textarea className='form-control' placeholder='Enter Your Name & Details' name="text" id="" cols="30" rows="5"></textarea>
                    <input type="submit" value="Book Now" className='submit'/>
                </form>
            </div>

        </div>
    </section>
  )
}

export default SectionBook