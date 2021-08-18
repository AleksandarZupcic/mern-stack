import React, { Component } from "react";
import styled from "styled-components";
import api from "../api";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const Input = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const Cancel = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            rating: null,
            time: "",
        };
    }


    handleChangeInputName = async (event) => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleChangeInputRating = async (event) => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating;

        this.setState({ rating });
    }

    handleChangeInputTime = async (event) => {
        const time = event.target.value;
        this.setState({ time });
    }

    handleSubmit = async () => {
        const { name, rating, time } = this.state;
        const arrayTime = time.split("/");
        const payload = { name, rating, time: arrayTime };

        await api.insertMovie(payload)
            .then((res) => {
                window.alert("Movie inserted successfully!");
                this.setState({
                    name: "",
                    rating: null,
                    time: ""
                })
            })
    }

    render(){
        const { name, rating, time } = this.state;
        return (
            <Wrapper>
                <Title>Create Movie</Title>
                <Label>Name: </Label>
                <Input onChange = {this.handleChangeInputName} 
                    type = "text"
                    value = {name}/>

                <Label>Rating: </Label>
                <Input onChange = {this.handleChangeInputRating}
                    type = "number"
                    step = "0.1"
                    lang = "en-US"
                    min = "0"
                    max = "10"
                    pattern = "[0-9]+([,\.][0-9]+)?"
                    value = {rating}/>

                <Label>Time: </Label>
                <Input onChange = {this.handleChangeInputTime}
                    type = "text"
                    value = {time}/>

                <Button onClick = {this.handleSubmit}>Insert Movie</Button>
                <Cancel href = {"/movies/list"}>Go Back</Cancel>
            </Wrapper>
        );
    }
};

export default MoviesInsert;