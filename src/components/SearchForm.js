import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSearch = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    border-bottom: solid 3px #808080;
    width: 50%;
    text-align: left;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const SearchForm = ({ searchTerm, onChange }) => {
    return (
        <StyledSearch>
            <Form>
                <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={onChange}
                />
            </Form>
        </StyledSearch>
    );
};

SearchForm.propTypes = {
    searchTerm: PropTypes.string,
    onChange: PropTypes.func,
};

export default SearchForm;
