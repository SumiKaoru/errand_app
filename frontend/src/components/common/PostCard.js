import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';

const WhiteBox = styled.div`
    background-color: white;
    width: 100%;
    height: 200px;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`

class PostCard extends Component {

    render() {
        return (
            <WhiteBox>
                <Wrapper>
                    asdf
                </Wrapper>
            </WhiteBox>
        );
    }
}

export default PostCard;