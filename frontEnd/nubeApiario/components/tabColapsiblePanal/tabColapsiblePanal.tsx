import React from 'react';

//import styles from './tabColapsiblePanal.css';

export interface tabColapsiblePanalProps {
  prop?: string;
}

export function tabColapsiblePanal({prop = 'default value'}: tabColapsiblePanalProps) {
  return <div >tabColapsiblePanal {prop}</div>;
}
