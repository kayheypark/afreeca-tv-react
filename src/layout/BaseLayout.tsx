import FlexY from 'component/atom/FlexY';
import FlexX from 'component/atom/FlexX';
import styled, { css } from 'styled-components';
import GlobalSearch from 'component/template/GlobalSearch';
import AfreecaTVLogo from 'asset/logo.svg';
import { Color, ColorUI, Palette } from 'style/variable/color';
import GNB from 'component/template/GNB';
import Button from 'component/atom/Button';
import PopoverTip from 'asset/icon/ico_popovertip.svg';
import { Transition } from 'style/variable/transition';
import { IconBroadcast, IconBell, Icon3Dot, Icon4Dot } from 'lib/icon';
import { Length } from 'style/variable/spacing';
import { ZIndex } from 'style/variable/zIndex';

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
                <LoginButton>로그인</LoginButton>
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
            <Main>{children}</Main>
        </Content>
        <Footer>
            <FooterSection>
                <FooterMenus>
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
                    <li>
                        <select name="" id="">
                            <option value="">패밀리 사이트</option>
                        </select>
                    </li>
                </FooterMenus>
            </FooterSection>
            <FooterSection>
                <FooterInfos>
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
                </FooterInfos>
            </FooterSection>
            <FooterSection>
                <Copyright>ⓒ AfreecaTV Corp.</Copyright>
            </FooterSection>
        </Footer>
    </>
);

export default BaseLayout;

const Header = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${Length.Header.Height};
    padding: 0 28px;
    border-bottom: 1px solid ${ColorUI.LayoutDivider};
    background-color: ${ColorUI.Background};
    z-index: ${ZIndex.Header};
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
    transition: ${Transition.Default};
    position: relative;
    &:hover {
        background-color: ${Palette.Gray_f5f6f7};
        &::after {
            visibility: unset;
            opacity: 1;
            left: 50%;
            transform: translateX(-50%);
        }
        &::before {
            visibility: unset;
            opacity: 1;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    ${(props) =>
        props.popover
            ? css`
                  &::after,
                  &::before {
                      position: absolute;
                      left: 50%;
                      transform: translateX(-60%);
                      transition: inherit;
                      opacity: 0;
                      visibility: hidden;
                  }
                  &::after {
                      content: '${props.popover}';
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      bottom: -32px;
                      padding: 5px 10px;
                      font-size: 12px;
                      font-weight: 700;
                      color: white;
                      white-space: nowrap;
                      background-color: #373d40;
                  }
                  &::before {
                      content: '';
                      bottom: -8px;
                      display: block;
                      width: 100%;
                      height: 15px;
                      background-image: url(${PopoverTip});
                      background-position: 50% 100%;
                      background-repeat: no-repeat;
                      background-size: 10px 5px;
                  }
              `
            : undefined};
`;

const Content = styled(FlexX)``;

const Main = styled(FlexY).attrs({ as: 'main' })`
    width: 100%;
    /* padding-left: calc(46px + 210px); */
    padding-left: ${Length.SideBar.Width};
    /* padding-top: calc(32px + 80px); */
    padding-top: ${Length.Header.Height};
    min-height: calc(100vh - ${Length.Header.Height});
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

const LoginButton = styled(FlexX).attrs({ as: 'button' })`
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: ${Color.Clearly};
    border: 0;
    padding: 0 6px;
    height: 40px;
    background-color: transparent;
    transition: ${Transition.Default};
    &:hover {
        background-color: ${Palette.Gray_f5f6f7};
        border-radius: 6px;
    }
`;

const Footer = styled(FlexY).attrs({ as: 'footer' })`
    align-items: center;
    border-top: 1px solid ${Palette.Gray_e5e5e5};
    margin-left: ${Length.SideBar.Width};
    padding-top: 25px;
    padding-bottom: 30px;
    row-gap: 12px;
`;

const FooterSection = styled(FlexX).attrs({ as: 'section' })`
    /* align-items: center;
    justify-content: center; */
`;

const FooterMenus = styled(FlexX).attrs({ as: 'ul' })`
    flex-wrap: wrap;
    column-gap: 12px;
    align-items: center;
    justify-content: center;

    a {
        color: #666666;
        font-size: 14px;
        letter-spacing: -1px;
    }
`;

const FooterInfos = styled(FlexX).attrs({ as: 'ul' })`
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    row-gap: 6px;
    width: 800px;
    li,
    a {
        font-size: 11px;
        color: ${Palette.Gray8};
    }
`;

const Copyright = styled.p`
    font-size: 12px;
    font-weight: 900;
    color: ${Palette.Gray_5f5f5f};
`;
