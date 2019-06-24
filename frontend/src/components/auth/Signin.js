// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100px;
`

const Button = styled.button``

class Signin extends React.Component {
    render(){
        return (
            <Form>
                <Input />
                <Input />
                <Button>login</Button>
            </Form>
        )
    }
}

export default Signin;