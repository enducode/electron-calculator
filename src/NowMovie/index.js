const $ = require('jquery');
const React = require('react');

class NowMovie extends React.Component {
    constructor() {
        super();
        this.getMovieList();
    }
    getMovieList() {
        $.get('http://api.douban.com/v2/movie/in_theaters', (data) => {
            console.log(data);
        });      
    }
    render() {
        return <div className='react-app'>
            hello world
        </div>
    }
}

module.exports = NowMovie;