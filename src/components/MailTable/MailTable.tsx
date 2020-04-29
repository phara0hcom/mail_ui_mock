import React, { useState } from 'react';

import MaxLengthCell from './MaxLengthCell';
import ToCell from './ToCell';
import DateCell from './DateCell';

import logoImg from '../../assets/images/logo.png';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon_arrow01.svg';

import defaultClasses from './MailTable.module.scss';

export type MailObj = { from: string; to: string[]; subject: string; date: number };

export type MailArr = Array<MailObj>;

type SortTypes = 'from' | 'to' | 'subject' | 'date';

export interface MailTableProps {
  mails: MailArr | [];
}

const MailTable: React.SFC<MailTableProps> = (props) => {
  const [sortBy, setSortBy] = useState('date');
  const [sortByDir, setSortByDir] = useState('des');
  const { mails } = props;
  const {
    table,
    selected,
    arrowDown,
    arrowUp,
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

  const onSortBy = (sortHeader: SortTypes) => () => {
    if (sortBy === sortHeader) {
      setSortByDir(sortByDir === 'dec' ? 'ase' : 'dec');
    } else {
      setSortBy(sortHeader);
      setSortByDir('dec');
    }
  };

  const sortArrowClass = sortByDir === 'dec' ? arrowDown : arrowUp;
  const sortArrow = <ArrowIcon className={sortArrowClass} />;

  return (
    <div className={tableSection}>
      <div className={['sectionWithP', status].join(' ')}>
        Results: <span className={statusNumber}>{mails.length}</span>mail(s)
      </div>
      {mails.length > 0 ? (
        <table className={table}>
          <thead>
            <tr>
              <th
                onClick={onSortBy('from')}
                {...(sortBy === 'from' ? { className: selected } : {})}
              >
                From {sortBy === 'from' ? sortArrow : null}
              </th>
              <th onClick={onSortBy('to')} {...(sortBy === 'to' ? { className: selected } : {})}>
                To {sortBy === 'to' ? sortArrow : null}
              </th>
              <th
                onClick={onSortBy('subject')}
                {...(sortBy === 'subject' ? { className: selected } : {})}
              >
                Subject {sortBy === 'subject' ? sortArrow : null}
              </th>
              <th
                onClick={onSortBy('date')}
                {...(sortBy === 'date' ? { className: selected } : {})}
              >
                Date {sortBy === 'date' ? sortArrow : null}
              </th>
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
