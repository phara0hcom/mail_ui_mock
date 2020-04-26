import React from 'react';
import defaultClasses from './MailTable.module.scss';

import logoImg from '../../assets/images/logo.png';

export interface MailObj {
  from: string;
  to: [string];
  subject: string;
  date: number;
}

export interface MailTableProps {
  mails: [MailObj] | [];
}

const MailTable: React.SFC<MailTableProps> = (props) => {
  const { mails } = props;
  const {
    header,
    table,
    status,
    emptyMails,
    statusNumber,
    tableSection,
    logoClass,
    fromCell,
    toCell,
    subjectCell,
    dateCell
  } = defaultClasses;

  return (
    <div className={tableSection}>
      <div className={status}>
        Results: <span className={statusNumber}>{mails.length}</span>mail(s)
      </div>
      {mails.length > 0 ? (
        <table className={table}>
          <thead>
            <tr>
              <th className={header}>From</th>
              <th className={header}>To</th>
              <th className={header}>Subject</th>
              <th className={header}>Date</th>
            </tr>
          </thead>
          <tbody>
            {(mails as Array<MailObj>).map((el: MailObj, index: number) => (
              <tr key={`mailTableRow${index}`}>
                <td className={fromCell}>{el.from}</td>
                <td className={toCell}>{el.to}</td>
                <td className={subjectCell}>{el.subject}</td>
                <td className={dateCell}>{el.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={emptyMails}>
          <img className={logoClass} src={logoImg} alt='logo' />
        </div>
      )}
    </div>
  );
};

MailTable.defaultProps = {
  mails: []
};

export default MailTable;
