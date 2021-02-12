import styles from './loader.module.scss';

interface ILoaderProps {
  className?: string;
}

// Rendering the loader
// Used for fetching the repositories from the GitHub server
const Loader = ({ className }: ILoaderProps) => {
  return <div className={`${styles['loader']} ${className ?? ''}`} data-cy="loader"></div>;
};

export default Loader;
