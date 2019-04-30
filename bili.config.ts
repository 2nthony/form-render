import { Config } from 'bili'

const config: Config = {
  output: {
    fileName: 'form-render.cjs.js',
    minify: true
  },
  plugins: {
    vue: true
  }
}

export default config
