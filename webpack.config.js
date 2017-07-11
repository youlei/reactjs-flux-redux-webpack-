var webpack = require('webpack');
/**
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    //name:'common', // 注意不要.js后缀
    name:['common','jquery','react'],
    name:["module1","module2",'jquery','all']
    //minChunks:2
});
*/
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({ 
    name:['common'], // 注意不要.js后缀 
    minChunks:2 
});
var bannerPlugin=new webpack.BannerPlugin("@copyright ctirp dingzhi lyou");
var hotModulePlugin = new webpack.HotModuleReplacementPlugin();
var ExtractTextPlugin = require("extract-text-webpack-plugin");//d单独打包css使用
var extractTextPlugin=new ExtractTextPlugin("[name].css");
/**
不配置任何选项的html-webpack-plugin插件，
他会默认将webpack中的entry配置所有入口thunk和extract-text-webpack-plugin抽取的css样式都插入到文件指定的位置。
title: 用来生成页面的 title 元素
filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。
template: 模板文件路径，支持加载器，比如 html!./index.html
inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
favicon: 添加特定的 favicon 路径到输出的 HTML 文件中。
minify: {} | false , 传递 html-minifier 选项给 minify 输出
hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件。
showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
chunks: 允许只添加某些块 (比如，仅仅 unit test 块)
chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块) 
*/
var _dirname="E:/font/webpack/webpack";

var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPlugin=new HtmlWebpackPlugin({
    title:"youleiHtml",
    filename:'youleiHome.html',
    template: "./src/index.tpl.html"

});
var defaultHtmlPlugin=new HtmlWebpackPlugin({
    title:'myIndexHtml',
    file:'myIndex.html',
    template:'./src/myIndex.tpl.hbs',
    inject:"body"
});
var htmlTemplate=new HtmlWebpackPlugin({
    file:'tpl1.html',
    template:'./src/tpl1.html',
    inject:false,
    filename:'tpl1.html'

});
var indexTemplate=new HtmlWebpackPlugin({
    file:'index.html',
    template:'./src/index.template.html', 
    inject:false,
    filename:'index.html'
});
var productListTemplate=new HtmlWebpackPlugin({
    file:'productList.html',
    template:'./src/list.template.html',
    inject:false,
    filename:'productList.html'
});
var path = require('path');

module.exports = {
	devtool:'eval-source-map',//18
    //devtool:'source-map', 25s
    //插件项
    plugins: [commonsPlugin,bannerPlugin,hotModulePlugin , indexTemplate,htmlTemplate,productListTemplate,extractTextPlugin],
    //页面入口文件配置
    /**
    entry: {
        
        //main:'./src/main.js'
    },
    */
    entry:{
        //app:['webpack-dev-server/client?http://127.0.0.1:8080', 'webpack/hot/dev-server', './src/main.js'],
        //component1:["react","react-dom"],
        //otherIndex:'./src/app.js',
        //reactComponent:["react","react-dom"],
        index:"./src/index",
        list:'./src/list/productList',
        //module1:'./src/module1',
        //module2:'./src/module2',
        jquery:'jquery',
        react:"react",
        'react-dom':'react-dom'
    },
    //入口文件输出配置
    output: {
        // 输出文件的目录
        path: path.resolve("./webroot/dest"),
        //输出的文件名
        filename: '[name]-[hash].js',
        //被webpack 的插件用于在生产模式下更新内嵌的css，html 中的url
        //publicPath: "http://localhost/webpack/",
        //
        chunkFilename: "[id].chunk.js?[hash:8]"
    },
    module: {
        //加载器配置
        loaders: [
            //{ test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.css$/, loader:ExtractTextPlugin.extract("css-loader")}, 
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\..json$/,loader:"json"},
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.js$/, loader:'babel-loader', query:{presets:['es2015','react']}},
            { test: /\.hbs$/, loader: "handlebars" }
        ]
    },
    // devserver 作为wepack 中的配置选项具有以下配置选项
    devServer:{
        /**
        contentBase:'./public',
        port:8080,
        inline:true,
        colors:true
        */
        /**
        port:8080,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
        */

    }
    //其它解决方案配置
    /**
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
    */
};