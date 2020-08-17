import React from 'react';
import {connect} from 'react-redux';
import {updateBestStories} from '../../redux/action';
import SingleItem from '../../components/SingleItem/SingleItem';

class BestStories extends React.Component {
    componentWillMount(){
        const bestStoriesUrl = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
        fetch(bestStoriesUrl)
        .then(res => res.json())
        .then( bestStories => {
            console.log('bestStories',{bestStories});
            bestStories = bestStories.slice(0,8);
            this.props.updateBestStories(bestStories)
        
        })

    }
    render() {
       const bestStories = this.props.bestStories;
        return(
            <div>
             
                 { bestStories.map(storyID => <SingleItem id={storyID} />) }
             
            </div>

        );
    }
}

const mapStateToProps = state => {
    return{
        bestStories: state.bestStories
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateBestStories: (bestStories) => dispatch(updateBestStories(bestStories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestStories);

