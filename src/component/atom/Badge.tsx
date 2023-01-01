import { Palette } from 'style/variable/color';
import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';

const Badge = styled(FlexX).attrs({ as: 'em' })`
    display: flex;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 16px;
    color: ${Palette.White};
    background-color: ${Palette.Red};
`;

export default Badge;
