import React from 'react';
import CategoryItem from './CategoryItem';

import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;
const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    );
};

export default Categories;
