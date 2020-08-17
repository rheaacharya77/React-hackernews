export const updateTopStories = (topStories) => {
    return{
        type: "UPDATE_TOPSTORIES",
        topStories: topStories
    }
}

export const updateBestStories = (bestStories) => {
    return{
        type: "UPDATE_BESTSTORIES",
        bestStories: bestStories
    }
}

export const updateNewStories = (newStories) => {
    return{
        type: "UPDATE_NEWSTORIES",
        newStories: newStories
    }
}

export const updateItemDetails = (itemDetails) => {
    return{
        type: "UPDATE_ITEMDETAILS",
        itemDetails: itemDetails
    }
}
