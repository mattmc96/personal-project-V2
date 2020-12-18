module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.js', './src/**/*.tsx', './src/**/*.ts', './public/index.html'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
        cssnano({
            preset: 'default',
        }),
        purgecss({
            content: ['./layouts/**/*.html', './src/'],
        }),
    ],
};
