import { BannerType } from 'lib/enum/MainBanner';

export interface IMainBanner {
    id: string;
    bannerType: BannerType;
    periodText: string;
    titleText: string;
    subText: string;
    imageURL: string;
    URL: string;
}
