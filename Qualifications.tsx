import { useState } from 'react';
import Card from 'react-bootstrap/Card';

//qualifications as the parent component, calling list group and pages seperately
function Skills() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Skills</Card.Title>
          <Card.Text>
          I have experience using C, Java, Javascript, Trypescript and Python. Aside from my degree, I’ve developed websites such as my monkey generator website using HTML, CSS and Javascript, and this current website, using Vite, React and Bootstrap. You can find out more on my GitHub.
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
    I am currently studying a Bachelor of Computer Science at University of Auckland, with an average mark of 7.8 and a focus on Python.
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


function Select() {
    const [selected, setSelected] = useState(0);

    return (
    <div className = "select-backing" id = "select">
        <div className = "container">
            <div className = "row qual">
                <div className = "but-group">
                    <button className = {selected === 0 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick = {() => setSelected(0)}>Overview & Skills</button>
                    <button className = {selected === 1 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick = {() => setSelected(1)}>Professional Experience</button>
                    <button className = {selected === 2 ? "btn btn-primary btn-lg active":"btn btn-primary"} onClick = {() => setSelected(2)}>Education</button>
                </div>
                <div className = "qual-backing">
                    <div className= "qual-text-backing">
                        {selected === 0 && Skills()}
                        
                        {selected === 1 && Experience()}
                        
                        {selected === 2 && Education()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Select;