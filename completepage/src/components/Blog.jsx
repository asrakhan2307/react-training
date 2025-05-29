import React from "react";
import blog from "../assets/blog.jpg";

const Blog = ({ members }) => {
  return (
    <div>
      <section id="blog" className="blog flex-columns flex-reverse">
        <div className="row ">
          <div className="column">
            <div className="column-1">
              <img src={blog} alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-2 bg-primary">
              <h2>Blog Post One</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                natus tempore aperiam ea quod quibusdam eligendi pariatur quas
                dolor id?
              </p>
              <a href="blog.html" className="btn btn-outline">
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team section-padding">
        <div className="flex-items">
          {members.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
