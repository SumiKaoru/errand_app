// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

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
                <Link to="/auth/signup" >signup</Link>
            </Form>
        )
    }
}

export default Signin;