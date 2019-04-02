import React, {Component} from 'react';
import {connect} from "react-redux";
import {clearItem, fetchArticle, showComments} from "../actions";
import {getComments, getItem} from "../selectors";
import Comments from "../components/Comments";
import ToggleOpen from "../decorators/ToggleOpen";
import {isLoading} from "../utils/utils";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearItem();
    }
    contentItem() {
        const {article: {title, body}, comments, showComments, isOpen, toggleOpen} = this.props;
        let btnTitle;
        if (isOpen) {
            showComments(this.props.match.params.id);
            btnTitle = 'hide comments'
        } else btnTitle = 'show all comments';
        const loading = isLoading(comments);
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button className="btn" onClick={toggleOpen}>
                    {btnTitle}
                </button>
                {!loading && isOpen &&
                comments.map(({body, email}, index) => {
                    return <Comments body={body} email={email} key={index}/>
                })}
            </div>
        )
    }

    render() {
        const loading = isLoading(this.props.article);
        return (
            <div className="container">
                {!loading && this.contentItem()}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    article: getItem(state),
    comments: getComments(state)
});

const MapDispatchToProps = {
    fetchArticle,
    showComments,
    clearItem
};

export default connect(MapStateToProps, MapDispatchToProps)(ToggleOpen(Item));
