import React, {Component, createRef} from 'react';
import {connect} from "react-redux";
import {addComment} from "../../actions";
import {Button, CommentText, Container, FlexColumn} from "./CommentFormStyled";
import {isValidation} from "../../utils";


class CommentForm extends Component {

    state = {
        email: "",
        body: ""
    };

    emailRef = createRef();
    commentRef = createRef();

    handleChange = () => {
        this.setState({
            email: this.emailRef.current.value,
            body: this.commentRef.current.value,
        })
    };


    buttonTypeChange() {
        const {email, body} = this.state;
        if (!isValidation(email) && email !== "") {
            return "error"
        } else if (body === "" && email !== "") return "error";
        else return ""
    }


    render() {
        const {addComment} = this.props;
        const {email, body} = this.state;
        const buttonDisabled = !isValidation(email) || body === "";
        return (
            <Container>
                <FlexColumn>
                    <input ref={this.emailRef}
                           value={email}
                           onChange={this.handleChange}
                           type="text"
                           placeholder="Enter your email"/>
                    <Button disabled={buttonDisabled}
                            type={this.buttonTypeChange()}
                            onClick={() => addComment(email, body)}>
                        Add your comment</Button>
                </FlexColumn>
                <CommentText ref={this.commentRef}
                             value={body}
                             onChange={this.handleChange}
                             type="text"
                             placeholder="Text comment"/>
            </Container>
        );
    }
}


export default connect(null, {addComment})(CommentForm);