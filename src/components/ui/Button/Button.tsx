import type React from 'react';

import './styles.scss';

interface IButtonProps {
    icon?: string
    title: string
    style?: React.CSSProperties
    ref?: React.Ref<HTMLButtonElement>
    isActive?: boolean
    onClick?: () => void
}

const Button = ({ icon, title, style, ref, isActive, onClick = () => { } }: IButtonProps) => {
    return (
        <button
            ref={ref}
            className={isActive ? 'button button--active' : 'button'}
            onClick={() => onClick()}
            style={{ ...style }}
        >
            {icon && <img className='button__icon' src={icon} />}
            <span className='button__title'>{title}</span>
        </button>
    );
};

export default Button;