import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';
import { Palette } from 'style/variable/color';

const Title = styled(FlexX).attrs({ as: 'h2' })`
    color: ${Palette.Gray2};
    font-size: 24px;
    margin-bottom: 20px;
`;

export default Title;
