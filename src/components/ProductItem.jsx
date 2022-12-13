import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';

import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.div``;
const Image = styled.img`
    height: 75%;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

const ProductItem = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

export default ProductItem;
