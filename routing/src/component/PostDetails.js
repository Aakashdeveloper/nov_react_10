import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">
                {props.match.params.topic} Details Page
            </div>
            <div className="panel-body">
               <p>{props.match.params.topic} is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
            </div>
        </div>
    )
}

export default PostDetails;