const url = process.env.URL ?? "https://reyher.io";
const title = "Philipp Reyher";

module.exports = {
    en: {
        url,
        title: `${title} | Data Science Portfolio`,
        description: "Philipp Reyher | Statistics & Data Science",
        feed: {
            subtitle: "Data Science and Statistics Projects with Philipp Reyher",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "https://www.reyher.io/feed",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        author: {
            url,
            name: "Philipp Reyher",
            email: "philipp@reyher.io",
            loc: "Münster, Germany",
        },
        posts: {
            title: `Posts  | ${title}`,
            description: "Blog posts list",
        },
        projects: {
            title: `Projects  | ${title}`,
            description: "Project list",
        },
        about: {
            title: `About | ${title}`,
        },
        resources: {
            title: `Resources | ${title}`,
        },
        year: {
           copyrightYear: new Date().getFullYear(),
        },
    },
};
