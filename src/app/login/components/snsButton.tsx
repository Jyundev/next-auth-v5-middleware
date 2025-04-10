'use client';

import { useState } from 'react';
import styles from './snsButton.module.css';

type Provider = 'Google';

interface SnsButtonProps {
    provider: Provider;
    onClick?: () => void;
}

const providerText: Record<Provider, string> = {
    Google: 'Continue with Google',
};

const providerClass: Record<Provider, string> = {
    Google: styles.google,
};

export default function SnsButton({ provider, onClick }: SnsButtonProps) {
    return (
        <button type="button" className={`${styles.btnSns} ${providerClass[provider]}`} onClick={onClick}>
            {providerText[provider]}
        </button>
    );
}
