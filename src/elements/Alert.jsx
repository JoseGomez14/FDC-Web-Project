import React, { useEffect } from 'react';

const Alert = ({ text, alertState, setAlertState }) => {

    useEffect(() => {
        let timer;
        if (alertState === true) {
            timer = setTimeout(() => {
                setAlertState(false);
            }, 3500);
        }

        return (() => {
            clearTimeout(timer)
        });
    }, [alertState, setAlertState]);

    if (alertState) {
        return (
            <article style={{position: 'fixed', left: '1rem', bottom: '1rem', zIndex: '120', backgroundColor: 'rgb(7, 34, 40)', color: '#f4f4f4', padding: '0 0.8rem', borderRadius: '0.8rem'}}>
                <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>{text}</p>
            </article>
        );
    } else {
        return (<></>);
    }
}

export default Alert;