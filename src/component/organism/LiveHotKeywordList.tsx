import { List, Item } from 'component/morecule/List';
import { icoFlucArrowUp, icoFlucArrowDown, icoFlucNew } from 'lib/icon';
import { ILiveHotKeyword } from 'lib/model/LiveHotKeyword';
import { Palette } from 'style/variable/color';
import styled from 'styled-components';

interface IProps {
    items?: ILiveHotKeyword[];
}

const LiveHotKeywordList = ({ items }: IProps) => {
    return (
        <LHKList>
            {items?.map((row, index) => {
                return (
                    <LHKItem upDown={row.upDown} showText={row.showText}>
                        <a href="#">
                            <span>{index + 1}</span>
                            <em>{row.keyword}</em>
                            <i className={row.upDown}>{row.showText !== 'new' && row.showText}</i>
                        </a>
                    </LHKItem>
                );
            })}
        </LHKList>
    );
};

export default LiveHotKeywordList;

const LHKList = styled(List)`
    padding-top: 10px;
    margin: 0 -12px;
`;

const LHKItem = styled(Item)<{ upDown: string; showText: string }>`
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
