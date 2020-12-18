module.exports = {
    plugins: [
      require('tailwindcss'),
        require('autoprefixer')
      cssnano({
        preset: 'default'
      }),
      purgecss({
        content: ['./layouts/**/*.html', './src/']
      })
    ],


};
