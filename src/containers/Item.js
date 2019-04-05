import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchArticle, showComments} from "../actions";
import {getComments, getItem, loadingArticle, loadingComments} from "../selectors";
import Comments from "../components/Comments";
import ToggleOpen from "../decorators/ToggleOpen";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    onClickCommentsButton = () => {
        const {showComments, toggleOpen, isOpen} = this.props;
        toggleOpen();
        !isOpen && showComments(this.props.match.params.id);
    };

    contentItem() {
        const {article: {title, body}, comments, isOpen, loadingComments} = this.props;
        const btnTitle = isOpen ? 'hide comments' : 'show all comments';
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button className="btn" onClick={this.onClickCommentsButton}>
                    {btnTitle}
                </button>
                    {!loadingComments && isOpen &&
                    comments.map(({body, email, id}) => {
                        return <Comments body={body} email={email} key={id}/>
                    })}
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.props.loadingArticle ? <h1>Loading...</h1> : this.contentItem()}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    article: getItem(state),
    loadingArticle: loadingArticle(state),
    loadingComments: loadingComments(state),
    comments: getComments(state)
});

const MapDispatchToProps = {
    fetchArticle,
    showComments
};

export default connect(MapStateToProps, MapDispatchToProps, null, {pure: false})(ToggleOpen(Item));
