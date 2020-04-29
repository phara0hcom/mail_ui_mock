import React from 'react';

import classes from './ShowTemporaryBody.module.scss';

const ShowTemporaryBody = () => {
  return (
    <>
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className={classes.grayBar} />
      <div className='flex'>
        <div className={[classes.grayImage, classes.leftOfText].join(' ')} />
        <div className={classes.nextToImage}>
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
          <div className={classes.grayBar} />
        </div>
      </div>
    </>
  );
};

export default ShowTemporaryBody;
