import styles from './index.css';
import { Link } from 'dva/router';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>lance hahaha</li>
        <li><Link to="/">index</Link></li>
        <li><Link to="/my-umi">my-umi</Link></li>
      </ul>
    </div>
  );
}
