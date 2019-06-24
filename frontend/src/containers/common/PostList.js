import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';

import PostCard from 'components/common/PostCard';

const Wrapper = styled.div`
    margin-top: 50px;
    padding: 30px;
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