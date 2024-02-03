import React, { useState } from "react";
import "./css/SendComplaint.css";
const SendComplaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    block: "",
    roomNumber: "",
    mobileNumber: "",
    email: "",
    issueType: "",
    description: "",
  });

  // const handleChange = (e) => {
  //   const { name, value, cid } = e.target;
  //   if (name === "issueType") {
  //     let arr = formData.name;
  //     arr[cid] = value;
  //     setFormData({
  //       ...formData,
  //       name: arr
  //     });
  //     return;
  //   }
  //   // console.log("*");
  //   // console.log(e.target);
  //   // console.log(e.target.value);
  //   // console.log(e.target.name);
  //   // console.log("*");
  //   setFormData({
  //     ...formData,
  //     name: value,
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/complaintsent/addcomplaint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Complaint submitted successfully!");
        // Reset the form after successful submission
        setFormData({
          name: "",
          block: "",
          roomNumber: "",
          mobileNumber: "",
          email: "",
          issueType: "",
          description: "",
          availability: "",
        });
      } else {
        // Handle errors, maybe show an error message
        console.error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };
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
      <form onSubmit={handleSubmit}>
        <article>
          <p>Name</p>
          <input
            type="text"
            required
            placeholder="Please enter your name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </article>

        <article>
          <p>Block</p>
          <input
            type="text"
            required
            placeholder="A/B/C/D/PG"
            onChange={handleChange}
            name="block"
            value={formData.block}
          />
        </article>

        <article>
          <p>Room Number</p>
          <input
            type="number4"
            placeholder="Please enter your Room Number"
            required
            onChange={handleChange}
            name="roomNumber"
            value={formData.roomNumber}
          />
        </article>

        <article>
          <p>Mobile Number</p>
          <input
            type="number"
            placeholder="Please enter your Mobile Number"
            required
            onChange={handleChange}
            name="mobileNumber"
            value={formData.mobileNumber}
          />
        </article>

        <article>
          <p>Email ID</p>
          <input
            type="email"
            required
            placeholder="Please enter your email ID"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </article>

        {/* Checkbox Section */}
        <article>
          <p>Issue Type</p>
          <input
            type="text"
            required
            placeholder="For Ex. Water Leak, Electricity Issue, Missing Item, Cleanliness Issue, etc"
            onChange={handleChange}
            name="issueType"
            value={formData.issueType}
          />
        </article>
        <article>
          <p>Describe your issue </p>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </article>

        <article>
          <button className="submitButton" type="submit">
            Submit
          </button>
          <button
            className="submitButton"
            type="reset"
            onClick={() => setFormData({ ...formData, issueType: [] })}
          >
            Reset
          </button>
        </article>
      </form>
      <footer>This form is developed by Hostel Commitee</footer>
    </section>
  );
};
export default SendComplaint;
