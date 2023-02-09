import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import { Palette } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    children: JSX.Element;
}

const BaseLayout = ({ children }: IProps) => {
    return (
        <>
            {children}
            <Footer>
                <RelativedLinks>
                    <li>
                        <a href="">회사소개</a>
                    </li>
                    <li>
                        <a href="">서비스소개</a>
                    </li>
                    <li>
                        <a href="">인재채용</a>
                    </li>
                    <li>
                        <a href="">광고안내</a>
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
                        <a href="">권리침해신고센터</a>
                    </li>
                    <li>
                        <a href="">고객센터</a>
                    </li>
                    <li>
                        <a href="">Develolpers</a>
                    </li>
                    <li>
                        <a href="">주요서비스</a>
                    </li>
                </RelativedLinks>
                <Copyrights>ⓒ AfreecaTV Corp.</Copyrights>
            </Footer>
        </>
    );
};

export default BaseLayout;

const Footer = styled(FlexY).attrs({ as: 'footer' })`
    border-top: 1px solid ${Palette.Gray_d1d1d1};
    margin-top: 57px;
    padding-top: 15px;
    align-items: center;
`;

const RelativedLinks = styled(FlexX).attrs({ as: 'ul' })`
    li {
        padding: 0 6px;
        position: relative;
        &:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(calc(-50% + 2px));
            background-color: ${Palette.Gray_d1d1d1};
            width: 1px;
            height: 100%;
        }
        a {
            font-size: 11px;
            letter-spacing: -1px;
            color: ${Palette.Gray_5f5f5f};
        }
    }
`;

const Copyrights = styled.p`
    font-size: 12px;
    color: ${Palette.Gray_5f5f5f};
    padding-top: 12px;
    padding-bottom: 30px;
    font-weight: 900;
`;
