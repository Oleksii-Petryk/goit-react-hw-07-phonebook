import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/redux-phonebook/phonebook-actions";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

function ContactList({ contacts, removeContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactItem} key={id}>
            <p className={styles.text}>{name}</p>
            <p className={styles.number}>{number}</p>
            <button
              className={styles.button}
              type="button"
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const getFilteredContactList = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = ({ items, filter }) => ({
  contacts: getFilteredContactList(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(actions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
