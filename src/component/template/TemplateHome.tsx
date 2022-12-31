import ListSection from 'component/atom/ListSection';
import AdvertisingBanner from 'component/organism/AdvertisingBanner';
import MainBanner from 'component/organism/MainBanner';

const TemplateHome = () => {
    return (
        <>
            <MainBanner />
            <ListSection>
                <AdvertisingBanner />
            </ListSection>
        </>
    );
};

export default TemplateHome;
