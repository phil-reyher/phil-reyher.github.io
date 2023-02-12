const url = process.env.URL ?? "https://reyher.io";
const title = "Philipp Reyher";

module.exports = {
    en: {
        url,
        title,
        description: "Stats & Data Science",
        feed: {
            subtitle: "Data Science and Statistics Projects with Philipp Reyher",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "https://www.reyher.io/feed.xml",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/moody-person/11ty-starter'
        },
        author: {
            url,
            name: "Philipp Reyher",
            email: "philipp@reyher.io",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
        resources: {
            title: `Resources | ${title}`,
        },
    },
};
