import axios from 'axios';

const api = axios.create({
    baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/',
});

export const metmuseumApi = {
    showDetail: objectID => api.get(`objects/${objectID}`),
    search: (term, cancelToken) =>
        api.get('search', {
            params: {
                q: encodeURIComponent(term),
            },
            cancelToken: cancelToken,
        }),
};
