import { generatePDF } from "./src/generatePDF";
import { Content } from "./src/pdf-viewer/src/components/Content";
import * as path from "path";
import { v4 as uuid } from "uuid";

(async () => {
  try {
    const output = path.join(__dirname, `${uuid()}.pdf`);

    await generatePDF(Content, output);
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    process.exit();
  }
})();
