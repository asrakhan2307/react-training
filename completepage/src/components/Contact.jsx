import React from "react";
import blog from "../assets/blog.jpg";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact flex-columns">
        <div className="row">
          <div className="column">
            <div className="column-1">
              <img src={blog} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-light">
              <h2>Request Callback</h2>
              <form action="" className="callback-form">
                <div className="form-control">
                  <label for="name"></label>
                  <input type="text" name="name" id="name" placeholder="name" />
                </div>
                <div className="form-control">
                  <label for="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-control">
                  <label for="phone"></label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                  />
                </div>
                <input type="submit" value="Send" id="submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
