import styles from './index.css';
import SelectLang from '../components/SelectLang';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}><SelectLang /></h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
