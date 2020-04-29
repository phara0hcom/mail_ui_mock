import React from 'react';
import defaultClasses from './MailTable.module.scss';

import logoImg from '../../assets/images/logo.png';
import MaxLengthCell from './MaxLengthCell';
import ToCell from './ToCell';
import DateCell from './DateCell';

export type MailObj = { from: string; to: string[]; subject: string; date: number };

export type MailArr = Array<MailObj>;

export interface MailTableProps {
  mails: MailArr | [];
}

const MailTable: React.SFC<MailTableProps> = (props) => {
  const { mails } = props;
  const {
    header,
    headerItem,
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
            <tr className={header}>
              <th className={headerItem}>From</th>
              <th className={headerItem}>To</th>
              <th className={headerItem}>Subject</th>
              <th className={headerItem}>Date</th>
            </tr>
          </thead>
          <tbody>
            {(mails as Array<MailObj>).map((el: MailObj, index: number) => (
              <tr key={`mailTableRow${index}`}>
                <td className={fromCell}>
                  <MaxLengthCell cellValue={el.from} maxLength={13} />
                </td>
                <td className={toCell}>
                  <ToCell maxLength={13} cellValues={el.to} />
                </td>
                <td className={subjectCell}>
                  <MaxLengthCell cellValue={el.subject} maxLength={60} />
                </td>
                <td className={dateCell}>
                  <DateCell date={el.date} />
                </td>
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
