import React from 'react';

export interface MaxLengthCellProps {
  cellValue: string;
  maxLength: number;
}

const MaxLengthCell: React.SFC<MaxLengthCellProps> = (props) => {
  const { cellValue, maxLength } = props;
  if (cellValue.length >= maxLength) {
    return <div>{`${cellValue.slice(0, maxLength)}...`}</div>;
  }
  return <div>{cellValue}</div>;
};

export default MaxLengthCell;
