import React, {Component} from 'react';
import {connect} from "react-redux";
import {clearItem, fetchArticle, showComments} from "../actions";
import {getComments, getItem, loadingArticle, loadingComments} from "../selectors";
import Comments from "../components/Comments";
import ToggleOpen from "../decorators/ToggleOpen";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearItem();
    }

    onClickCommentsButton = () => {
        const {showComments, toggleOpen} = this.props;
        showComments(this.props.match.params.id);
        toggleOpen();
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
                comments.map(({body, email}, index) => {
                    return <Comments body={body} email={email} key={index}/>
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
    showComments,
    clearItem
};

export default connect(MapStateToProps, MapDispatchToProps)(ToggleOpen(Item));
