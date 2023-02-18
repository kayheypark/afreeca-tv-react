import AfreecaTVLogo from 'asset/logo.svg';
import Checkbox from 'component/atom/Checkbox';
import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import Input from 'component/atom/Input';
import SubLayout from 'layout/SubLayout';
import { IconQuestionMark } from 'lib/icon';
import { useState } from 'react';
import { Color, Palette } from 'style/variable/color';
import styled from 'styled-components';

const Login = () => {
    const [isCheckedMaintainLogin, setIsCheckedMaintainLogin] = useState<boolean>(false);
    const [isCheckedSaveId, setIsCheckedSaveId] = useState<boolean>(false);

    const [id, setId] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);

    const handleClickCheckbox = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter((prev) => !prev);
    };

    const handleSubmit = () => {
        const paylaod = {
            id: id,
            password: password,
            isCheckedMaintainLogin: isCheckedMaintainLogin,
            isCheckedSaveId: isCheckedSaveId,
        };
        console.info('paylaod', paylaod);
    };

    return (
        <SubLayout>
            <Wrapper>
                <Logo>
                    <a href="/">afreeca tv</a>
                </Logo>
                <Display>로그인 후 이용하실 수 있습니다.</Display>
                <Major>
                    <Input
                        type="text"
                        defaultValue={id}
                        placeholder="아이디"
                        onChange={(e) => setId(e?.target?.value)}
                    />
                    <Input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e?.target?.value)} />
                    <LoginButton onClick={handleSubmit}>로그인</LoginButton>
                </Major>
                <Minor>
                    <FlexX style={{ columnGap: '10px' }}>
                        <Checkbox
                            id="maintainLogin"
                            defaultChecked={isCheckedMaintainLogin}
                            onClick={() => handleClickCheckbox(setIsCheckedMaintainLogin)}
                            label="로그인 상태 유지"
                        />
                        <Checkbox
                            id="saveId"
                            defaultChecked={isCheckedSaveId}
                            onClick={() => handleClickCheckbox(setIsCheckedSaveId)}
                            label="아이디 저장"
                        />
                    </FlexX>
                    <HelpLink>도움말</HelpLink>
                </Minor>
                <RelativedActivities>
                    <li>
                        <a href="">아이디 찾기</a>
                    </li>
                    <li>
                        <a href="">비밀번호 찾기</a>
                    </li>
                    <li>
                        <a href="">회원가입</a>
                    </li>
                </RelativedActivities>
            </Wrapper>
        </SubLayout>
    );
};

export default Login;

const Logo = styled(FlexX).attrs({ as: 'h1' })`
    a {
        background-image: ${`url(${AfreecaTVLogo})`};
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 266px;
        height: 45px;
        color: transparent;
        font-size: 0;
    }
`;

const Wrapper = styled(FlexY)`
    width: 340px;
    margin: 0 auto;
    padding-top: 125px;
    align-items: center;
`;

const Display = styled.p`
    padding: 27px 0;
    font-size: 18px;
    color: ${Palette.BlueDeep};
    letter-spacing: -1px;
`;

const LoginButton = styled.button`
    color: ${Color.Empty};
    background-color: ${Palette.Blue_2e6afd};
    height: 50px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    border-radius: 3px;
`;

const Major = styled(FlexY)`
    row-gap: 10px;
    width: 100%;
`;

const Minor = styled(FlexX)`
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
`;

const HelpLink = styled(FlexX).attrs({ as: 'a', href: '#' })`
    font-size: 12px;
    color: ${Palette.Gray7};
    align-items: center;
    column-gap: 5px;
    &:after {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url(${IconQuestionMark});
    }
`;

const RelativedActivities = styled(FlexX).attrs({ as: 'ul' })`
    margin-top: 40px;
    column-gap: 26px;

    li {
        position: relative;

        &:not(:last-child)::after {
            content: '';
            width: 1px;
            height: 10px;
            background-color: ${Palette.Gray_dddddd};
            position: absolute;
            right: -13px;
            top: 50%;
            transform: translateY(calc(-50% + 2px));
        }

        a {
            color: ${Palette.Gray7};
            font-size: 14px;
        }
    }
`;
