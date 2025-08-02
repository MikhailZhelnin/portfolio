import Button from '../ui/Button/Button'

import Start from './Start/Start'
import Clock from './Clock/Clock'

import { icons } from '../../assets/icons'

import './styles.scss'

const Taskbar = () => {
    return (
        <div className='taskbar'>
            <Start />
            <div className='taskList'>
                <Button
                    title='About Me'
                    icon={icons.folder}
                    style={{ paddingLeft: '10px', width: '300px', fontWeight: '400' }}
                />
            </div>
            <Clock />
        </div>
    )
}

export default Taskbar