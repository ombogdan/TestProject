export interface IAppTheme {
  palette: {
    black: `#${string}`;
    blackText: `#${string}`;
    blueIris: `#${string}`;
    textDefault: `#${string}`;
    grayLight: `#${string}`;
  };
}

export const defaultTheme: IAppTheme = {
  palette: {
    black: '#0F0F0F',
    blackText: '#1F1D2B',
    textDefault: '#F5F5F5',
    grayLight: '#EBEDF0',
    blueIris: '#00BFE5',
  }
};
