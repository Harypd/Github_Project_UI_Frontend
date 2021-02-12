import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles['header']}>
      <h2 aria-label="Search for Repositories">{t('header')}</h2>
    </header>
  );
};

export default Header;
