import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext, Theme } from '../../App';
import Button from '../../common/button';
import Input from '../../common/input';
import Toggle from '../../common/toggle';
import styles from './user-search.module.scss';

interface ISearchProps {
  onUserSubmit: (username: string) => void;
}

const UserSearch = ({ onUserSubmit }: ISearchProps) => {
  // Taking in the translator from i18next package
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [text, setText] = useState('');
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      onUserSubmit(text);
    }
  };
  return (
    <section className={`${styles['container']} ${styles[theme]}`}>
      <form className={styles['form']} onSubmit={onFormSubmit} data-cy="user-form">
        <Input
          className={styles['search']}
          placeholder={t('searchInputPlaceholder')}
          value={text}
          onChange={onTextChange}
          data-cy="user-search"
        />
        <Button className={styles['search-button']} disabled={text.trim().length < 3} data-cy="user-submit">
          {t('searchText')}
        </Button>
      </form>
      <Toggle onToggle={() => toggleTheme()} theme={theme} />
    </section>
  );
};

export default UserSearch;
