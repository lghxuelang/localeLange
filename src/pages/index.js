import styles from './index.css'
import Hello from '../components/Hello';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
           <Hello />
    </div>
  )
}
