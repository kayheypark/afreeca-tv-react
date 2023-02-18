import FlexY from 'component/atom/FlexY';
import Icon from 'component/atom/Icon';
import { IconHome, IconWorldcup, IconCrown, IconEsports, IconVideo, IconStar } from 'lib/icon';
import Link from 'next/link';
import { useEffect } from 'react';
import { ColorUI } from 'style/variable/color';
import { Length } from 'style/variable/spacing';
import styled from 'styled-components';
import Image from 'next/image';

const activeStyle: React.CSSProperties = {
    backgroundColor: ColorUI.GNBActiveBG,
    fontWeight: 700,
};

const GNB = () => {
    return (
        <GNBWrapper>
            <MainGNB>
                <ul>
                    <li>
                        <Link href="/">
                            <NavIcon src={IconHome.src} />
                            <NavText>홈</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link href="/worldcup2022">
                            <NavIcon src={IconWorldcup.src} />
                            <NavText>2022 카타르월드컵</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link href="/awards2022">
                            <NavIcon src={IconCrown.src} />
                            <NavText>2022 BJ대상</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link href="/esports">
                            <NavIcon src={IconEsports.src} />
                            <NavText>e스포츠</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vod">
                            <NavIcon src={IconVideo.src} />
                            <NavText>VOD</NavText>
                        </Link>
                    </li>
                    <li>
                        <Link href="/mypage">
                            <NavIcon src={IconStar.src} />
                            <NavText>MY</NavText>
                        </Link>
                    </li>
                </ul>
            </MainGNB>
            <Divider />
            <OtherServiceList>
                <li>
                    <a href="">샵프리카</a>
                </li>
                <li>
                    <a href="">랭킹</a>
                </li>
                <li>
                    <a href="">소통센터</a>
                </li>
                <li>
                    <a href="">고객센터</a>
                </li>
                <li>
                    <a href="">이벤트</a>
                </li>
            </OtherServiceList>
        </GNBWrapper>
    );
};

export default GNB;

const GNBWrapper = styled(FlexY).attrs({ as: 'aside' })`
    position: fixed;
    top: ${Length.Header.Height};
    border-right: 1px solid ${ColorUI.LayoutDivider};
    padding: 15px 13px 30px 12px;
    width: ${Length.SideBar.Width};
    height: calc(100vh - ${Length.Header.Height});
`;

const MainGNB = styled(FlexY).attrs({ as: 'nav' })`
    a {
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 6px;
        font-size: 15px;
        column-gap: 10px;
        padding-left: 16px;
    }
    ul {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
`;

const NavIcon = Icon;

const NavText = styled.h2`
    font-weight: inherit;
    font-size: 15px;
`;

const Divider = styled.hr`
    border: 1px solid #f5f6f7;
    width: 100%;
    height: 1px;
    margin: 50px 0;
`;

const OtherServiceList = styled(FlexY).attrs({ as: 'ul' })`
    row-gap: 15px;
    padding-left: 24px;
    a {
        font-size: 13px;
        color: ${ColorUI.OtherServiceColor};
    }
`;
