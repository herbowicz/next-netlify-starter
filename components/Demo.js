import styles from './Demo.module.css'

export default function Demo() {
    return (
        <section className={styles.demo}>
            {[...Array(80)]
                .map((_, i) => (
                    <div className={styles.el} style={{
                        background: '#' + Math.floor(Math.random()*16777215).toString(16),
                        color: '#' + Math.floor(Math.random()*16777215).toString(16),
                        fontSize: (Math.floor(Math.random() * 9) + 1) + 'em'
                    }}>
                        {i + 1}
                    </div>
                ))
            }
        </section>
    )
}