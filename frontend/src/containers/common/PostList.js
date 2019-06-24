import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';

import PostCard from 'components/common/PostCard';

const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 70px;
    width: 40%;
    @media (max-width: 1920px) {
        width: 40%;
    }
    @media (max-width: 1600px) {
        width: 50%
    }
    @media (max-width: 1200px) {
        width: 70%
    }
    @media (max-width: 700px) {
        width: 95%;
    }
    display: flex;
    flex-direction: column;
`

class PostList extends Component {

    render() {
        return (
            <Wrapper>
                <PostCard />
            </Wrapper>
        );
    }
}

export default PostList;