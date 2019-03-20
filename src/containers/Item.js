import React, {Component} from 'react';
import {connect} from "react-redux";
import {clearItem, fetchArticle, showComments} from "../actions";
import {getComments, getItem} from "../selectors";
import Comments from "../components/Comments";

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearItem();
    }

    isLoading(obj) {
        return Object.keys(obj).length === 0;
    }

    contentItem() {
        const {article: {title, body}, comments, showComments} = this.props;
        const loading = this.isLoading(comments);
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button className="btn" onClick={() => showComments(this.props.match.params.id)}>
                    Show all comments
                </button>
                {!loading &&
                comments.map(({body, email}, index) => {
                    return <Comments body={body} email={email} key={index}/>
                })}
            </div>
        )
    }

    render() {
        const loading = this.isLoading(this.props.article);
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

export default connect(MapStateToProps, MapDispatchToProps)(Item);
