
// ref: https://umijs.org/config/
export default {
  publicPath: 'https://lancelixiang.github.io/my-umi/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi',
      dll: true,
      hardSource: true,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
}
