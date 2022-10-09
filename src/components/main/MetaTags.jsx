import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description }) => {
    return <Helmet>
        <title data-rh="true">{title}</title>
        {description && <meta
            name="description"
            content={description}
        />}
    </Helmet>
}

export default MetaTags;