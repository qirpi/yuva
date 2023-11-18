const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  // To use dynamic classes in our ERB templates, we must safelist them here, otherwise the compiler
  // won't generate the styles for them.
  safelist: [
    'bg-stone-100/60',
    'bg-red-100/60',
    'bg-orange-100/60',
    'bg-amber-100/60',
    'bg-yellow-100/60',
    'bg-lime-100/60',
    'bg-green-100/60',
    'bg-emerald-100/60',
    'bg-teal-100/60',
    'bg-cyan-100/60',
    'bg-sky-100/60',
    'bg-blue-100/60',
    'bg-indigo-100/60',
    'bg-violet-100/60',
    'bg-purple-100/60',
    'bg-fuchsia-100/60',
    'bg-pink-100/60',
    'bg-rose-100/60',

    'border-stone-300',
    'border-red-300',
    'border-orange-300',
    'border-amber-300',
    'border-yellow-300',
    'border-lime-300',
    'border-green-300',
    'border-emerald-300',
    'border-teal-300',
    'border-cyan-300',
    'border-sky-300',
    'border-blue-300',
    'border-indigo-300',
    'border-violet-300',
    'border-purple-300',
    'border-fuchsia-300',
    'border-pink-300',
    'border-rose-300',

    'shadow-stone-200',
    'shadow-red-200',
    'shadow-orange-200',
    'shadow-amber-200',
    'shadow-yellow-200',
    'shadow-lime-200',
    'shadow-green-200',
    'shadow-emerald-200',
    'shadow-teal-200',
    'shadow-cyan-200',
    'shadow-sky-200',
    'shadow-blue-200',
    'shadow-indigo-200',
    'shadow-violet-200',
    'shadow-purple-200',
    'shadow-fuchsia-200',
    'shadow-pink-200',
    'shadow-rose-200',

    'hover:shadow-stone-200',
    'hover:shadow-red-200',
    'hover:shadow-orange-200',
    'hover:shadow-amber-200',
    'hover:shadow-yellow-200',
    'hover:shadow-lime-200',
    'hover:shadow-green-200',
    'hover:shadow-emerald-200',
    'hover:shadow-teal-200',
    'hover:shadow-cyan-200',
    'hover:shadow-sky-200',
    'hover:shadow-blue-200',
    'hover:shadow-indigo-200',
    'hover:shadow-violet-200',
    'hover:shadow-purple-200',
    'hover:shadow-fuchsia-200',
    'hover:shadow-pink-200',
    'hover:shadow-rose-200',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'wiggle-short': 'wiggle 0.3s ease-in-out 1',
        'bounce-short': 'bounce 0.6s ease-in-out 1',
        'pulse-short': 'pulse 0.5s ease-in-out 1',
        'ping-short': 'ping 0.5s ease-in-out 0.5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
