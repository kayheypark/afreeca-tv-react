import Grid from 'component/atom/Grid';
import Title from 'component/atom/TItle';
import StreamCard from 'component/morecule/StreamCard';

const AllList = () => {
    return (
        <section>
            <Title>전체</Title>
            <Grid rowCount={4} gap={20}>
                <StreamCard isStatic />
                <StreamCard isStatic />
                <StreamCard isStatic />
                <StreamCard isStatic />
                <StreamCard isStatic />
            </Grid>
        </section>
    );
};

export default AllList;
