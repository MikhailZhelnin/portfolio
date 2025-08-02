import { forwardRef } from 'react'

import './styles.scss'

interface IStartMenuProps {
}

const StartMenu = forwardRef<HTMLDivElement, IStartMenuProps>(({ }, ref) => {
    return (
        <div ref={ref} className='startMenu'>StartMenu</div>
    )
})

export default StartMenu