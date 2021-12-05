import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/redux-phonebook/phonebook-slice';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import LoadBox from '../Loader/Loader';

function ContactList({ filter }) {
  const { data, isFetching } = useFetchContactsQuery();
  const [contacts, setContacts] = useState([]);
  const [contactsList, setContastsList] = useState([]);

  useEffect(() => {
    setContacts(data);
    setContastsList(data);
  }, [data]);

  useEffect(() => {
    const filteredContactList = getFilteredContactList(contactsList, filter);
    setContacts(filteredContactList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const getFilteredContactList = (allContacts, filterValue) => {
    return allContacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(filterValue.toLocaleLowerCase()),
    );
  };

  return (
    <>
      {isFetching && <LoadBox />}

      <ul className={styles.list}>
        {contacts &&
          contacts.map(contact => (
            <ContactsListItem key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = ({ filter }) => ({
  filter: filter,
});

export default connect(mapStateToProps)(ContactList);
