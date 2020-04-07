import React, { useState, useEffect } from 'react';
import { metmuseumApi } from '../api';
import ArtItemList from '../components/ArtItemList';
import useDebounce from '../utils/debounce.js';
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import Message from '../components/Message';

/**
 * Fetch/set state data by input search term.
 *
 * @returns JSX SearchForm, Message, ArtItemList
 */
const SearchContainer = () => {
    // Typed search word
    const [searchTerm, setSearchTerm] = useState('');
    // Search word using call search api
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Searched results
    const [searchResultsIDs, setSearchResultsIDs] = useState([]);
    const [artItems, setArtItems] = useState(null);

    // To check process of fetchData
    const [loading, setLoading] = useState(false);
    const [artItemsLoading, setArtItemsLoading] = useState(false);
    const [noDataFound, setNoDataFound] = useState(false);

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        // To cancel the previous request, only take last request
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        // To push searched art items results
        let results = [];

        if (debouncedSearchTerm) {
            const fetchData = async () => {
                // Start `search, detail api`
                setLoading(true);
                try {
                    const { data: response } = await metmuseumApi.search(
                        debouncedSearchTerm,
                        source.token,
                    );
                    // Search API response has result of items
                    if (response.objectIDs) {
                        setNoDataFound(false);
                        // Only show 20 items
                        const ids = response.objectIDs.slice(0, 20);
                        // Start call api to get each items detail info
                        setArtItemsLoading(true);
                        await Promise.all(
                            ids.map(async id => {
                                const {
                                    data: item,
                                } = await metmuseumApi.showDetail(id);
                                results.push(item);
                            }),
                        )
                            .then(
                                // set artItems state
                                setArtItems(results),
                            )
                            .catch(e => {
                                console.log(e);
                            })
                            .finally(
                                // finish get each items data
                                setArtItemsLoading(false),
                            );
                        // Set searchResultsIDs state
                        setSearchResultsIDs(ids);
                    } else {
                        // searchTerm doesn't have any result
                        setNoDataFound(true);
                        setSearchResultsIDs([]);
                        setArtItems(null);
                    }
                } catch (e) {
                    console.log(e);
                } finally {
                    // Start api call
                    setLoading(false);
                }
            };
            fetchData();
        }
        // To cancel previous request
        return () => {
            source.cancel();
            results = [];
        };
    }, [debouncedSearchTerm]);

    return (
        <>
            <SearchForm searchTerm={searchTerm} onChange={handleChange} />
            {noDataFound && <Message text="No Data Found..." color="#006400" />}
            {searchResultsIDs && artItems && (
                <ArtItemList
                    artItems={artItems}
                    loading={loading || artItemsLoading}
                    SearchedTerm={debouncedSearchTerm}
                    // noDataFound={noDataFound} Need to remove
                />
            )}
        </>
    );
};

export default SearchContainer;
