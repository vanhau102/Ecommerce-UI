import React from 'react';
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    Twitter,
    Pinterest,
    Room,
    Phone,
    MailOutline,
} from '@mui/icons-material';
import { mobile } from '../responsive';
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>H-Shop</Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia neque deleniti porro facere in aspernatur iusto, ex
                    aut ad recusandae, est, nemo harum quisquam consectetur iure
                    quis sed. Ab, quo?
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Faction</ListItem>
                    <ListItem>Women Faction</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} /> phường Hưng Lợi,
                    quận Ninh Kiều, thành Phố Cần Thơ
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} /> 0392280707
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />{' '}
                    dino@gmail.com
                </ContactItem>

                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;
