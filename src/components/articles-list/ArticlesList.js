import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ContainerRow, Icons} from "./ArticlesListStyled";
import {connect} from "react-redux";
import {deleteItem} from "../../actions";

class ArticlesList extends Component {
    render() {
        const {deleteItem, item: {id, title}} = this.props;
        return (
            <ContainerRow className="row">
                    <Link to={`/item/${id}`}>
                        <li>{title}</li>
                    </Link>
                <Icons>
                    <button onClick={() => deleteItem(id)}><i className="fas fa-trash"/></button>
                </Icons>
            </ContainerRow>
        )
    }
}


const MapStateToProps = (state, ownProps) => ({
    item: ownProps.item,
});

const MapDispatchToProps = {
    deleteItem,
};


export default connect(MapStateToProps, MapDispatchToProps)(ArticlesList);