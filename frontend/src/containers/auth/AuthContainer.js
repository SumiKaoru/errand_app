// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Route } from 'react-router-dom';

import Signin from 'components/auth/Signin';
import Signup from 'components/auth/Signup';

const BackGround = styled.div`
    height: 100%;
`

class AuthContainer extends React.Component {
    render(){
        return (
            <BackGround>
                <Route path="/auth/signin" component={Signin}/>
                <Route path="/auth/signup" component={Signup}/>
            </BackGround>
        )
    }
}

export default AuthContainer;