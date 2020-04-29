import React from 'react';
import MaxLengthCell from './MaxLengthCell';

import defaultClasses from './ToCell.module.scss';

export interface ToCellProps {
  cellValues: string[];
  maxLength: number;
  classes?: {
    toMail?: string;
    numberCounter?: string;
    toCell?: string;
  };
}

const ToCell: React.SFC<ToCellProps> = (props) => {
  const { cellValues, maxLength, classes } = props;

  const toCell = [
    defaultClasses.toCell,
    ...(classes && classes!.toCell ? [classes!.toCell] : [])
  ].join(' ');

  const toMails = [
    defaultClasses.toMails,
    ...(classes && classes!.toMail ? [classes!.toMail] : [])
  ].join(' ');

  const numberCounter = [
    defaultClasses.numberCounter,
    ...(classes && classes!.numberCounter ? [classes!.numberCounter] : [])
  ].join(' ');

  let maxLengthForCell = maxLength;
  let lastLength = 0;
  return (
    <div className={toCell}>
      <div className={toMails}>
        {cellValues.map((el, index) => {
          if (index > 1) return null;
          const nextLength = maxLengthForCell - lastLength;
          maxLengthForCell = nextLength > 0 ? nextLength : 0;
          console.log({ maxLengthForCell, lastLength });
          lastLength += el.length;
          return (
            <MaxLengthCell key={`toMailDiv-${index}`} maxLength={maxLengthForCell} cellValue={el} />
          );
        })}
      </div>
      {cellValues.length > 1 ? (
        <div className={numberCounter}>{`+${cellValues.length - 1}`}</div>
      ) : null}
    </div>
  );
};

export default ToCell;
