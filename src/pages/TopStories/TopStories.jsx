import React from 'react';
import {connect} from 'react-redux';
import {updateTopStories} from '../../redux/action';
import SingleItem from '../../components/SingleItem/SingleItem';

class TopStories extends React.Component {

    componentWillMount(){
        const topStoriesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        fetch(topStoriesUrl)
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then( topStories => {
                console.log('topStories',{topStories});
                topStories = topStories.slice(0,8);
                this.props.updateTopStories(topStories)
        
        })

    }
    render() {
       const topStories = this.props.topStories;
        return(
            <div>
             
                 {topStories.map((storyID) => (<SingleItem id={storyID} />)) }
             
            </div>

        );
    }
}

const mapStateToProps = state => {
    return{
        topStories: state.topStories
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateTopStories: (topStories) => dispatch(updateTopStories(topStories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);

