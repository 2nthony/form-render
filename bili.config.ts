import { Config } from 'bili'

const config: Config = {
  output: {
    fileName: 'form-renderer.cjs.js',
    minify: true
  },
  plugins: {
    vue: true
  }
}

export default config
