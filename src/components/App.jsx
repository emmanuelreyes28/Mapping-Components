import React from "react";
import Card from "./Card";
import contacts from "../contacts";

//here contact is a paramter that is used to grab each object that it is passed and calls its key/value pairs
function createCard(contact){
  return (
    <Card
      id = {contact.id}
      key={contact.id} //key is a reserved key that is used internally and cannot be called to be rendered
      name = {contact.name}
      img = {contact.imgURL}
      tel = {contact.phone}
      email = {contact.email}
    />
  );
}

//the .map() function takes in another function as a parameter, this is known as functional programming
//map() acts as a for loop that iterates over each object in the contact arrays and grabs they keys inside 
//each object and assigns the value in the card component using the createCard() function

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
