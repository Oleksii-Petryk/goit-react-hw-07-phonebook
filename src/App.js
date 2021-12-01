import "./App.css";
import React from "react";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <div className="App">
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
