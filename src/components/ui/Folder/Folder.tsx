import { useEffect, useRef } from 'react'

import './styles.scss'

interface IFolderProps {
    id: number
    name: string
    image: string
    activeId: number | null
    seActiveId: React.Dispatch<React.SetStateAction<number | null>>
    onDoubleClick?: () => void
}

const Folder = ({ id, name, image, seActiveId, onDoubleClick, activeId }: IFolderProps) => {

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('.folder')) {
                seActiveId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <button
            ref={buttonRef}
            className={activeId && activeId === id ? 'folder folder--active' : 'folder'}
            onClick={() => seActiveId(id)}
            onDoubleClick={onDoubleClick}
        >
            <div className='folder__icon'>
                <img src={image} alt={name} />
            </div>
            <div className='folder__name'>
                <span>{name}</span>
            </div>
        </button>
    )
}

export default Folder