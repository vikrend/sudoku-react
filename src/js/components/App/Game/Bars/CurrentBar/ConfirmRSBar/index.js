import React from 'react';
import {noEvents} from '../../../../../App/index.module.css'
import {bar, btn} from '../../../Bars/index.module.css'
import style from './index.module.css';

export const ConfirmRSBar = ({handlers}) => {
  const {handleRS, handleRSReject} = handlers;

  return (
    <div className={[style.component, bar].join(' ')}>
      <button className={[style.btn, btn].join(' ')} onClick={handleRS}>
        <svg className={[noEvents, style.btnImg].join(' ')}>
          <use xlinkHref={'./index.svg#confirm'} />
        </svg>
      </button>
      <button className={[style.btn, btn].join(' ')} onClick={handleRSReject}>
        <svg className={[noEvents, style.btnImg].join(' ')}>
          <use xlinkHref={'./index.svg#cancel'} />
        </svg>
      </button>
    </div>
  );
};
