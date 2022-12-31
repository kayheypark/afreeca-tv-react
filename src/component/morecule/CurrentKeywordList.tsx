import FlexX from 'component/atom/FlexX';
import { useState } from 'react';
import { Color, ColorUI } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    items?: string[];
}

const CurrentKeywordList = ({ items }: IProps) => {
    const [isAutoSaveCurrentKeyword, setIsAutoSaveCurrentKeyword] = useState<boolean>(false);
    return (
        <>
            <div>
                {!items ? (
                    isAutoSaveCurrentKeyword ? (
                        <CurrentKeywordDisplay>최근 검색어가 없습니다.</CurrentKeywordDisplay>
                    ) : (
                        <CurrentKeywordDisplay>
                            <em>최근 검색어 자동저장</em>이 꺼져있습니다.
                        </CurrentKeywordDisplay>
                    )
                ) : (
                    <ul>
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
            <AutoSaveCurrentKeywordWrap>
                <span>최근 검색어 자동 저장</span>
                <AutoSaveCurrentKeywordButton
                    isOn={isAutoSaveCurrentKeyword}
                    onClick={() => {
                        setIsAutoSaveCurrentKeyword((prev) => !prev);
                    }}
                >
                    {isAutoSaveCurrentKeyword ? 'ON' : 'OFF'}
                </AutoSaveCurrentKeywordButton>
            </AutoSaveCurrentKeywordWrap>
        </>
    );
};

export default CurrentKeywordList;

const CurrentKeywordDisplay = styled(FlexX).attrs({ as: 'p' })`
    padding: 37px 0;
    justify-content: center;
    color: ${ColorUI.Text};
    font-size: 14px;
    em {
        color: ${Color.Primary};
    }
`;

const AutoSaveCurrentKeywordWrap = styled(FlexX)`
    align-items: center;
    column-gap: 7px;
    background-color: ${ColorUI.AutoSaveCurrentKeywordWrapperBackground};
    padding: 10px 12px;
    margin-left: -12px;
    margin-right: -12px;
    margin-bottom: -12px;
    span {
        color: ${Color.Secondary};
    }
`;

const AutoSaveCurrentKeywordButton = styled(FlexX).attrs({ as: 'button' })<{ isOn: boolean }>`
    border: 0;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 15px;
    height: 21px;
    width: 40px;
    background-color: ${(props) => (props.isOn ? Color.Primary : ColorUI.ButtonOff)};
    color: ${Color.Empty};
`;
