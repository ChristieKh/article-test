import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import styled from "styled-components";
import {fetchArticle, showComments} from "../actions";
import {getComments, getItem, loadingArticle, loadingComments} from "../selectors";
import CommentsList from "../components/CommentsList";
import ToggleOpen from "../decorators/ToggleOpen";
import CommentForm from "../components/CommentForm";


export const Button = styled.button`
    height: 38px;
    padding: 0 30px;
    width: 100%;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    background-color: ${({type}) => type === 'isOpen' ? '#84edb2' : 'transparent'}
`;

class Item extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.id);
    }

    onClickCommentsButton = () => {
        const {showComments, toggleOpen, isOpen} = this.props;
        toggleOpen();
        !isOpen && showComments(this.props.match.params.id);
    };

    showComments() {
        return (
            <Fragment>
                <CommentForm/>
                <CommentsList comments={this.props.comments}/>
            </Fragment>
        )
    }


    contentItem() {
        const {article: {title, body}, isOpen, loadingComments} = this.props;
        const btnTitle = isOpen ? 'hide comments' : 'show all comments';
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <Button type={`${isOpen && "isOpen"}`} onClick={this.onClickCommentsButton}>
                    {btnTitle}
                </Button>
                {!loadingComments && isOpen && this.showComments()}
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
