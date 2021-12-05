import { useDeleteContactMutation } from '../../redux/redux-phonebook/phonebook-slice';
import styles from './ContactsListItem.module.css';

export const ContactsListItem = ({ name, id, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={styles.contactItem} key={id}>
      <p className={styles.text}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};
