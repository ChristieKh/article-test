import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ContainerRow, Icons} from "./ArticlesListStyled";
import {connect} from "react-redux";
import {deleteItem, canEditItem} from "../../actions";

class ArticlesList extends Component {
    render() {
        const {deleteItem, canEditItem, item: {id, title, update}} = this.props;
        return (
            <ContainerRow className="row">
                {update ?
                    <li><input type="text" value={title}/></li> :
                    <Link to={`/item/${id}`}>
                        <li>{title}</li>
                    </Link>
                }
                <Icons>
                    <button onClick={() => canEditItem(id)}><i className="fas fa-edit"/></button>
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
    canEditItem
};


export default connect(MapStateToProps, MapDispatchToProps)(ArticlesList);