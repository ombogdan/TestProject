export interface IAppTheme {
  palette: {
    black: `#${string}`;
    blackText: `#${string}`;
    white: `#${string}`;
    blueIris: `#${string}`;
    suggestionButton: `#${string}`;
    textDefault: `#${string}`;
    transparentGray: `#${string}`;
    gray: `#${string}`;
    grayLight: `#${string}`;
    red: `#${string}`;
    textDefaultTransparent: `rgba(${number}, ${number}, ${number}, ${number})`;
    grayTransparentNew: `rgba(${number}, ${number}, ${number}, ${number})`;
  };
}

export const defaultTheme: IAppTheme = {
  palette: {
    black: '#000000',
    blackText: '#1F1D2B',
    textDefault: '#292941',
    textDefaultTransparent: 'rgba(41, 41, 65, 0.63)',
    blueIris: '#372FB6',
    suggestionButton: '#454AB1',
    transparentGray: '#F7F7F9',
    grayTransparentNew: `rgba(217, 217, 217, 1)`,
    white: '#FFFFFF',
    gray: '#D1D1D6',
    grayLight: '#D9D9D9',
    red: '#E25A5A',
  }
};
