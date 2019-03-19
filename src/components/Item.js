import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchArticle, showComments} from "../actions";
import {getComments, getItem} from "../selectors";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    renderComments() {
        const {comments} = this.props;
        return (
            <div>
                {comments.map((comment, index) => {
                    return (
                        <Fragment key={index}>
                            {this.props.article.id === comment.postId &&
                            <div style={{borderBottom: "1px solid gray"}} key={index}>
                                <p style={{fontWeight: 500, marginBottom: "5px"}}>{comment.email} says:</p>
                                <span>{comment.body}</span>
                            </div>}
                        </Fragment>
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
    showComments
};

export default connect(MapStateToProps, MapDispatchToProps)(Item);
