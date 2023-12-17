module.exports = {
  // preset 是Babel对不同版本的JS语法的一种支持编译
  // plugin 是用于某些特殊语法的支持与编译

  // @babel/preset-env作用是把ES6编辑成流量浏览器能够兼容的ES5代码
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ],
  "plugins": [
    ["@babel/plugin-transform-destructuring"],
    // 下面两个插件的作用是编译装饰器语法
    ["@babel/plugin-proposal-class-properties", { "legacy": true }],
    // ["@babel/plugin-syntax-dynamic-import"]
    // ["@babel/plugin-proposal-decorators", { "loose": true }]
  ]
}
