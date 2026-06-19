/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A73E8',
          on: '#FFFFFF',
          container: '#D3E3FD',
          'on-container': '#041E49',
        },
        secondary: {
          DEFAULT: '#4285F4',
          container: '#E8F0FE',
          'on-container': '#1A237E',
        },
        tertiary: {
          DEFAULT: '#34A853',
          container: '#E6F4EA',
          'on-container': '#0D652D',
        },
        error: {
          DEFAULT: '#EA4335',
          container: '#FCE8E6',
          on: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#FBBC04',
          container: '#FEF7E0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          variant: '#E8EAED',
          on: '#202124',
          'on-variant': '#5F6368',
        },
        background: {
          DEFAULT: '#F8F9FA',
          on: '#202124',
        },
        outline: {
          DEFAULT: '#DADCE0',
          variant: '#BDC1C6',
        },
      },
      fontFamily: {
        sans: ["Google Sans", "Roboto", "system-ui", "sans-serif"],
        mono: ["Google Sans Mono", "Roboto Mono", "monospace"],
        syne: ["Syne", "sans-serif"], // Keeping Syne for now as it's used in the original JSX
      },
      fontSize: {
        'display-large': ['57px', { lineHeight: '1', fontWeight: '400', letterSpacing: '-0.25px' }],
        'headline-large': ['32px', { lineHeight: '1', fontWeight: '400' }],
        'headline-medium': ['28px', { lineHeight: '1', fontWeight: '400' }],
        'title-large': ['22px', { lineHeight: '1', fontWeight: '500' }],
        'title-medium': ['16px', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.15px' }],
        'body-large': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-large': ['14px', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.1px' }],
        'label-small': ['11px', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.5px' }],
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
      },
      borderRadius: {
        'none': '0px',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '28px',
        'full': '9999px',
      },
      boxShadow: {
        'level-1': '0 1px 2px rgba(0,0,0,0.10), 0 1px 3px 1px rgba(0,0,0,0.06)',
        'level-2': '0 1px 2px rgba(0,0,0,0.10), 0 2px 6px 2px rgba(0,0,0,0.08)',
        'level-3': '0 4px 8px 3px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.12)',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.2, 0, 0, 1)',
        'emphasized': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'decelerate': 'cubic-bezier(0, 0, 0, 1)',
      },
      transitionDuration: {
        'small': '200ms',
        'medium': '300ms',
        'large': '500ms',
      },
    },
  },
  plugins: [],
}
