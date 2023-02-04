const url = process.env.URL ?? "https://example.com";
const title = "Philipp Reyher";

module.exports = {
    en: {
        url,
        title,
        description: "TODO",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'GitHub',
            link: 'https://github.com/phil-reyher',
            label2: 'LinkedIn',
            link2:'',
            label3: 'Email me',
            link3:'mailto:preyher@uni-muenster.de',
            label4: 'Researchgate',
            link4:'',
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
    },
};
