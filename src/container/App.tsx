import React from 'react';
import DateSearchBar from '../components/DateSearchBar/DateSearchBar';

import './App.css';
import MailTable from '../components/MailTable/MailTable';
import { mockMails } from '../mock/mails';

function App() {
  return (
    <div className='App'>
      <header className='section'>
        <DateSearchBar section='left' />
      </header>
      <section className='sectionMail'>
        <MailTable mails={mockMails()} />
      </section>
    </div>
  );
}

export default App;
