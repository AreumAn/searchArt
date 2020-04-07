import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArtDetail from '../components/ArtDetail';
import { metmuseumApi } from '../api';

/**
 * Fetch item detail api
 *
 * @param object location info with selected art item id
 * @returns JSX  ArtDetail
 */
const ArtDetailContainer = ({ location }) => {
    // Selected artItem to see detail info
    const [artItem, setArtItem] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: item } = await metmuseumApi.showDetail(
                    location.id,
                );
                setArtItem(item);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [location]);

    if (!artItem) {
        return null;
    }

    return <ArtDetail artItem={artItem} loading={loading} />;
};

ArtDetailContainer.propTypes = {
    location: PropTypes.object,
};

export default ArtDetailContainer;
