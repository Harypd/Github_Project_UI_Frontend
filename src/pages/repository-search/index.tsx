import React, { useContext, useState } from 'react';
import List from '../../common/list';
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORY } from './query';
import UserSearch from '../../components/user-search';
import Loader from '../../common/loader';
import styles from './repository-search.module.scss';
import { IRepositoryCard } from '../../common/repository-card';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../App';
import Header from '../../components/header';
import Input from '../../common/input';

/* 
  Component receives the list of users and with each user are the associated repositories
  We need to iterate over the users and fetch the repositories.
  While iterating, we also have to ignore the typename being 'Repository' which are returned in the response.
*/
const getRepositoryList = (data: any): Array<IRepositoryCard> | null => {
  const users = data?.search.edges;
  if (!users) return null;
  return users.reduce((acc: any, curr: any) => {
    if (curr.node.__typename === 'User') {
      return [...acc, ...curr.node.repositories?.edges];
    } else {
      return acc;
    }
  }, []);
};

function RepositorySearch() {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');

  // const [repositories, setRepositories] = useState('');
  const { error, loading, data } = useQuery(SEARCH_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { queryString: username },
    skip: !username,
  });
  // Showing error message using toast
  if (error) {
    toast('An error has occurred while processing your request! Please try again', {
      type: 'error',
    });
    return null;
  }
  const repositories = getRepositoryList(data);

  return (
    
    <section className={`${styles["main-container"]} ${styles[theme]}`}>
      <Header></Header>
      <UserSearch onUserSubmit={setUsername} />
      <main>
        {loading ? <Loader className={styles['loader']} /> : <List data={repositories} className={styles['user-list']} />}
      </main>
      </section>
    
  );
}

export default RepositorySearch;
