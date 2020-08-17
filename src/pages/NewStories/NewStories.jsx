import React from 'react';
import {connect} from 'react-redux';
import {updateNewStories} from '../../redux/action';
import SingleItem from '../../components/SingleItem/SingleItem';

class NewStories extends React.Component {
    componentWillMount(){
        const newStoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
        fetch(newStoriesUrl)
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then( newStories => {
            console.log('newStories',{newStories});
            newStories = newStories.slice(0,8);
            this.props.updateNewStories(newStories)

        
        })

    }
    render() {
       const newStories = this.props.newStories;
        return(
            <div>
             
                 { newStories.map(storyID => <SingleItem id={storyID} />) }
             
            </div>

        );
    }
}

const mapStateToProps = state => {
    return{
        newStories: state.newStories
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateNewStories: (newStories) => dispatch(updateNewStories(newStories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStories);

