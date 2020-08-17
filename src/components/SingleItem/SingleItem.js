import React from 'react';
import {connect} from 'react-redux';
import {updateItemDetails} from '../../redux/action';


class SingleItem extends React.Component {

    constructor(state){
        super(state)
        this.state = {
            Item: {}
        }
    }
    componentWillMount() {

        const itemListID = this.props.id
        const filteredData = this.props.itemDetails.filter(item => item.id !== itemListID)
        console.log('filteredData',filteredData)
        if (filteredData.length === 1 ){
          this.setState({
              Item : filteredData
          })
        } 
        else {
          const itemDetailsUrl = `https://hacker-news.firebaseio.com/v0/item/${itemListID}.json?print=pretty`;
          fetch(itemDetailsUrl)
          .then((res) => { 
              return res.json()})
          .then( itemDetails => {

            this.props.updateItemDetails(itemDetails)
            this.setState({
              Item : itemDetails
            })
         })
        }
    }

    render() {
        const itemList =  this.props.itemDetails
        console.log(itemList)
        return(
            
                 <div>
                     {this.state.Item.title}    
                     {this.state.Item.by}  
                 </div>
        );
            
    }
}


const mapStateToProps = state => {
    return{
        itemDetails: state.itemList
    }
}



const mapDispatchToProps = dispatch => {
    return{
        updateItemDetails: (itemDetails) => dispatch(updateItemDetails(itemDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem);

