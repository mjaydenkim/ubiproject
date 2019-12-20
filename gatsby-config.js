let siteMetadata = {
    title: `Universal Basic Income`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `English Position Project for Musich, P7`,
    description: `Is a Universal Basic Income of $1000 a month a good proposal to help citizens of the United States?`,
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ARGUMENTS",
            url: "/blog"
        },
        {
            name: "INTRODUCTION & THESIS",
            url: "/portfolio"
        },
    ],
    footerLinks: [
        {
            name: "Theme",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/mjaydenkim"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCi6VkPnL8sh_9wvu7ndDZig"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `Written by Matthew Kim- an 8th grader who attends Egan Junior High. Really into Rubik's Cubes, US Politics, Coding, Electropop, and rhythm games.`,
        mail: "mjaydenkim@gmail.com",
        phone: "N/A",
        address: "N/A"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
