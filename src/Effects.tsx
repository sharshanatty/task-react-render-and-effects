import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    function handleMessage(message: number) {
        setMessage(message);
    }

    useEffect(() => {
        setMessage(-1);
        subscribe(props.sourceId, handleMessage);
        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
