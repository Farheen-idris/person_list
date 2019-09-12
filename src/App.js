import React from "react";
import "./App.css";

function Person(props) {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
}

function PersonList() {
  const people = [
    {
      img: 23,
      name: "Farheen",
      job: "developer"
    },
    {
      img: 24,
      name: "Nisha",
      job: "Fashion Designer"
    },
    {
      img: 32,
      name: "Afreen",
      job: "developer"
    },
    {
      img: 41,
      name: "Pooja",
      job: "Artist"
    },
    {
      img: 52,
      name: "Farheen",
      job: "developer"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />;
      <Person person={people[1]} />;
      <Person person={people[2]}>
        she is responsible for the design, testing and maintenance of software
        programs for computer operating systems or applications, such as word
        processing or database management systems.
      </Person>
      ;
      <Person person={people[3]} />;
      <Person person={people[4]} />;
    </section>
  );
}

function App() {
  return <PersonList />;
}

export default App;
