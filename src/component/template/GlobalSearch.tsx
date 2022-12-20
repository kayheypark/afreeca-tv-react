import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/parts/FlexX';
import FlexY from 'component/parts/FlexY';
import { Color, ColorMean, ColorUI } from 'style/variable/color';
import useBoxblur from 'hook/useBoxblur';
import icoSearch from 'asset/icon/ico_search.svg';
import Button from 'component/parts/Button';

enum ContentModeType {
    CurrentKeyword = 1,
    LiveHotKeyword,
    RecommandKeyword,
}

const GlobalSearch = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');
    const [contentMode, setContentMode] = useState<ContentModeType>(ContentModeType.CurrentKeyword);

    const [currentKeyword, setCurrentKeyword] = useState<string[] | undefined>(undefined);
    const [isAutoSaveCurrentKeyword, setIsAutoSaveCurrentKeyword] = useState<boolean>(false);

    const handleClickRemoveKeyword = (): void => {
        setKeyword('');
    };

    const handleClickContentModeButton = (mode: ContentModeType): void => {
        setContentMode(mode);
    };

    const renderContent = (contentMode: ContentModeType): JSX.Element => {
        switch (contentMode) {
            case ContentModeType.CurrentKeyword:
                return (
                    <>
                        <div>
                            {!currentKeyword ? (
                                isAutoSaveCurrentKeyword ? (
                                    <CurrentKeywordDisplay>최근 검색어가 없습니다.</CurrentKeywordDisplay>
                                ) : (
                                    <CurrentKeywordDisplay>
                                        <em>최근 검색어 자동저장</em>이 꺼져있습니다.
                                    </CurrentKeywordDisplay>
                                )
                            ) : (
                                <ul>
                                    {currentKeyword.map((item) => (
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
            case ContentModeType.LiveHotKeyword:
                return <h1>Live</h1>;
            case ContentModeType.RecommandKeyword:
                return <h1>Recommand</h1>;
        }
    };

    useBoxblur({
        wrapperRef: wrapperRef,
        setState: setIsActive,
    });

    useEffect(() => {
        console.info(isActive);
    }, [isActive]);

    return (
        <Wrapper ref={wrapperRef} isActive={isActive} onClick={() => setIsActive(true)}>
            <InputWrapper>
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <RemoveKeywordButton keyword={keyword} onClick={handleClickRemoveKeyword}>
                    검색어 지우기
                </RemoveKeywordButton>
                <SubmitButton onClick={() => console.info(keyword)}>검색</SubmitButton>
            </InputWrapper>
            {isActive && (
                <FlexY>
                    <ContentModeTab>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.CurrentKeyword
                                            ? ColorMean.Primary
                                            : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.CurrentKeyword)}
                            >
                                최근 검색어
                            </ContentModeTabButton>
                        </li>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.LiveHotKeyword
                                            ? ColorMean.Primary
                                            : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.LiveHotKeyword)}
                            >
                                실시간 인기 검색어
                            </ContentModeTabButton>
                        </li>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.RecommandKeyword
                                            ? ColorMean.Primary
                                            : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.RecommandKeyword)}
                            >
                                개인화 추천 검색어
                            </ContentModeTabButton>
                        </li>
                    </ContentModeTab>
                    <ContentWrapper>{renderContent(contentMode)}</ContentWrapper>
                </FlexY>
            )}
        </Wrapper>
    );
};

export default GlobalSearch;

const Wrapper = styled(FlexY).attrs({ as: 'div' })<{ isActive: boolean }>`
    position: absolute;
    left: 244px;
    top: 10px;
    padding: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => (props.isActive ? '#ecf0f5' : 'transparent')};
    box-shadow: ${(props) => (props.isActive ? '0 0 4px #efefef' : 'none')};
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${ColorUI.Background};
    row-gap: 22px;
`;

const InputWrapper = styled(FlexX).attrs({ as: 'div' })`
    position: relative;
    border: 1px solid ${ColorMean.Primary};
    border-radius: 36px;
    width: 400px;
    height: 34px;
    padding: 0 34px 0 17px;
    align-items: center;
    input {
        border: 0;
        height: 80%;
        font-size: 15px;
        width: 100%;
    }
`;

const RemoveKeywordButton = styled(FlexX).attrs({ as: 'button' })<{ keyword: string }>`
    display: ${(props) => (props.keyword === '' ? 'none' : 'flex')};
`;

const SubmitButton = styled(Button)`
    position: absolute;
    right: 4px;
    background-image: ${`url(${icoSearch})`};
    background-size: 19px;
    width: 34px;
    height: 34px;
`;

const ContentModeTab = styled(FlexX).attrs({ as: 'ul' })`
    column-gap: 24px;
    padding-left: 4px;
    li {
        display: flex;
    }
`;

const ContentModeTabButton = styled(FlexX).attrs({ as: 'button' })`
    border: 0;
    padding: 0 0 3px 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    color: ${ColorUI.SearchContentModeTabColor};
    font-size: 12px;
`;

const ContentWrapper = FlexY;

const CurrentKeywordDisplay = styled(FlexX).attrs({ as: 'p' })`
    padding: 37px 0;
    justify-content: center;
    color: ${ColorUI.Text};
    font-size: 14px;
    em {
        color: ${ColorMean.Primary};
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
        color: ${ColorMean.Secondary};
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
    background-color: ${(props) => (props.isOn ? ColorMean.Primary : ColorUI.ButtonOff)};
    color: ${ColorMean.Empty};
`;
