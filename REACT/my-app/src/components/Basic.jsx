import React from "react";
import Flower from "../assets/Flower.png";
import "../index.css";
function Basic() {
  return (
    <div>
      <h2>Khushi Sharma</h2>

      <img src={Flower} alt="Flower" width="200" height="200" />

      <h3>About Myself</h3>

      <p>
        My name is Khushi Sharma. I am a hardworking, honest, and
        self-motivated person who is always eager to learn new things. I enjoy
        improving my skills and taking on new challenges. I am responsible,
        punctual, and work well both independently and as part of a team.
      </p>

      <p>
        In my free time, I like learning about technology, exploring new ideas,
        and gaining knowledge through reading and the internet. My goal is to
        build a successful career, continue growing as a person, and make my
        family proud.
      </p>

      <p>
        I believe that dedication, a positive attitude, and continuous learning
        are the keys to success.
      </p>

      <h3>Skills</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <a href="mailto:khushi94575@gmail.com">Email</a>
    </div>
  );
}

export default Basic;