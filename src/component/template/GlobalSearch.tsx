import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/parts/FlexX';
import FlexY from 'component/parts/FlexY';
import { Color, ColorMean, ColorUI } from 'style/variable/color';
import useBoxblur from 'hook/useBoxblur';
import icoSearch from 'asset/icon/ico_search.svg';
import Button from 'component/parts/Button';

enum ContentModeType {
    Current = 1,
    Live,
    Recommand,
}

const GlobalSearch = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');
    const [contentMode, setContentMode] = useState<ContentModeType>(ContentModeType.Current);

    const handleClickRemoveKeyword = (): void => {
        setKeyword('');
    };

    const handleClickContentModeButton = (mode: ContentModeType): void => {
        setContentMode(mode);
    };

    const renderContent = (contentMode: ContentModeType): JSX.Element => {
        switch (contentMode) {
            case ContentModeType.Current:
                return <h1>Current</h1>;
            case ContentModeType.Live:
                return <h1>Live</h1>;
            case ContentModeType.Recommand:
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
                <div>
                    <ContentModeTab>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.Current ? ColorMean.Primary : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.Current)}
                            >
                                최근 검색어
                            </ContentModeTabButton>
                        </li>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.Live ? ColorMean.Primary : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.Live)}
                            >
                                실시간 인기 검색어
                            </ContentModeTabButton>
                        </li>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.Recommand ? ColorMean.Primary : 'transparent',
                                }}
                                onClick={() => handleClickContentModeButton(ContentModeType.Recommand)}
                            >
                                개인화 추천 검색어
                            </ContentModeTabButton>
                        </li>
                    </ContentModeTab>
                    {renderContent(contentMode)}
                </div>
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
    row-gap: 19px;
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
    li {
        display: flex;
    }
`;

const ContentModeTabButton = styled(FlexX).attrs({ as: 'button' })`
    border: 0;
    padding: 0;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    color: #888888;
    font-size: 12px;
`;
