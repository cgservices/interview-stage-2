import { GlobalTheme } from './global-theme';

describe('GlobalTheme', () => {
  it('should have correct screen sizes', () => {
    expect(GlobalTheme.theme.screens).toEqual({
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md2: '991px',
      md: '768px',
      sm: '640px',
      sm2: '320px',
    });
  });

  it('should have a centered container with correct padding', () => {
    expect(GlobalTheme.theme.container.center).toBe(true);
    expect(GlobalTheme.theme.container.padding).toBe('1rem');
  });

  it('should have correct title fonts', () => {
    expect(GlobalTheme.theme.extend.fontFamily.title).toEqual(['roc-grotesk']);
  });

  it('should have correct body fonts', () => {
    expect(GlobalTheme.theme.extend.fontFamily.body).toEqual(['sofia-pro']);
  });

  it('should have correct sans fonts', () => {
    expect(GlobalTheme.theme.extend.fontFamily.sans).toEqual([
      'sofia-pro',
      'sans-serif',
    ]);
  });

  it('should have correct boxShadow settings', () => {
    expect(GlobalTheme.theme.extend.boxShadow).toEqual({
      cookieBanner: '-3px 0px 5px 6px rgba(0,0,0,.15)',
    });
  });

  it('should have correct gridTemplateColumns settings', () => {
    expect(GlobalTheme.theme.extend.gridTemplateColumns).toEqual({
      cookieBanner: '250px 250px',
    });
  });

  it('should have correct primary color settings', () => {
    expect(GlobalTheme.theme.extend.colors.primary).toEqual({
      main: '#05E27E',
      light: '#ECF9F2',
      dark: '#00B262',
      shadow: 'rgba(0, 107, 229, 0.3)',
    });
  });

  it('should have correct secondary color settings', () => {
    expect(GlobalTheme.theme.extend.colors.secondary).toEqual({
      light: '#F2F8F5',
      shadow: 'rgba(0, 107, 229, 0.3)',
    });
  });

  it('should have correct tertiary color settings', () => {
    expect(GlobalTheme.theme.extend.colors.tertiary).toEqual({
      light: '#E3E7E8',
      shadow: 'rgba(0, 107, 229, 0.3)',
    });
  });

  it('should have correct keyframes for circle-loading', () => {
    expect(GlobalTheme.theme.extend.keyframes['circle-loading']).toEqual({
      '0%': {
        'clip-path': 'polygon(5% 0, 0 0, 0 100%, 5% 0)',
      },
      '20%': {
        'clip-path': 'polygon(15% 0, 0 0, 0 100%, 15% 100%)',
      },
      '40%': {
        'clip-path': 'polygon(44% 0, 0 0, 0 100%, 44% 100%)',
      },
      '75%': {
        'clip-path': 'polygon(72% 0, 0 0, 0 100%, 72% 100%)',
      },
      '85%': {
        'clip-path': 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
      },
    });
  });

  it('should have correct animation settings', () => {
    expect(GlobalTheme.theme.extend.animation).toEqual({
      'circle-loading':
        '2s circle-loading infinite cubic-bezier(0, 0.92, 0.95, 0.48)',
    });
  });
});
