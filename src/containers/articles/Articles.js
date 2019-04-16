import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchArticles, doShowModal} from "../../actions";
import {getArticles, loadingArticles, showModalWindow} from "../../selectors";
import ArticlesList from "../../components/articles-list/ArticlesList";
import Modal from "../../components/modal/Modal";
import {Button, Heading} from "./ArticlesStyled";


class Articles extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const {articles, loadingArticles, showModal, doShowModal} = this.props;
        return (
            <div className="container">
                <Heading>
                    <h1>Articles</h1>
                    <Button className="button-primary" onClick={doShowModal}>Add article</Button>
                </Heading>
                {!loadingArticles && articles.map((item) => {
                    return <ArticlesList item={item} key={item.id}/>
                })}
                {showModal && <Modal/>}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    articles: getArticles(state),
    loadingArticles: loadingArticles(state),
    showModal: showModalWindow(state)
});

const MapDispatchToProps = {
    fetchArticles,
    doShowModal
};

export default connect(MapStateToProps, MapDispatchToProps)(Articles);
