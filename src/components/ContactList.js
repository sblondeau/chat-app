import React from 'react';
import Contact from './Contact'

function ContactList(props) {

  const contacts = [
    {name: "Ronnie Matthews", avatar:"https://randomuser.me/api/portraits/men/86.jpg", online:true},
    {name: "Wanda Matthews", avatar:"https://randomuser.me/api/portraits/women/71.jpg"},
    {name: "Everett Neal", avatar:"https://randomuser.me/api/portraits/men/69.jpg", online:true},
    {name: "Aaron Gibson", avatar:"https://randomuser.me/api/portraits/men/30.jpg", online:true},
    {name: "Erica Lewis", avatar:"https://randomuser.me/api/portraits/women/63.jpg"},
  ];

  return (
    <div>
    {
      contacts.map(contact => (
        <Contact key={contact.name} name={contact.name} avatar={contact.avatar} online={contact.online}/>
      ))
    }
    </div>
  );
}

export default ContactList;
