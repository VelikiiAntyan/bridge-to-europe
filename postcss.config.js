module.exports = {
    plugins: [
        // postcss: function() {
        //     return [autoprefixer, precss, new cssnano({ zindex: false })];
        // },
        require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 11']
        }),
        require("css-mqpacker"),
        require('cssnano')({ zindex: false })
    ]
};
