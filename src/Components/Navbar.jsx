import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: .5px solid lightgrey;
    display: flex;
    align-items: center;
    padding: .5rem;
    margin-left: .5rem;
`;

const Input = styled.input`
    border: none;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 0 0.5rem;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        LOGO
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
