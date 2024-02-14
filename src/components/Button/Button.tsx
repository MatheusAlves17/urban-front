import { ButtonHTMLAttributes } from "react"

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import styles from './styles.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    loading?: boolean;
}

function Button({ children, loading, ...props }: IButtonProps) {
    return (
        <button className={styles.container} {...props}>
            {loading ?
                <AiOutlineLoading3Quarters color={'#F8f8f8'} className={styles.loading} />
                :
                <span className={styles.text}>
                    {children}
                </span>
            }
        </button>
    );
};

export { Button };