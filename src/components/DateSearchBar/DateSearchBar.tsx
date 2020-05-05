import React from 'react';
import dayjs from 'dayjs';

import SimpleButton from '../Buttons/SimpleButton';

import { ReactComponent as SearchIcon } from '../../assets/images/icon_search.svg';

import defaultClasses from './DateSearchBar.module.scss';
import DatesSearchInput from './DatesSearchInput';

export interface DateSearchBarProps {
  classNames?: {
    DateSearchBar?: string;
    input?: string;
    icon?: string;
    buttonIcon?: string;
  };
}

const DateSearchBar: React.SFC<DateSearchBarProps> = (props) => {
  const { classNames } = props;

  const buttonIconClasses = [
    defaultClasses.buttonIcon,
    ...(classNames && classNames!.buttonIcon ? [classNames!.buttonIcon] : [])
  ].join(' ');

  const now = dayjs();
  const fromDate = dayjs().subtract(2, 'year').startOf('month');

  return (
    <div className='flex'>
      <DatesSearchInput
        section='left'
        classNames={{
          ...(classNames?.DateSearchBar ? { DateSearchBar: classNames.DateSearchBar } : {}),
          ...(classNames?.input ? { input: classNames.input } : {}),
          ...(classNames?.icon ? { icon: classNames.icon } : {})
        }}
        to={now}
        from={fromDate}
      />
      <SimpleButton title='Search Button' section='right'>
        <SearchIcon className={buttonIconClasses} />
      </SimpleButton>
    </div>
  );
};

export default DateSearchBar;
