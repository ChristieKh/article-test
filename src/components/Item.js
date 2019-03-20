import React, {Component} from 'react';
import {connect} from "react-redux";
import {clearItem, fetchArticle, showComments} from "../actions";
import {getComments, getItem} from "../selectors";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearItem();
    }

    renderComments() {
        const {comments} = this.props;
        return (
            <div>
                {comments.map(({body, email}, index) => {
                    return (
                        <div style={{borderBottom: "1px solid gray"}} key={index}>
                            <p style={{fontWeight: 500, marginBottom: "5px"}}>{email} says:</p>
                            <span>{body}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    contentItem() {
        const {article: {title, body}, comments, showComments} = this.props;
        const loading = Object.keys(comments).length === 0;
        return (
            <div>
                <h1>Article</h1>
                <h3>{title}</h3>
                <p>{body}</p>
                <button className="btn" onClick={() => showComments(this.props.match.params.id)}>Show all comments
                </button>
                {!loading && this.renderComments()}
            </div>
        )
    }

    render() {
        const loading = Object.keys(this.props.article).length !== 0;
        return (
            <div className="container">
                {loading && this.contentItem()}
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

export default connect(MapStateToProps, MapDispatchToProps)(Item);
