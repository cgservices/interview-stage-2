export type GlobalThemeType = {
  darkMode: string[];
  theme: {
    screens: {
      '2xl': string;
      xl: string;
      lg: string;
      md2: string;
      md: string;
      sm: string;
      sm2: string;
    };
    container: {
      center: boolean;
      padding: string;
    };
    extend: {
      fontFamily: {
        title: string[];
        body: string[];
        sans: string[];
      };
      boxShadow: {
        cookieBanner: string;
      };
      gridTemplateColumns: {
        cookieBanner: string;
      };
      colors: {
        primary: {
          main: string;
          light: string;
          dark: string;
          shadow: string;
        };
        secondary: {
          light: string;
          shadow: string;
        };
        tertiary: {
          light: string;
          shadow: string;
        };
        background: {
          primary: string;
        };
        interaction: string;
        highlight: string;
        semantic: {
          information: {
            darker: string;
          };
        };
        monochrome: {
          white: string;
          light: string;
          lighter: string;
          mid: string;
          dark: string;
          darker: string;
          black: string;
        };
        valid: {
          main: string;
          light: string;
          dark: string;
        };
        invalid: {
          main: string;
          light: string;
          dark: string;
        };
        info: {
          main: string;
          light: string;
          dark: string;
        };
        warn: {
          main: string;
          light: string;
          dark: string;
        };
      };
      keyframes: {
        [key: string]: {
          [key: string]: {
            'clip-path': string;
          };
        };
      };
      animation: {
        [key: string]: string;
      };
    };
  };
};

export const GlobalTheme: GlobalThemeType = {
  darkMode: ['class'],
  theme: {
    screens: {
      '2xl': '1536px',
      xl: '1280px',
      lg: '1024px',
      md2: '991px',
      md: '768px',
      sm: '640px',
      sm2: '320px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        title: ['roc-grotesk'],
        body: ['sofia-pro'],
        sans: ['sofia-pro', 'sans-serif'],
      },
      boxShadow: {
        cookieBanner: '-3px 0px 5px 6px rgba(0,0,0,.15)',
      },
      gridTemplateColumns: {
        cookieBanner: '250px 250px',
      },
      colors: {
        primary: {
          main: '#05E27E',
          light: '#ECF9F2',
          dark: '#00B262',
          shadow: 'rgba(0, 107, 229, 0.3)',
        },

        secondary: {
          light: '#F2F8F5',
          shadow: 'rgba(0, 107, 229, 0.3)',
        },

        tertiary: {
          light: '#E3E7E8',
          shadow: 'rgba(0, 107, 229, 0.3)',
        },

        background: {
          primary: '#00373D',
        },

        interaction: '#006BE5',
        highlight: '#FFDD00',
        semantic: {
          information: {
            darker: '#003C94',
          },
        },
        monochrome: {
          white: '#ffffff',
          light: '#C7D0D1',
          lighter: '#F4F6F6',
          mid: '#738A8C',
          dark: '#224144',
          darker: '#032E33',
          black: '#0D2426',
        },

        valid: {
          main: '#35A440',
          light: '#D6F1D9',
          dark: '#26782E',
        },

        invalid: {
          main: '#D2373C',
          light: '#FFCACC',
          dark: '#9D1217',
        },

        info: {
          main: '#004FC2',
          light: '#CCE0FF',
          dark: '#003C94',
        },

        warn: {
          main: '#FFBE18',
          light: '#FFF7AE',
          dark: '#D9A00E',
        },
      },
      keyframes: {
        'circle-loading': {
          '0%': { 'clip-path': 'polygon(5% 0, 0 0, 0 100%, 5% 0)' },
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
        },
      },
      animation: {
        'circle-loading':
          '2s circle-loading infinite cubic-bezier(0, 0.92, 0.95, 0.48)',
      },
    },
  },
};
