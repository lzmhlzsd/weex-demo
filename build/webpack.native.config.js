var webpack = require('webpack')
var path = require('path');
var fs = require('fs');

// var bannerPlugin = new webpack.BannerPlugin(
//     '// { "framework": "Vue" }\n',
//     { raw: true }
// )

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

var entry = {};
var outPath="native";

function walk(root,dir) {
    var directory = path.join(__dirname, root, dir);
    fs.readdirSync(directory)
        .forEach(function (file) {
            var fullpath = path.join(directory, file);
            var stat = fs.statSync(fullpath);
            if (stat.isFile() && path.extname(fullpath) === '.vue') {
                //dir.substr(6)是在dist里去掉pages这层文件夹
                var name = path.join(outPath, dir.substr(6), path.basename(file, '.vue'));
                entry[name] = fullpath + '?entry=true'
            } else if (stat.isDirectory()) {
                var subdir = path.join(dir, file);
                walk(root,subdir)
            }
        })
}
walk( '../src', '/views' );
console.log(entry)
module.exports = {
    entry:entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    // node: {
    //     global: true
    // },
    module: {
        loaders: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['weex-loader']
            },
            {
                test:/\.js(\?[^?]+)?$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [bannerPlugin]
};