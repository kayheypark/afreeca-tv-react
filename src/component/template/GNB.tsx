import FlexY from 'component/parts/FlexY';
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
                            홈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/worldcup2022">2022 카타르월드컵</NavLink>
                    </li>
                    <li>
                        <NavLink to="/awards2022">2022 BJ대상</NavLink>
                    </li>
                    <li>
                        <NavLink to="/esports">e스포츠</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vod">VOD</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mypage" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            MY
                        </NavLink>
                    </li>
                </ul>
            </MainGNB>
            <hr />
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
    padding-right: 46px;
    padding-top: 15px;
`;

const MainGNB = styled(FlexY).attrs({ as: 'nav' })`
    a {
        display: flex;
        align-items: center;
        height: 38px;
        border-radius: 6px;
        font-size: 15px;
    }
`;
