export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
}

export interface ImageFormats {
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
  thumbnail: ImageFormat;
}
