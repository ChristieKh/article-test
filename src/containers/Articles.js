import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchArticles} from "../actions";
import {getArticles} from "../selectors";
import ArticlesList from "../components/ArticlesList";

class Articles extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        const {articles} = this.props;
        const loading = Object.keys(articles).length !== 0;
        return (
            <div className="container">
                <h1>Articles</h1>
                {loading && articles.map((item, index) => {
                    return <ArticlesList item={item} key={index}/>
                })}
            </div>
        )
    }
}

const MapStateToProps = state => ({
    articles: getArticles(state)
});

const MapDispatchToProps = {
    fetchArticles
};

export default connect(MapStateToProps, MapDispatchToProps)(Articles);
