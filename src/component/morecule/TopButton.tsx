import Button from 'component/atom/Button';
import { IconTop } from 'lib/icon';
import { ColorUI } from 'style/variable/color';
import { ZIndex } from 'style/variable/zIndex';
import styled from 'styled-components';

const TopButton = styled(Button)`
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: ${ColorUI.TopButtonBackGroundColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    z-index: ${ZIndex.TopButton};
    background-image: url(${IconTop});
`;

export default TopButton;
