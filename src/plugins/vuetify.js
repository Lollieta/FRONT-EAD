// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: true,
        colors: {
          primary: '#333333',
          secondary: '#800020',
          accent: '#C0C0C0',
          support: '#D3D3D3'
        },
      },
    },
  }
})

export default vuetify
