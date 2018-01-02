const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const NowMovie = require('./src/NowMovie/index');

ReactDOM.render(
    <NowMovie />,
    document.getElementById('app')
);