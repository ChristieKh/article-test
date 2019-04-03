import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchArticles} from "../actions";
import {getArticles, loadingArticles} from "../selectors";
import ArticlesList from "../components/ArticlesList";

class Articles extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const {articles, loadingArticles} = this.props;
        return (
            <div className="container">
                <h1>Articles</h1>
                {!loadingArticles && articles.map((item, index) => {
                    return <ArticlesList item={item} key={index}/>
                })}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    articles: getArticles(state),
    loadingArticles: loadingArticles(state)
});

const MapDispatchToProps = {
    fetchArticles
};

export default connect(MapStateToProps, MapDispatchToProps)(Articles);
