import { forwardRef } from 'react'

import './styles.scss'

interface IStartMenuProps {
    someOtherProp?: string;
}

const StartMenu = forwardRef<HTMLDivElement, IStartMenuProps>(({ someOtherProp }, ref) => {
    return (
        <div ref={ref} className='startMenu'>StartMenu</div>
    )
})

export default StartMenu