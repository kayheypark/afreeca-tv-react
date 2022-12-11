import FlexY from 'component/parts/FlexY';
import FlexX from 'component/parts/FlexX';
import styled from 'styled-components';
import GlobalSearch from 'component/template/GlobalSearch';
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
                <GlobalSearch />
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
        <footer>
            <div>
                <ul>
                    <li>
                        <a href="/">회사소개</a>
                    </li>
                    <li>
                        <a href="">서비스 소개</a>
                    </li>
                    <li>
                        <a href="">광고안내</a>
                    </li>
                    <li>
                        <a href="">인재채용</a>
                    </li>
                    <li>
                        <a href="">이용약관</a>
                    </li>
                    <li>
                        <a href="">개인정보처리방침</a>
                    </li>
                    <li>
                        <a href="">청소년보호정책</a>
                    </li>
                    <li>
                        <a href="">운영정책</a>
                    </li>
                    <li>
                        <a href="">권리침해신고센터</a>
                    </li>
                    <li>
                        <a href="">오픈스튜디오</a>
                    </li>
                    <li>
                        <a href="">Developers</a>
                    </li>
                    <li>
                        <a href="">주요서비스</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>(주)아프리카TV</li>
                    <li>대표이사 : 정찬용</li>
                    <li>사업자번호 : 220-81-10886</li>
                    <li>통신판매번호 제2010-경기성남-0834</li>
                    <li>사업자 정보 확인</li>
                    <li>호스팅 제공자 : ㈜아프리카TV</li>
                    <li>
                        주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동 ㈜아프리카TV(삼평동)
                    </li>
                    <li>FAX : 031-622-8008</li>
                    <li>afreecaTV@afreecatv.com (1688-7022)</li>
                </ul>
            </div>
            <div>
                <p>ⓒ AfreecaTV Corp.</p>
            </div>
        </footer>
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
    align-items: center;
    column-gap: 40px;
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
