import React from "react";

export default function Contact() {
  return (
    <footer>
      <div className="contact">
        <h2>Contact</h2>
        <p>500 Terry Francois Street</p>
        <p>San Francisco, CA 94158</p>
        <p>Email : Info@mail.com</p>
        <p>Number : 404 201 200</p>
      </div>
      <div className="hours">
        <h2>OPENING HOURS</h2>
        <p>Monday - Friday 11am - 11pm</p>
        <p>Saturday - Sunday 10am - 12am</p>
      </div>
      <div className="find">
        <h2>Find Us</h2>
        <img
          src="https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/11474600/16x9/991/557/7f1f0270aceeea86ac49bd32cb9e4fe3/tr/rincon-hill--south-beach--south-market--san-francisco-google-map.png"
          alt=""
        />
      </div>
    </footer>
  );
}
