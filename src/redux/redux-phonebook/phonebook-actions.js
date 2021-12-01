import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, removeContact, changeFilter };

export default actions;
