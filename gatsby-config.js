module.exports = {
  siteMetadata: {
    title: 'Flor Nieto Website',
    description: 'Flor Nieto Interior Design Website',
    author: "southpress",
    navbarLinks: [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Proyectos',
        to: '/#projects'
      },
      {
        label: 'Servicios',
        to: '/#services'
      },
      {
        label: 'Prensa',
        to: '/prensa'
      },
      {
        label: 'Contacto',
        to: '/#contact-form'
      },
      {
        label: 'Sobre mi',
        to: '/about'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bitter: 400, 700`,
          `Montserrat: 100, 500, 600`,
          `Dosis: 100, 500, 600`,
        ],
        display: `swap`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/img/favicon2.png`,
        // WebApp Manifest Configuration
        appName: `Florencia Nieto diseñadora de arquitectura interior`, // Inferred with your package.json
        appDescription: `Esta web muestra el trabajo profesional realizado por la diseñadora Florencia Nieto`,
        developerName: 'southpress',
        developerURL: null,
        dir: 'auto',
        lang: 'es',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
