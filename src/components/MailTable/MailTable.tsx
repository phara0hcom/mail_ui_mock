import React, { useState, useEffect } from 'react';

import DateCell from './DateCell';

import logoImg from '../../assets/images/logo.png';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon_arrow01.svg';
import { ReactComponent as MailIcon } from '../../assets/images/icon_mail_sp.svg';
import { ReactComponent as ArrowNextIcon } from '../../assets/images/icon_arrow02.svg';
import { ReactComponent as AttachIcon } from '../../assets/images/icon_clip.svg';

import classes from './MailTable.module.scss';
import ShowTemporaryBody from './ShowTemporaryBody';

export type MailObj = {
  from: string;
  to: string[];
  subject: string;
  date: number;
  hasAttachment?: boolean;
};

export type MailArr = Array<MailObj>;

type SortTypes = 'from' | 'to' | 'subject' | 'date';

export interface MailTableProps {
  mails: MailArr | [];
}
let loaded = false;

const MailTable: React.SFC<MailTableProps> = (props) => {
  const { mails } = props;
  const [showBody, setShowBody] = useState([] as boolean[]);

  useEffect(() => {
    if (!loaded && mails.length > 0) {
      const newShowBody: boolean[] = [];
      mails.forEach((el, index) => {
        newShowBody.push(showBody[index] ?? false);
      });
      setShowBody(newShowBody);
      loaded = true;
    }
  }, [mails, showBody]);

  useEffect(() => {
    return () => {
      loaded = false;
    };
  }, []);

  const [sortBy, setSortBy] = useState('date');
  const [sortByDir, setSortByDir] = useState('des');

  const onSortBy = (sortHeader: SortTypes) => () => {
    if (sortBy === sortHeader) {
      setSortByDir(sortByDir === 'dec' ? 'ase' : 'dec');
    } else {
      setSortBy(sortHeader);
      setSortByDir('dec');
    }
  };

  const onShowBody = (index: number) => () => {
    const newShowBody = [...showBody];
    newShowBody[index] = !newShowBody[index];

    setShowBody(newShowBody);
  };

  const sortArrowClass = sortByDir === 'dec' ? classes.arrowDown : classes.arrowUp;
  const sortArrow = <ArrowIcon className={sortArrowClass} />;

  return (
    <div className={classes.tableSection}>
      <div className={['sectionWithP', classes.status].join(' ')}>
        Results: <span className={classes.statusNumber}>{mails.length}</span>mail(s)
      </div>
      {mails.length > 0 ? (
        <table className={classes.table}>
          <thead>
            <tr>
              <th
                className={classes.fromRow}
                onClick={onSortBy('from')}
                {...(sortBy === 'from' ? { className: classes.selected } : {})}
              >
                From {sortBy === 'from' ? sortArrow : null}
              </th>
              <th
                className={classes.toRow}
                onClick={onSortBy('to')}
                {...(sortBy === 'to' ? { className: classes.selected } : {})}
              >
                To {sortBy === 'to' ? sortArrow : null}
              </th>
              <th
                className={classes.subjectRow}
                onClick={onSortBy('subject')}
                {...(sortBy === 'subject' ? { className: classes.selected } : {})}
              >
                Subject {sortBy === 'subject' ? sortArrow : null}
              </th>
              <th
                className={classes.dateRow}
                onClick={onSortBy('date')}
                {...(sortBy === 'date' ? { className: classes.selected } : {})}
              >
                Date {sortBy === 'date' ? sortArrow : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {(mails as Array<MailObj>).map((el: MailObj, index: number) => (
              <React.Fragment key={`mailTableRow${index}`}>
                <tr onClick={onShowBody(index)}>
                  <MailIcon className={classes.mailIcon} />
                  <td className={[classes.fromCell, classes.fromRow].join(' ')}>{el.from}</td>
                  <td className={[classes.toCell, classes.toRow].join(' ')}>{el.to.join(', ')}</td>
                  <td className={[classes.subjectCell, classes.subjectRow].join(' ')}>
                    <div className={classes.subjectText}>{el.subject}</div>
                    {el.hasAttachment ? <AttachIcon className={classes.attachIcon} /> : null}
                  </td>
                  <td className={[classes.dateCell, classes.dateRow].join(' ')}>
                    <div>
                      <DateCell date={el.date} />
                    </div>
                    <ArrowNextIcon className={classes.nextIcon} />
                  </td>
                </tr>
                <tr
                  className={[
                    classes.bodyText,
                    ...(showBody[index] ? [classes.showBodyText] : [])
                  ].join(' ')}
                >
                  <td colSpan={4}>
                    <ShowTemporaryBody />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={classes.emptyMails}>
          <img className={classes.logoClass} src={logoImg} alt='logo' />
        </div>
      )}
    </div>
  );
};

MailTable.defaultProps = {
  mails: []
};

export default MailTable;
