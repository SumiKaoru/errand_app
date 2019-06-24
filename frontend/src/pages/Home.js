// @flow
import React from 'react';
import styled from 'styled-components';
import HeaderContainer from 'containers/base/HeaderContainer'
import PostList from 'containers/common/PostList'

class Home extends React.Component{
    render(){
        return(
            <>
                <HeaderContainer />
                <PostList />
            </>
        )
    }
}

export default Home;