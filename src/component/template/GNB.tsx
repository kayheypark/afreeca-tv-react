import FlexY from 'component/parts/FlexY';
import Icon from 'component/parts/Icon';
import { IconHome, IconWorldcup, IconCrown, IconEsports, IconVideo, IconStar } from 'lib/icon';
import { NavLink } from 'react-router-dom';
import { ColorUI } from 'style/variable/color';
import styled from 'styled-components';

const activeStyle: React.CSSProperties = {
    backgroundColor: ColorUI.GNBActiveBG,
};

export const GNB = () => {
    return (
        <GNBWrapper>
            <MainGNB>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <NavIcon src={IconHome} />
                            <NavText>홈</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/worldcup2022">
                            <NavIcon src={IconWorldcup} />
                            <NavText>2022 카타르월드컵</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/awards2022">
                            <NavIcon src={IconCrown} />
                            <NavText>2022 BJ대상</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/esports">
                            <NavIcon src={IconEsports} />
                            <NavText>e스포츠</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vod">
                            <NavIcon src={IconVideo} />
                            <NavText>VOD</NavText>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <NavIcon src={IconStar} />
                            <NavText>MY</NavText>
                        </NavLink>
                    </li>
                </ul>
            </MainGNB>
            <Divider />
            <ul>
                <li>샵프리카</li>
                <li>랭킹</li>
                <li>소통센터</li>
                <li>고객센터</li>
                <li>이벤트</li>
            </ul>
        </GNBWrapper>
    );
};

export default GNB;

const GNBWrapper = styled(FlexY).attrs({ as: 'aside' })`
    border-right: 1px solid ${ColorUI.LayoutDivider};
    padding: 15px 13px 30px 12px;
    width: 210px;
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
    font-weight: 400;
    font-size: 15px;
`;

const Divider = styled.hr`
    border: 1px solid #f5f6f7;
    width: 100%;
    height: 1px;
    margin: 50px 0;
`;
