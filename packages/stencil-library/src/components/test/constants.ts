const DEFAULT_HEIGHT: number = 480;
const DEFAULT_DEVICE_SCALE_FACTOR: number = 1;
type DeviceName = 'MOBILE_LG' | 'TABLET' | 'DESKTOP';

type Viewport = {
  width: number;
  height: number;
  deviceScaleFactor: number;
};

// Taken from USDWS responsive variant values: https://designsystem.digital.gov/utilities/display/#responsive-variants-2
export const VIEWPORT: { [Device in DeviceName]: Viewport } = {
  MOBILE_LG: {
    width: 480,
    height: DEFAULT_HEIGHT,
    deviceScaleFactor: DEFAULT_DEVICE_SCALE_FACTOR,
  },
  TABLET: {
    width: 640,
    height: DEFAULT_HEIGHT,
    deviceScaleFactor: DEFAULT_DEVICE_SCALE_FACTOR,
  },
  DESKTOP: {
    width: 1024,
    height: DEFAULT_HEIGHT,
    deviceScaleFactor: DEFAULT_DEVICE_SCALE_FACTOR,
  },
} as const;
