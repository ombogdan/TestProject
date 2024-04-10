export type Banner = {
  "id": number;
  "name": string;
  "author": string;
  "genre": string;
  "photo_url": string;
  "video_url": string;
  "close"?: boolean;
  "release_date"?: string;
  "episodesList": Array<{
    "id": number,
    "name": string,
    "video_url": string
  }>;
}
