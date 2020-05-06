import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as puppeteer from "puppeteer";

const generate = async (content, parameters: Parameters) => {
  const browser = await puppeteer.launch({
    headless: true,
    ...parameters.puppeteerLaunchOptions,
  });
  const page = await browser.newPage();

  page.setContent(`<html><body>${content}</body></html>`);

  return await page.pdf({
    path: parameters.path,
    format: "A4",
    printBackground: true,
    ...parameters.puppeteerPdfOptions,
  });
};

type Parameters = {
  path: string;
  puppeteerLaunchOptions?: puppeteer.LaunchOptions;
  puppeteerPdfOptions?: puppeteer.PDFOptions;
};

export const generatePDF = async (
  Component: React.ReactElement,
  parameters: Parameters
) => {
  const content = ReactDOMServer.renderToStaticMarkup(Component);

  await generate(content, parameters);

  console.log(`Generated file at: ${parameters.path}`);
};
