import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description, image, url}) => {
    return <Helmet>
        <title data-rh="true">{title}</title>
        {description && <meta
            name="description"
            content={description}
        />}
        <meta name="title" content={title} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image &&
            <meta property="og:image" content={image} />
        }
        {url &&
            <link rel="canonical" href={url} />
        }
    </Helmet>
}

export default MetaTags;