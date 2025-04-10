import styles from './modal.module.css';

export default function ModalComponent() {
    return (
        <div className={styles.layerModalWrap}>
            <div className={styles.modalWrap}>
                <div className={styles.modalHeader}>
                    <h3 className={styles.modalTit}>Permission Denied</h3>
                </div>
                <div className={styles.modalBody}>
                    <p className={styles.modalTxt}>Your login attempt was unsuccessful because it has not been approved by the administrator.</p>
                </div>
                <div className={styles.modalFooter}>
                    <div className={styles.btnBox}>
                        <button type="button" className={`${styles.btnBase} ${styles.btnSolid}`}>
                            Re-Request
                        </button>
                        <button type="button" className={`${styles.btnBase} ${styles.btnClear}`}>
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
