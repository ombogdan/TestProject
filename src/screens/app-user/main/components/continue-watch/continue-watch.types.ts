import {Banner} from "shared/types";

export interface BannerItemProps {
  lastWatchingData: {
    serial: Banner;
    episodeIndex: number;
    episodeTime: number;
  };
}
