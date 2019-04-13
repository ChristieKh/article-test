import React, {Component, createRef} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {addComment} from "../actions";
import validator from 'email-validator';

const Container = styled.div` 
    display: flex;
    flex-flow: row wrap;
`;

const FlexColumn = styled.div` 
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

const CommentText = styled.textarea` 
    width: 78%;
    min-height: 90px;
`;

const Button = styled.button`
    padding: 0 20px;
    background-color: ${({type}) => type === 'error' ? 'pink' : 'transparent'}
`;


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

    isValidation() {
        return validator.validate(this.state.email);
    }

    buttonTypeChange() {
        if (!this.isValidation() && this.state.email !== "") {
            return "error"
        } else if (this.state.body === "" && this.state.email !== "") return "error";
        else return ""
    }


    render() {
        const {addComment} = this.props;
        const {email, body} = this.state;
        const buttonDisabled = !this.isValidation() || body === "";
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