import React from 'react';
const image = require('../../../images/lake.jpg');

class Image extends React.Component {
    render() {
        return <img src={image} alt=""/>
    }
}

export {Image};