const express = require("express");
const request = require("request");
const fs = require("fs");

const app = express();

const PORT = 3000;

app.get("/:id", async (req, res) => {
  downloadPlay(req.params.id, res)
    .catch(err => {
      console.error(err);

      res.send(err.toString());
    });
});

const args = process.argv.slice(2);

if (args.length > 0) {
  if (!fs.existsSync("./downloads")) {
    fs.mkdirSync("./downloads");
  }

  args.forEach(id => {
    downloadPlay(id, fs.createWriteStream(`./downloads/${id}.pdf`))
      .then(() => {
        console.info(`Downloaded file: ./downloads/${id}.pdf`)
      })
      .catch(err => {
        console.error(`Error with file: ./downloads/${id}.pdf\n\t`, err);
      });
  });
} else {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

function downloadPlay(id, stream) {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      url: "https://api.playscripts.com/play_sample?playid=" + id,
      headers: {
        "Referer": "https://www.playscripts.com/pdfviewer/pdf.worker.js"
      }
    }
    
    request(options)
      .on("error", reject)
      .on("end", resolve)
      .pipe(stream);
  });
}
