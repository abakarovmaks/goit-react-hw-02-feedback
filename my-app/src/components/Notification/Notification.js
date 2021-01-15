import React from 'react';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <div className={styles.notification}>{message}</div>;
}
