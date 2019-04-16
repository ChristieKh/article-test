import React, {Component, createRef} from 'react';
import {Button, ButtonClose, ContainerModal, InputEmail, InputTitle, ModalCss, TextArticle} from "./ModalStyled";
import {doNotShowModal, addArticle} from "../../actions";
import {showModalWindow} from "../../selectors";
import {connect} from "react-redux";
import {isValidation} from "../../utils";

class Modal extends Component {

    state = {
        email: "",
        title: "",
        body: "",
    };

    emailRef = createRef();
    titleRef = createRef();
    bodyRef = createRef();


    handleChange = () => {
        this.setState({
            email: this.emailRef.current.value,
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
        })
    };

    onSave = () => {
        const {email, title, body} = this.state;
        const {addArticle, doNotShowModal} = this.props;
        addArticle(email, title, body);
        doNotShowModal();
    };

    buttonTypeChange() {
        const {email, title, body} = this.state;
        if (!isValidation(email) && email !== "") {
            return "error"
        } else if (body === ""|| title === "") return "disabled";
        else return "ok"
    }

    render() {
        const {email, title, body} = this.state;
        const {showModal, doNotShowModal} = this.props;
        const buttonDisabled = !isValidation(email) || body === ""|| title === "";
        return (
            <ContainerModal type={showModal ? "block" : ""}>
                <ModalCss>
                    <ButtonClose onClick={doNotShowModal}>X</ButtonClose>
                    <h3>Add your article</h3>
                    <InputEmail ref={this.emailRef}
                                value={email}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Enter your email"/>

                    <InputTitle ref={this.titleRef}
                                value={title}
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Enter title article"/>

                    <TextArticle ref={this.bodyRef}
                                 value={body}
                                 onChange={this.handleChange}
                                 type="text"
                                 placeholder="Enter body article"/>

                    <Button disabled={buttonDisabled}
                            type={this.buttonTypeChange()}
                            onClick={this.onSave}
                    >Save</Button>
                </ModalCss>
            </ContainerModal>

        );
    }
}


const MapStateToProps = state => ({
    showModal: showModalWindow(state)
});


export default connect(MapStateToProps, {doNotShowModal, addArticle})(Modal);