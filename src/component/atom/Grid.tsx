import styled from 'styled-components';
import FlexX from 'component/atom/FlexX';

interface IProps {
    rowCount?: number;
    gap?: number;
    children: JSX.Element[];
}

const Grid = ({ rowCount = 4, gap = 20, children }: IProps) => {
    const List = styled(FlexX).attrs({ as: 'ul' })`
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: ${gap}px;
    `;
    const Item = styled(FlexX).attrs({ as: 'li' })`
        width: calc(((100% / ${rowCount}) - ${gap}px) + (${gap}px / ${rowCount}));
    `;

    return (
        <List>
            {children.map((item) => {
                return <Item>{item}</Item>;
            })}
        </List>
    );
};

export default Grid;
