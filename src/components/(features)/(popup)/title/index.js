import styles from './index.module.css'

export default function Title({ content, click }) {
    return (
        <div className={styles.header}>
            <div style={{ color: 'var(--text-secondary)', fontSize: 16, fontWeight: 700 }}>{content}</div>
            <button className={styles.closeBtn} onClick={click}>&times;</button>
        </div>
    )
}