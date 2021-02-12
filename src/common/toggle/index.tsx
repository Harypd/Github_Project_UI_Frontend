import React, { useEffect, useState } from 'react';
import { Theme } from '../../App';
import styles from './toggle.module.scss';

interface IProps {
  onToggle: (value: boolean) => void;
  theme: string;
}

const Toggle = (props: IProps) => {
  const [checked, setChecked] = useState(true);
  const onToggle = (e: any) => {
    setChecked(!checked);
    // Stopping the propagation of event
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    props.onToggle(checked);
  };

  useEffect(() => {
    const checkedByDefault = props.theme === Theme.dark;
    setChecked(checkedByDefault)
  }, [])
  const notifyChange = () => { }
  return (
    <span className={styles["switch"]} onClick={onToggle}>
      <input
        aria-label={`change to ${props.theme === Theme.dark ? Theme.dark : Theme.light} mode`}
        type="checkbox"
        checked={checked}
        onChange={notifyChange} />
      <span>
        <span className={`${styles["slider"]} ${styles["round"]}`}></span>
        <span className={styles['on-text']}>Light</span>
        <span className={styles['off-text']}>Dark</span>
      </span>
    </span>
  );
};

export default Toggle;