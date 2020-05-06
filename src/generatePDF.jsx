import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as puppeteer from "puppeteer";

const generate = async (content, output) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  page.setContent(`<html><body>${content}</body></html>`);

  return await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
  });
};

export const generatePDF = async (Component, output) => {
  const content = ReactDOMServer.renderToStaticMarkup(<Component />);

  await generate(content, output);

  console.log(`Generated file at: ${output}`);
};
