import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchArticles} from "../actions";
import {getArticles} from "../selectors";
import {Link} from "react-router-dom";

class Articles extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles(item, index) {
        return (
            <div className="row" key={index}>
                <div className="">
                    <Link to={`/item/${item.id}`}>
                        <li className="">{item.title}</li>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        const {articles} = this.props;
        const loading = Object.keys(articles).length !== 0;
        return (
            <div className="container">
                <h1>Articles</h1>
                {loading && articles.map((item, index) => this.renderArticles(item, index))}
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
