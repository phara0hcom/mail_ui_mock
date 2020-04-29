import React from 'react';
import dayjs from 'dayjs';

export interface DateCellProps {
  date: number;
}

const DateCell: React.SFC<DateCellProps> = (props) => {
  const { date } = props;
  const now = dayjs();
  const date2 = dayjs(date * 1000);
  const diffInDays = now.diff(date2, 'day');
  const diffInYears = now.diff(date2, 'year');
  console.log({ diffInDays, diffInYears });
  if (diffInDays === 0) return <>{date2.format('H:mm')}</>;
  if (diffInYears === 0) return <>{date2.format('MMM MM')}</>;
  return <>{date2.format('YYYY/MM/DD')}</>;
};

export default DateCell;
