import { IMainBanner } from 'lib/model/MainBanner';
import BannerImage1 from 'asset/content/main_swiper_1.png';
import BannerImage2 from 'asset/content/main_swiper_2.png';
import BannerImage3 from 'asset/content/main_swiper_3.png';
import BannerImage4 from 'asset/content/main_swiper_4.png';
import BannerImage5 from 'asset/content/main_swiper_5.png';
import BannerImage6 from 'asset/content/main_swiper_6.png';
import { v4 } from 'uuid';
import { BannerType } from 'lib/enum/MainBanner';

export const DummyMainBanner: IMainBanner[] = [
    {
        id: v4(),
        bannerType: BannerType.Live,
        periodText: '12/30(금) 저녁 8시',
        titleText: '은은한♡은이',
        subText: '은CK 시즌3\n8강전',
        imageURL: BannerImage4,
        URL: '/',
    },
    {
        id: v4(),
        bannerType: BannerType.Live,
        periodText: '12/30(금) 저녁 7시',
        titleText: '팽팽한 롤 대회',
        subText: 'A vs B\n준결승전',
        imageURL: BannerImage5,
        URL: '/',
    },
    {
        id: v4(),
        bannerType: BannerType.Live,
        periodText: '12/30(금) 저녁 8시 30분',
        titleText: 'PBA-LPBA 챔피언십',
        subText: '6차대회\n남자 128강 제4턴',
        imageURL: BannerImage6,
        URL: '/',
    },
    {
        id: v4(),
        bannerType: BannerType.Default,
        periodText: '12/19(월) ~ 1/2(월)',
        titleText: '강남좀비',
        subText: '시사회 이벤트\n댓글달고 영화보자!',
        imageURL: BannerImage1,
        URL: '/',
    },
    {
        id: v4(),
        bannerType: BannerType.Default,
        periodText: '1/10(화) 오후 2시',
        titleText: '취미가 곧 컨텐츠다',
        subText: '당신의 취미를\n보여주세요!',
        imageURL: BannerImage2,
        URL: '/',
    },
    {
        id: v4(),
        bannerType: BannerType.Default,
        periodText: '1/7(토) 저녁 6시',
        titleText: '데니안 Danny’s Day',
        subText: '덴생네컷!\n온라인 관람 티켓 판매 중',
        imageURL: BannerImage3,
        URL: '/',
    },
];
