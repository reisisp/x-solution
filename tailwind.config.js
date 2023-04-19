/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      default: ['Lato'],
    },
    fontSize: {
      baseH1: ['32px', {
        lineHeight: '38px',
      }],
      baseH2: ['20px', {
        lineHeight: '24px',
      }],
      basetext: ['16px', {
        lineHeight: '19px',
      }],
      basetext2: ['16px', {
        lineHeight: '21px',
      }],
      basetext3: ['14px', {
        lineHeight: '16px',
      }],
      basetext4: ['13px', {
        lineHeight: '20px',
      }],
      basetext5: ['10px', {
        lineHeight: '16px',
      }],
      basetext6: ['10px', {
        lineHeight: '20px',
      }],
    },
    borderRadius: {
      normal: '36px',
      full: '9999px',
    },
    colors: {
      'primary': 'var(--color-text-primary)',
      'secondary': 'var(--color-text-secondary)',
      'error': 'var(--color-text-error)',
      'success': 'var(--color-text-success)',
      'bg-primary': 'var(--color-bg-primary)',
      'bg-tag': 'var(--color-bg-tag)',
      'color-secondary': 'var(--color-secondary)',
      'color-success': 'var(--color-success)',
      'color-border': 'var(--color-border)',
      'text-nav': 'var(--color-text-nav)',
    },
    extend: {},
  },
  plugins: [],
}

