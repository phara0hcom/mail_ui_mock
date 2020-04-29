import React from 'react';
import { ReactComponent as CalenderIcon } from '../../assets/images/icon_calender.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icon_search.svg';

import defaultClasses from './DateSearchBar.module.scss';
import SimpleButton from '../Buttons/SimpleButton';
import dayjs from 'dayjs';

export interface DateSearchBarProps {
  classNames?: {
    DateSearchBar?: string;
    input?: string;
    icon?: string;
    buttonIcon?: string;
  };
  section?: 'left' | 'right';
  showIcon?: boolean;
}

const DateSearchBar: React.SFC<DateSearchBarProps> = (props) => {
  const { classNames, section, showIcon } = props;
  const DateSearchBarClass = [
    defaultClasses.DateSearchBar,
    ...(section === 'left' ? [defaultClasses.DateSearchBarLeft] : []),
    ...(section === 'right' ? [defaultClasses.DateSearchBarRight] : []),
    ...(classNames && classNames!.DateSearchBar ? [classNames!.DateSearchBar] : [])
  ].join(' ');

  const inputClasses = [
    defaultClasses.input,
    ...(classNames && classNames!.input ? [classNames!.input] : [])
  ].join(' ');

  const iconClasses = [
    defaultClasses.icon,
    ...(classNames && classNames!.icon ? [classNames!.icon] : [])
  ].join(' ');

  const buttonIconClasses = [
    defaultClasses.buttonIcon,
    ...(classNames && classNames!.buttonIcon ? [classNames!.buttonIcon] : [])
  ].join(' ');

  const now = dayjs().format('YYYY-MM-DD');
  const from = dayjs().subtract(2, 'year').startOf('month').format('YYYY-MM-DD');

  return (
    <div className='flex'>
      <div className={DateSearchBarClass}>
        {showIcon ? <CalenderIcon className={iconClasses} /> : null}
        <div className={defaultClasses.calenderInputDiv}>
          <input className={inputClasses} value={from} type='date' />
        </div>
        <div className={defaultClasses.divider}>-</div>
        <div className={defaultClasses.calenderInputDiv}>
          <input className={inputClasses} value={now} type='date' />
        </div>
      </div>
      <SimpleButton section='right'>
        <SearchIcon className={buttonIconClasses} />
      </SimpleButton>
    </div>
  );
};

DateSearchBar.defaultProps = {
  showIcon: true
};

export default DateSearchBar;
