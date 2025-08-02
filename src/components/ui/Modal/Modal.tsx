import React, { useEffect } from 'react';

import './styles.scss';

interface IModalProps {
    children: React.ReactNode
    isOpened: boolean
    close: () => void
    style?: React.CSSProperties
}

const Modal = ({ children, isOpened, close, style }: IModalProps) => {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('modal')) {
            close();
        }
    };

    useEffect(() => {
        if (isOpened) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpened]);

    return (
        <>
            {isOpened && (
                <div className='modal' onClick={handleClick}>
                    <div className='modal__content' style={{ ...style }} >
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal