module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Ivor Zalud',
    // Main Site Title
    title: `Ivor Zalud`,
    // Description that goes under your name in main bio
    description: `Software Engineer (Intern) based in Seattle, WA`,
    // Optional: Twitter account handle
    author: `@ivorzalud`,
    // Optional: Github account URL
    github: `https://github.com/ivor808`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ivor-zalud/`,
    // Content of the About Me section
    about: `My name is Ivor Zalud and I am currently in a Master’s program in Computer Science at Northeastern University. I currently work as a Client Reporting Analyst at BlackRock.. In my MSCS program I have programmed in Java, C, Python, and SQL. I love to learn new skills and technology to then apply to my job. I am also analytical and enjoy taking complex problems and creating solutions. In my free time, you can find me outdoors hiking, fly fishing, or snowboarding.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Health Data Toolkit',
        description:
          'A RESTful project using spring boot to load and process health related JSON data, made with two other students',
        link: 'https://github.com/Ivor808/CS5500-Project',
      },
      {
        name: 'Python Checkers',
        description:
          'A checkers game in Python with a UI and computer player',
        link: 'https://github.com/Ivor808/PyCheckers',
      },
      {
        name: 'Personal Blog v1',
        description:
          'A personal blog and portfolio site created with Django',
        link: 'https://github.com/Ivor808/personal-blog',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'BlackRock',
        description: 'Client Reporting Analyst, June 2018 - Present',
        link: 'https://www.blackrock.com/us/individual',
      },
      {
        name: 'Bank of New York Mellon',
        description: 'Intern, May 2017 - September 2017',
        link: 'https://www.bnymellon.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, C, Python, SQL, Spring Boot',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Agile / Scrum, Algorithms, Data Structures',
      },
    ],
    resume: [
      {
        name:'Test',
        description:'test',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
