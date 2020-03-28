import React from 'react';

import classes from './specs.module.scss';

const Specs = ({ title, leftList, rightList, heroImg }) => {
  const renderList = arr => {
    return arr.map(el => (
      <li key={el.title}>
        <span>{el.title}</span>
        {el.text}
      </li>
    ));
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={heroImg} alt="" />
      </div>
      <div className={classes.rightSide}>
        <p>
          <span>{title}</span> Specs
        </p>
        <div className={classes.buttonsContainer}>
          <button>performance</button>
          <button>long range plus</button>
        </div>
        <div className={classes.listWrapper}>
          <ul className={classes.leftList}>{renderList(leftList)}</ul>
          <ul className={classes.rightList}>{renderList(rightList)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Specs;
