import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledArtItem = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #000000;

    & + & {
        margin-top: 3rem;
    }
`;

const Thumbnail = styled.div`
    margin-right: 1rem;
    img {
        display: block;
        width: 100px;
        height: 160px;
        object-fit: cover;
    }
`;

const ArtItemInfo = styled.div`
    h2 {
        margin: 0;
        a {
            color: black;
        }
    }
    p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }
`;

const ArtItem = ({ art }) => {
    const { objectID, title, primaryImageSmall, objectURL } = art;
    return (
        <StyledArtItem to={{ pathname: '/detail', id: objectID }}>
            <Thumbnail>
                <img src={primaryImageSmall} target="_blank" alt="thumbnail" />
            </Thumbnail>
            <ArtItemInfo>
                <h2>{title}</h2>
                <p>{objectURL}</p>
            </ArtItemInfo>
        </StyledArtItem>
    );
};

ArtItem.propTypes = {
    art: PropTypes.object,
};

export default ArtItem;
