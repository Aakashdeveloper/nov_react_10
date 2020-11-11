import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                Post Page
            </div>
            <div className="panel-body">
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                <div>
                    <h4>JavaScript</h4>
                    <Link to="/post/JavaScript">Details</Link>
                </div>
                <div>
                    <h4>NodeJS</h4>
                    <Link to="/post/NodeJs">Details</Link>
                </div>
                <div>
                    <h4>ReactJs</h4>
                    <Link to="/post/ReactJs">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Post;