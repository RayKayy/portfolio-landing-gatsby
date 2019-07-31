module.exports = {
  siteMetadata: {
    header: {
      h1: 'Raymond Kwan',
      lines: [
        'Software Developer.',
        'Born in Hong Kong. Raised in Shanghai. Living in Toronto.',
      ],
    },
    about: {
      paragraphs: [
        `I am a software developer, with experience working with multiple tech stacks within an AGILE environment.
        Technology has always intrigued me with the way that it impacts our society at a scale so out of proportion;
        affecting the everyday lives of an enormous population. Even though my academic background is in environmental management,
        my passion has led me into a career path in software development.`,
        `Working as a developer, I was lucky enough to have worked within an environment that allows me to initiate and maintain services
        for SaaS products using the Microservices Architecture; as well as designing and building responsive UIs
        using multiple frontend frameworks targeted at various audiences.`,
      ],
    },
    projects: [
      {
        title: 'Bar Chart',
        link: 'https://raykayy.github.io/bar-chart/',
        imageUrl: 'https://preview.ibb.co/eeAKwU/Screen_Shot_2018_08_14_at_10_09_17_PM.png',
        description: 'Responsive bar chart genorator using only jQuery. My first javascript/browser based project. (Always reminds me of where I started)'
      },
    ],
    title: 'Raymond Kwan',
    author: 'Raymond Kwan',
    description: 'Personal portfolio/landing page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
