import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jasim Uddin </span>
            from <span className="purple"> Jashore, Bangladesh.</span>
            <br />
            I have completed MBA in Marketing Department at University of
            Rajshahi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Free Hand Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technology
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
