'use client';

import { useState } from 'react';
import styles from './loginInput.module.css';

interface LoginInputProps {
    label: string;
    type?: string;
    name: string;
    placeholder?: string;
    errorMsg?: string;
    isPassword?: boolean;
}

export default function LoginInputComponent({ label, type = 'text', name, placeholder = '', errorMsg, isPassword = false }: LoginInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === 'password';

    const inputType = isPasswordType && showPassword ? 'text' : type;

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={`${styles.loginInputWrap}`}>
            <div className={styles.labelRow}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                {isPassword && (
                    <a href="#" className={styles.linkUtility}>
                        Forgot password?
                    </a>
                )}
            </div>
            <div className={`${styles.inputBox}`}>
                <input
                    className={`${styles.input} ${isPassword === true ? styles.passwordInp : ''}`}
                    type={inputType}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                />
                {isPasswordType && (
                    <button
                        type="button"
                        className={styles.eyeBtn}
                        onClick={handleTogglePassword}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            <span className={`${styles.eyeIcon} ${styles.eyeVisible}`}></span>
                        ) : (
                            <span className={`${styles.eyeIcon} ${styles.eyeHidden}`}></span>
                        )}
                    </button>
                )}
            </div>
            <span className={styles.errorMsg}>{errorMsg}</span>
        </div>
    );
}
