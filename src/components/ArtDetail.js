import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Message from './Message';

const Container = styled.div`
    height: calc(100vh - 50px);
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Get background img from props */
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    height: 100%;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.div`
    padding-bottom: 15px;
`;

const Divider = styled.span`
    margin: 0 10px;
    color: #081939;
    font-weight: 800;
`;

const ArtDetail = ({ artItem, loading }) => {
    const {
        title,
        primaryImage,
        primaryImageSmall,
        artistDisplayName,
        artistDisplayBio,
        repository,
        dimensions,
        objectURL,
    } = artItem;

    if (loading) {
        return <Message text="loading..." color="#006400" />;
    }

    return (
        <>
            <Container>
                <title>{title}</title>
                <Backdrop bgImage={primaryImage} />
                <Content>
                    <Cover bgImage={primaryImageSmall} />
                    <Data>
                        <Title>{title}</Title>
                        <ItemContainer>
                            <Divider>• Artist </Divider>
                            <Item>
                                {artistDisplayName}({artistDisplayBio})
                            </Item>
                            <Divider>• Repository</Divider>
                            <Item>{repository}</Item>
                            <Divider>• Dimensions </Divider>
                            <Item>{dimensions}</Item>
                            <Divider>• More Info: </Divider>
                            <Item>{objectURL}</Item>
                        </ItemContainer>
                    </Data>
                </Content>
            </Container>
        </>
    );
};

ArtDetail.propTypes = {
    artItem: PropTypes.object,
    loading: PropTypes.bool,
};

export default ArtDetail;
