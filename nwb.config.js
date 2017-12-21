module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ne-react-components',
      externals: {
        react: 'React'
      }
    }
  }
}
