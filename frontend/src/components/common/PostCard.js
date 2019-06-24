import React, { Component } from 'react';
import oc from 'open-color';
import styled from 'styled-components';

const WhiteBox = styled.div`
    background-color: white;
    width: 100%;
    height: 200px;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const UserProfile = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const Spacer = styled.div`
    flex: 1;
`

const UserThumbnail = styled.img`
    width: 50px;
    height: 50px;
`

const Username = styled.a`
    font-size: 1rem;
`

const Context = styled.div`
    display: flex;
    flex-direction: column;
`

const Fees = styled.h3`
    margin: 0;
`

const Errend = styled.span`

`

const AcceptButton = styled.button`

`

class PostCard extends Component {

    render() {
        return (
            <WhiteBox>
                <Wrapper>
                    <UserProfile>
                        <Spacer />
                        <UserThumbnail src="https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?k=6&m=474001892&s=612x612&w=0&h=6g0M3Q3HF8_uMQpYbkM9XAAoEDym7z9leencMcC4pxo="/>
                        <Username>임찬우</Username>
                        <Spacer />
                    </UserProfile>
                    <Context>
                        <Fees>500원</Fees>
                        <Errend>송할마: ㄴㅁㅇㄹ</Errend>
                        <AcceptButton>수락하기</AcceptButton>
                    </Context>
                </Wrapper>
            </WhiteBox>
        );
    }
}

export default PostCard;