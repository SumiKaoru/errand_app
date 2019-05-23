// @flow
import React from 'react';
import {
    BackGround
} from './AuthContainerStyle';

import Signin from 'components/auth/signin';

class AuthContainer extends React.Component {
    render(){
        return (
            <BackGround>
                <Signin />
            </BackGround>
        )
    }
}

export default AuthContainer;