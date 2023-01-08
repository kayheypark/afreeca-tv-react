import FlexX from 'component/atom/FlexX';
import styled from 'styled-components';
import ContentImg from 'asset/content/main_ad_1.png';
import Icon from 'component/atom/Icon';
import { IconCloseWhite } from 'lib/icon';
import { Color } from 'style/variable/color';
import { useRef, useState } from 'react';

const AdvertisingBanner = () => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [isActived, setIsActived] = useState<boolean>(true);

    const handleClickCloseBtn = (e: any): void => {
        e.preventDefault();
        if (itemRef.current) {
            setIsActived(false);
        }
    };

    return isActived ? (
        <Wrapper>
            <Item ref={itemRef} src={ContentImg}>
                <CloseBtn onClick={(e) => handleClickCloseBtn(e)}>
                    <Icon src={IconCloseWhite}></Icon>
                    <span>닫기</span>
                </CloseBtn>
            </Item>
        </Wrapper>
    ) : null;
};

export default AdvertisingBanner;

const Wrapper = styled(FlexX).attrs({ as: 'section' })``;

const Item = styled(Icon)`
    position: relative;
    width: 100%;
    height: 225px;
    background-color: #262c66;
`;

const CloseBtn = styled(FlexX).attrs({ as: 'button' })`
    position: absolute;
    left: 14px;
    top: 10px;
    background-color: transparent;
    border: 0;
    column-gap: 4px;
    align-items: center;
    padding: 0;

    .Icon {
        width: 21px;
        height: 21px;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 99px;
        background-size: 9px;
        background-position: center;
        background-repeat: no-repeat;
    }

    span {
        color: ${Color.Empty};
        font-size: 12px;
        text-shadow: 0 0 3px rgb(0 0 0 / 50%);
        margin-bottom: 1px;
    }
`;
