import FlexY from 'component/parts/FlexY';
import FlexX from 'component/parts/FlexX';
import styled from 'styled-components';
import AfreecaTVLogo from 'asset/logo.svg';

interface IProps {
    children: JSX.Element;
}

const BaseLayout = ({ children }: IProps) => (
    <>
        <Header>
            <LeftInfo>
                <Logo>
                    <a href="/">afreeca tv</a>
                </Logo>
                <SearchWrapper>
                    <input type="text" />
                </SearchWrapper>
            </LeftInfo>
            <Util>
                <button type="button">방송하기</button>
                <button type="button">알림</button>
                <button type="button">로그인</button>
                <button type="button">설정</button>
                <button type="button">더보기</button>
            </Util>
        </Header>
        <Content>
            <SideBar>
                <ul>
                    <li>홈</li>
                    <li>2022 카타르월드컵</li>
                    <li>2022 BJ대상</li>
                    <li>e스포츠</li>
                    <li>VOD</li>
                    <li>MY</li>
                </ul>
                <hr />
                <ul>
                    <li>샵프리카</li>
                    <li>랭킹</li>
                    <li>소통센터</li>
                    <li>고객센터</li>
                    <li>이벤트</li>
                </ul>
            </SideBar>
            <Main>{children}</Main>
        </Content>
    </>
);

export default BaseLayout;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 28px;
    border-bottom: 1px solid black;
`;

const LeftInfo = styled(FlexX)`
    column-gap: 40px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Util = styled(FlexX)`
    column-gap: 8px;
`;

const Content = styled(FlexX)`
    padding: 0 28px;
`;

const Main = styled(FlexY).attrs({ as: 'main' })`
    padding: 32px 46px 0 46px;
`;

const SideBar = styled(FlexY).attrs({ as: 'aside' })`
    border-right: 1px solid black;
    padding-right: 46px;
    padding-top: 15px;
`;

const Logo = styled(FlexX).attrs({ as: 'h1' })`
    a {
        background-image: ${`url(${AfreecaTVLogo})`};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 157px;
        height: 50px;
        color: transparent;
        font-size: 0;
    }
`;
