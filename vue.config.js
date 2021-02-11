module.exports = {
    lintOnSave: false,
    configureWebpack: {
        externals: {
            vueBootstrap: {
                commonjs: "vue-bootstrap.js",
                root: "vue-boostrap"
            }
        }
    }
}
