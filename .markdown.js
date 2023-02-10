const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-toc-done-right");
// const markdownItContainer = require("markdown-it-container");
const fs = require("fs");

const linkIcon = fs.readFileSync("./src/_includes/icons/link.svg");

let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
}).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: linkIcon
}).use(markdownItToc, {
    tocClassName: 'table-of-contents'
});

module.exports = {
    markdownLibrary
}
