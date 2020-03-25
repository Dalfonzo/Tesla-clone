import React from 'react';
import classes from './verticalSpecs.module.scss';

const VerticalSpecs = props => {
  const generalStyle = {
    position: 'absolute',
    transform: 'translate(-10%, -50%)',
    width: '15%',
    top: '50%'
  };

  const leftStyle = {
    ...generalStyle,
    left: '10%'
  };

  const rigthStyle = {
    ...generalStyle,
    right: '10%'
  };

  const style = props.position === 'left' ? leftStyle : rigthStyle;

  return (
    <div className={classes.container} style={style}>
      <div className={classes.top}>
        <p className={classes.specsTitle}>{props.topTitle}</p>
        <p className={classes.specstSubTitle}>{props.topText}</p>
      </div>
      <div className={classes.mid}>
        <p className={classes.specsTitle}>{props.midTitle}</p>
        <p className={classes.specstSubTitle}>{props.midText}</p>
      </div>
      <div className={classes.bottom}>
        <p className={classes.specsTitle}>{props.bottomTitle}</p>
        <p className={classes.specstSubTitle}>{props.bottomText}</p>
      </div>
    </div>
  );
};

export default VerticalSpecs;
