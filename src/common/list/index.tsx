import React, { BaseSyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../input';
import RepositoryCard from '../repository-card';
import styles from './list.module.scss';

interface IListProps {
  className?: string;
  data: Array<any> | null;
}

// Rendering the list of repositories in the application
const List = ({ className, data }: IListProps) => {
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState<any>(data);

  const { t } = useTranslation();
  if (!data) return null;
  const onTextChange = (event: BaseSyntheticEvent) => {
    console.log(event.target.value);
    setFilterText(event.target.value)
    const filter = data.filter(d => d.node.name.indexOf(event.target.value) > -1);
    setFilteredData(filter);
  }

  return (
    <section>
      <div className={styles['search-container']}>
        <Input
          className={styles['search']}
          placeholder={t("filterSearch")}
          value={filterText}
          onChange={onTextChange}
          data-cy="user-search"
        />
      </div>

      <ul className={`${styles['repo-list']} ${className ?? ''}`}>
        {!filteredData.length ? (
          <div className={styles['no-data']} data-cy="no-data-found">
            {t("noDataFound")}
          </div>
        ) : (
            filteredData.map((d: any) => <RepositoryCard key={d.node.id} data={d.node} />)
          )}
      </ul>
    </section>
  );
};

export default List;
