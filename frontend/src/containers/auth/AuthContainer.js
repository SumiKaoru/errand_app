// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Route } from 'react-router-dom';

import Signin from 'components/auth/Signin';

const BackGround = styled.div`
    height: 100%;
`

class AuthContainer extends React.Component {
    render(){
        return (
            <BackGround>
                <Route path="/auth/signin" component={Signin}/>
            </BackGround>
        )
    }
}

export default AuthContainer;