import { useState } from 'react'

import Folder from '../ui/Folder/Folder'
import Modal from '../ui/Modal/Modal'

import { icons } from '../../assets/icons'

import './styles.scss'

interface IFolder {
    id: number
    name: string
    icon: string
}

const folders: IFolder[] = [
    { id: 1, name: "My computer", icon: icons.my_computer },
    { id: 2, name: "Recycle Bin", icon: icons.bin },
    { id: 3, name: "About Me", icon: icons.folder },
    { id: 4, name: "Projects", icon: icons.folder },
    { id: 5, name: "Contacts", icon: icons.folder },
]

const Desktop = () => {

    const [activeId, setActiveId] = useState<number | null>(null);
    const [isOpenedModal, setIsOpenedModal] = useState(false);

    return (
        <div className='desktop'>
            {folders.map(folder => (
                <Folder
                    key={folder.id}
                    name={folder.name}
                    image={folder.icon}
                    id={folder.id}
                    activeId={activeId}
                    seActiveId={setActiveId}
                    onDoubleClick={() => setIsOpenedModal(true)}
                />
            ))}
            <Modal isOpened={isOpenedModal} close={() => setIsOpenedModal(false)}>fdfk</Modal>
        </div>
    )
}

export default Desktop