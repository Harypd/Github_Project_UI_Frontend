import { useContext } from 'react';
import { ThemeContext } from '../../App';
import styles from './repository-card.module.scss';

export interface IRepositoryCard {
  data: {
    name: string;
    url: string;
  };
  className?: string;
}

// Repository card functionality
// On click on a particular repository card - a new tab with the GitHub url of the repo will open
const RepositoryCard = ({ data, className }: IRepositoryCard) => {
  return (
    <li className={styles['repository-list']}><a
      target="_blank"
      rel="noreferrer"
      aria-label={data.name}
      // className={`${styles['repository-card']} ${className ?? ''} ${styles[theme]}`}
      href={data.url}>
      <span className={styles['name']}>{data.name}</span>
    </a>
    </li>
  );
};

export default RepositoryCard;
