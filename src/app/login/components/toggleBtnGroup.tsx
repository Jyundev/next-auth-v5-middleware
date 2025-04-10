'use client';

import { useState } from 'react';
import styles from './toggleBtnGroup.module.css';

export default function ToggleButtonGroup() {
    const [selectedRole, setSelectedRole] = useState<'Teacher' | 'Student' | 'Parent'>('Teacher');

    const handleClick = (role: 'Teacher' | 'Student' | 'Parent') => {
        setSelectedRole(role);
    };

    return (
        <div className={styles.toggleBtnBox}>
            <button type="button" className={`${styles.toggleBtn} ${selectedRole === 'Teacher' ? styles._active : ''}`} onClick={() => handleClick('Teacher')}>
                Teacher
            </button>
            <button type="button" className={`${styles.toggleBtn} ${selectedRole === 'Student' ? styles._active : ''}`} onClick={() => handleClick('Student')}>
                Student
            </button>
            <button type="button" className={`${styles.toggleBtn} ${selectedRole === 'Parent' ? styles._active : ''}`} onClick={() => handleClick('Parent')}>
                Parent
            </button>
        </div>
    );
}
