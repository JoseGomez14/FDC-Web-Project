import React from 'react';
import qrcode from 'qrcode-generator';

const QrCode = ({ text, label }) => {
    let qr = qrcode(4, 'M');
    qr.addData(text);
    qr.make();
    const qrImgUrl = qr.createDataURL(8);
    return (<>
        <div style={{ textAlign: 'center', gap: '1rem', fontSize: '1.5rem'}}
            >
            <h4><b>{label}</b></h4>
            <img
                src={qrImgUrl} alt="Código QR" width='250px'
                style={{borderRadius: '0.8rem', margin: '1rem auto'}} /><br />
            <a
                style={{textDecoration: 'none', fontSize: '1.2rem'}}
                href={qrImgUrl} download >Descargar QR</a>
        </div>
    </>);
}

export default QrCode;