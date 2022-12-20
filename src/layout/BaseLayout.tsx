import FlexY from 'component/parts/FlexY';
import FlexX from 'component/parts/FlexX';
import styled, { css } from 'styled-components';
import GlobalSearch from 'component/template/GlobalSearch';
import AfreecaTVLogo from 'asset/logo.svg';
import { Color, ColorUI, Palette } from 'style/variable/color';
import GNB from 'component/template/GNB';
import Button from 'component/parts/Button';
import IconBroadcast from 'asset/icon/ico_broadcast.svg';
import IconBell from 'asset/icon/ico_bell.svg';
import Icon3Dot from 'asset/icon/ico_3dot.svg';
import Icon4Dot from 'asset/icon/ico_4dot.svg';

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
                <UtilButton src={IconBroadcast} popover={'방송하기'}>
                    방송하기
                </UtilButton>
                <UtilButton src={IconBell} popover={'알림'}>
                    알림
                </UtilButton>
                <button>로그인</button>
                <UtilButton src={Icon3Dot} popover={'설정'}>
                    설정
                </UtilButton>
                <UtilButton src={Icon4Dot} popover={'더보기'}>
                    더보기
                </UtilButton>
            </Util>
        </Header>
        <Content>
            <GNB />
            <Main>
                {children}
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
                                주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동
                                ㈜아프리카TV(삼평동)
                            </li>
                            <li>FAX : 031-622-8008</li>
                            <li>afreecaTV@afreecatv.com (1688-7022)</li>
                        </ul>
                    </div>
                    <div>
                        <p>ⓒ AfreecaTV Corp.</p>
                    </div>
                </footer>
            </Main>
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
    border-bottom: 1px solid ${ColorUI.LayoutDivider};
`;

const LeftInfo = styled(FlexX)`
    align-items: center;
    column-gap: 60px;
`;

const Util = styled(FlexX)`
    column-gap: 16px;
`;

const UtilButton = styled(Button)<{ src: React.FunctionComponent<React.SVGAttributes<SVGElement>>; popover?: string }>`
    background-image: ${(props) => `url(${props.src})`};
    width: 40px;
    height: 40px;
    background-size: 100%;
    border-radius: 20px;
    transition: all ease 200ms 0s;
    position: relative;
    &:hover {
        background-color: ${Palette.Gray_f5f6f7};
        &::after {
            visibility: unset;
            left: 50%;
            transform: translateX(-50%);
            opacity: 1;
        }
    }
    ${(props) =>
        props.popover
            ? css`
                  &::after {
                      content: '${props.popover}';
                      visibility: hidden;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      padding: 5px 10px;
                      position: absolute;
                      bottom: -32px;
                      left: -100%;
                      font-size: 12px;
                      font-weight: 700;
                      transition: inherit;
                      background-color: #373d40;
                      color: white;
                      white-space: nowrap;
                      opacity: 0;
                  }
              `
            : undefined};
`;

const Content = styled(FlexX)`
    /* padding: 0 28px; */
`;

const Main = styled(FlexY).attrs({ as: 'main' })`
    padding: 32px 46px 0 46px;
    min-height: calc(100vh - 80px);
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
