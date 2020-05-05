import React from 'react';
import { Dayjs } from 'dayjs';
import { ReactComponent as CalenderIcon } from '../../assets/images/icon_calender.svg';

import defaultClasses from './DatesSearchInput.module.scss';

export interface SearchInputProps {
  section: 'left' | 'right';
  classNames?: {
    DateSearchBar?: string;
    input?: string;
    icon?: string;
  };
  showIcon?: boolean;
  from: Dayjs;
  to: Dayjs;
}

const SearchInput: React.SFC<SearchInputProps> = (props) => {
  const { classNames, section, showIcon, from, to } = props;

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

  const fromValue = from.format('YYYY-MM-DD');
  const toValue = to.format('YYYY-MM-DD');

  return (
    <div className={DateSearchBarClass}>
      {showIcon ? <CalenderIcon className={iconClasses} /> : null}
      <div className={defaultClasses.calenderInputDiv}>
        <input className={inputClasses} value={fromValue} type='date' alt='From Date' />
      </div>
      <div className={defaultClasses.divider}>-</div>
      <div className={defaultClasses.calenderInputDiv}>
        <input className={inputClasses} value={toValue} type='date' alt='From Date' />
      </div>
    </div>
  );
};

SearchInput.defaultProps = {
  showIcon: true
};

export default SearchInput;
