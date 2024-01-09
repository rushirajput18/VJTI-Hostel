import React from 'react';
import './css/SendComplaint.css'
const SendComplaint = () => {
  return (
    <section>
      <header>
        <h1>Hostel Complaint Form</h1>
        <p>
          Read below instructions before processing: <br />
          Make sure you fill in the fields where * is provided
        </p>
      </header>

      {/* Form */}
      <form action="">
        <article>
          <p>Name</p>
          <input type="text" required placeholder="Please enter your name" />
        </article>

        <article>
          <p>Block</p>
          <input type="text" placeholder='A/B/C/D/PG' />
        </article>

        <article>
          <p>Room Number</p>
          <input type="text" min="3" max="4" placeholder='Please enter your Room Number' required />
        </article>

        <article>
          <p>Mobile Number</p>
          <input type="text" minLength={10} placeholder='Please enter your Mobile Number' required />
        </article>

        <article>
          <p>Email ID</p>
          <input type="emailid" required placeholder="Please enter your email ID" />
        </article>

        {/* Checkbox Section */}
        <article>
          <p>Choose the issue type</p>
          <p>Check at least one box without fail</p>
          <input type="checkbox" id="c1" name="option1" value="overcharge" />
          <label htmlFor="c1">Missing Item</label>
          <br />
          <input type="checkbox" id="c2" name="option2" value="meterboardnotworking" />
          <label htmlFor="c2">Issue with electricity</label>
          <br />
          <input type="checkbox" id="c3" name="option3" value="closethemeter" />
          <label htmlFor="c3">Cleanliness Issue</label>
          <br />
          <input type="checkbox" id="c4" name="option4" value="hardcopynotprovided" />
          <label htmlFor="c4">Admission Query</label>
          <br />
          <input type="checkbox" id="c4" name="option4" value="hardcopynotprovided" />
          <label htmlFor="c4">Other</label>
          <br />
        </article>

       

        <article>
          <p>Describe your issue </p>
          <textarea name="description" id="" cols="30" rows="5"></textarea>
        </article>

        <article>
          <p>When are you available</p>
          <input type="datetime-local" value="datetime-local" />
        </article>

        <article>
          <button className='submitButton' type="submit">Submit</button>
          <button className='submitButton' type="reset">Reset</button>
        </article>
      </form>

      {/* Footer */}
      <footer>This form is developed by Hostel Commitee</footer>
    </section>
  );
}

export default SendComplaint;
