import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import arrow from "/src/assets/arrow.svg";
import java from "/src/assets/java.svg";
import javascript from "/src/assets/javascript.svg";
import python from "/src/assets/python.svg";
import typescript from "/src/assets/typescript.svg";
import skills from "/src/assets/skills.svg";
import career from "/src/assets/career.svg";
import education from "/src/assets/education.svg";

//qualifications as the parent component, calling button pages seperately
function Skills() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Skills
          </Card.Title>
          <div className="lang-box">
              <img className="languages" src={java}></img>
              <img className="languages" src={javascript}></img>
              <img className="languages" src={python}></img>
              <img className="languages" src={typescript}></img>
          </div>
          <Card.Text>
          I have experience using Python, C and Java in an academic context. In addition, Javascript and Typescript as a hobbyist.
          </Card.Text>
          <Card.Text>
          Aside from my degree, I’ve developed websites such as my monkey generator website using HTML, CSS and Javascript, and this current website, using Vite, React and Bootstrap. 
          </Card.Text>
          <Card.Text>
          You can find out more on my GitHub.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

function Experience() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Professional Experience</Card.Title>
          <Card.Subtitle>June 2019/February 2023</Card.Subtitle>
          <Card.Subtitle>Team Member - Shampoo N’ Things Botany/Rodney Wayne Botany</Card.Subtitle>
        <Card.Text>
        As a sales assistant, I helped provide and recommend the perfect products to suit a client’s needs, front desk/cash register handling, cleaning and stock management. As well as salon hand and receptionist at Rodney Wayne Botany handling phone calls and bookings.
          </Card.Text>
          <Card.Subtitle>May 2023/Current</Card.Subtitle>
          <Card.Subtitle>Experience Host - Skytower</Card.Subtitle>
          <Card.Text>
          Working as part of a larger team in the floor operations for the Auckland Sky Tower, ensuring that customer service expectations are met, and activities are performed in a timely and efficient manner.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

function Education() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Subtitle>2022/Current</Card.Subtitle>
          <Card.Subtitle>Bachelor of Computer Science</Card.Subtitle>
        <Card.Text>
    I am currently studying a Bachelor of Computer Science at University of Auckland, with an average mark of 7.8.
          </Card.Text>
          <Card.Subtitle>2016/2021</Card.Subtitle>
          <Card.Subtitle>NCEA 1, 2 and 3 - Botany Downs Secondary College.</Card.Subtitle>
          <Card.Text>
    I have completed my NCEA level 1 through to 3.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

//button group and card for qualification section
function Select() {
    const [selected, setSelected]=useState(0);
    const [buttonHover, setButton]=useState(0);

    return (
        <div className="container snap select-backing">
            <div className='row' >
                <div className="arrow">
                  <a href="#qual">
                      <img src={arrow} className="arrow-style"/>
                  </a>
                </div>
          </div>
            <div className="row" id="qual">
                <div className="but-group">
                    <button className={selected === 0 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick={() => setSelected(0)} onMouseEnter={() => setButton(1)} onMouseLeave={() => setButton(0)}>{(buttonHover === 1 || selected === 0)? "Skills":<img className="btn-icons" src={skills}></img>}</button>
                    <button className={selected === 1 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick={() => setSelected(1)} onMouseEnter={() => setButton(2)} onMouseLeave={() => setButton(0)}>{(buttonHover === 2 || selected === 1)? "Professional Experience":<img className="btn-icons" src={career}></img>}</button>
                    <button className={selected === 2 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick={() => setSelected(2)} onMouseEnter={() => setButton(3)} onMouseLeave={() => setButton(0)}>{(buttonHover === 3 || selected === 2)? "Education":<img className="btn-icons" src={education}></img>}</button>
                </div>
                <div className="qual-backing">
                        {selected === 0 && Skills()} 
                        {selected === 1 && Experience()}
                        {selected === 2 && Education()}
                </div>
            </div>
        </div>
    );
}

export default Select;