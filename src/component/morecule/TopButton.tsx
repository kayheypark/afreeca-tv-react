import Button from 'component/atom/Button';
import { IconTop } from 'lib/icon';
import { useEffect, useState } from 'react';
import { ColorUI } from 'style/variable/color';
import { ZIndex } from 'style/variable/zIndex';
import styled from 'styled-components';

const TopButton = () => {
    const [isShowTopBtn, setIsShowTopBtn] = useState<boolean>(true);

    const handleClickTopBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleIsShowTopBtn = () => {
            if (window.scrollY > 200) {
                setIsShowTopBtn(true);
            } else {
                setIsShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleIsShowTopBtn);
        return () => {
            window.removeEventListener('scroll', handleIsShowTopBtn);
        };
    }, []);

    return isShowTopBtn && <TopBtn onClick={handleClickTopBtn}>상단 바로가기</TopBtn>;
};

const TopBtn = styled(Button).attrs({ type: 'button' })`
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
