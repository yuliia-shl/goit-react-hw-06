import { useSelector } from 'react-redux';
import Contacts from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const selectContacts = useSelector(state => state.contacts.items);
  const selectNameFilter = useSelector(state => state.filters.name);
  const filteredContacts = selectContacts.filter(item =>
    item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <Contacts
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
