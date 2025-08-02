import { useState, useEffect, useRef } from 'react'

import Button from '../../ui/Button/Button'
import StartMenu from './StartMenu/StartMenu'

import { icons } from '../../../assets/icons'

import './styles.scss'

const Start = () => {

    const [openedStartMenu, setOpenedStartMenu] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !menuRef.current?.contains(e.target as Node) &&
                !buttonRef.current?.contains(e.target as Node)
            ) {
                setOpenedStartMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='start'>
            <Button
                ref={buttonRef}
                title='Start'
                icon={icons.start}
                style={{ width: '105px', justifyContent: 'center', fontWeight: '600' }}
                isActive={openedStartMenu}
                onClick={() => setOpenedStartMenu(!openedStartMenu)}
            />
            {openedStartMenu && <StartMenu ref={menuRef} />}
        </div>
    )
}

export default Start