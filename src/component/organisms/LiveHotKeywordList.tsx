import FlexX from 'component/extends/FlexX';
import FlexY from 'component/extends/FlexY';
import { icoFlucArrowUp, icoFlucArrowDown, icoFlucNew } from 'lib/icon';
import { ILiveHotKeyword } from 'lib/model/LiveHotKeyword';
import { Palette } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    items?: ILiveHotKeyword[];
}

const LiveHotKeywordList = ({ items }: IProps) => {
    return (
        <List>
            {items?.map((row, index) => {
                return (
                    <Item upDown={row.upDown} showText={row.showText}>
                        <a href="#">
                            <span>{index + 1}</span>
                            <em>{row.keyword}</em>
                            <i className={row.upDown}>{row.showText !== 'new' && row.showText}</i>
                        </a>
                    </Item>
                );
            })}
        </List>
    );
};

export default LiveHotKeywordList;

const List = styled(FlexY).attrs({ as: 'ol' })`
    padding-top: 10px;
    margin: 0 -12px;
`;

const Item = styled(FlexX).attrs({ as: 'li' })<{ upDown: string; showText: string }>`
    a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 33px;
        padding-left: 15px;
        &:hover {
            background-color: ${Palette.BlueOC};
        }
    }
    span {
        font-size: 11px;
        margin-right: 12px;
        width: 16px;
        text-align: right;
    }
    i {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 4px;
        font-size: 11px;
        margin-right: 15px;
        margin-left: auto;
        color: ${(props) => (props.upDown === 'none' ? Palette.Red : undefined)};
        &.up::before,
        &.down::before {
            content: '';
            display: block;
            width: 7px;
            height: 7px;
        }
        &.up::before {
            background-image: url(${icoFlucArrowUp});
        }
        &.down::before {
            background-image: url(${icoFlucArrowDown});
        }
        &::before {
            content: ${(props) => (props.showText === 'new' ? `'new'` : undefined)};
            font-size: 0;
            display: block;
            width: 22px;
            height: 5px;
            background-image: ${(props) => (props.showText === 'new' ? `url(${icoFlucNew})` : undefined)};
        }
    }
`;
