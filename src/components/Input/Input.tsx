import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
}

function Input({ label, error, ...props }: IInputProps) {
    return (
        <div className={styles.container} >
            {
                !!label && <label className={styles.label}>{label}</label>
            }
            <input className={styles.input} {...props} />
        </div>
    );
};

export { Input };