import React from 'react';
import styled from 'styled-components';
import ArtItem from './ArtItem';
import PropTypes from 'prop-types';
import Message from './Message';

const StyledArtItemList = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const StyledResultTerm = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    color: #ff7700;
    font-size: 1.5rem;
`;

const ArtItemList = ({ artItems, loading, SearchedTerm }) => {
    console.log('ArtItemList!');
    if (loading || artItems.length === 0) {
        return <Message text="loading..." color="#006400" />;
    }

    if (!SearchedTerm) {
        return null;
    }

    return (
        <StyledArtItemList>
            <StyledResultTerm>result of {SearchedTerm}</StyledResultTerm>
            {artItems &&
                artItems.map(item => (
                    <ArtItem key={item.objectID} art={item} />
                ))}
        </StyledArtItemList>
    );
};

ArtItemList.propTypes = {
    artItems: PropTypes.array,
    loading: PropTypes.bool,
    SearchedTerm: PropTypes.string,
};

export default React.memo(ArtItemList);
