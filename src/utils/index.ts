import showdown from "showdown"

const markdownConverter = new showdown.Converter()

export const markDownToHtml = (markdown: string) =>
  markdownConverter.makeHtml(markdown)
