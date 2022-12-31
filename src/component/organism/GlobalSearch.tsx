import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';
import FlexY from 'component/atom/FlexY';
import { Color, ColorUI } from 'style/variable/color';
import useBoxblur from 'hook/useBoxblur';
import Button from 'component/atom/Button';
import { DummyLiveHotKeyword } from 'lib/dummy/GlobalSearch';
import { ILiveHotKeyword } from 'lib/model/LiveHotKeyword';
import LiveHotKeywordList from 'component/morecule/LiveHotKeywordList';
import { icoSearch, IconCloseWhite } from 'lib/icon';
import CurrentKeywordList from 'component/morecule/CurrentKeywordList';

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
    const [liveHotKeyword, setLiveHotKeyword] = useState<ILiveHotKeyword[] | undefined>(DummyLiveHotKeyword);

    const handleClickRemoveKeyword = (): void => {
        setKeyword('');
    };

    const handleClickContentModeButton = (mode: ContentModeType): void => {
        setContentMode(mode);
    };

    const renderContent = (contentMode: ContentModeType): JSX.Element => {
        switch (contentMode) {
            case ContentModeType.CurrentKeyword:
                return <CurrentKeywordList items={currentKeyword} />;
            case ContentModeType.LiveHotKeyword:
                return <LiveHotKeywordList items={liveHotKeyword} />;
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
        <Wrapper ref={wrapperRef} isActive={isActive}>
            <InputWrapper onClick={() => setIsActive(true)}>
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <RemoveKeywordButton keyword={keyword} onClick={handleClickRemoveKeyword}>
                    검색어 지우기
                </RemoveKeywordButton>
                <SubmitButton src={icoSearch} onClick={() => console.info(keyword)}>
                    검색
                </SubmitButton>
            </InputWrapper>
            {isActive && (
                <FlexY>
                    <ContentModeTab>
                        <li>
                            <ContentModeTabButton
                                style={{
                                    borderColor:
                                        contentMode === ContentModeType.CurrentKeyword ? Color.Primary : 'transparent',
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
                                        contentMode === ContentModeType.LiveHotKeyword ? Color.Primary : 'transparent',
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
                                            ? Color.Primary
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
    border: 1px solid ${Color.Primary};
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

const RemoveKeywordButton = styled(Button).attrs({ as: 'button' })<{ keyword: string }>`
    display: ${(props) => (props.keyword === '' ? 'none' : 'flex')};
    background-image: url(${IconCloseWhite});
    width: 18px;
    height: 18px;
    background-color: #dddddd;
    border-radius: 9px;
    background-size: 10px;
    position: absolute;
    right: 45px;
`;

const SubmitButton = styled(Button)<{ src: React.FunctionComponent<React.SVGAttributes<SVGElement>> }>`
    position: absolute;
    right: 4px;
    background-image: ${(props) => `url(${props.src})`};
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
