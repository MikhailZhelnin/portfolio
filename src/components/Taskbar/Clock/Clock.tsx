import { useEffect, useState } from 'react'

import './styles.scss'

const Clock = () => {

    const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatted = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            setTime(formatted);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='clock'>{time}</div>
    )
}

export default Clock