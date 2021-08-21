const URL = "https://codequiz.azurewebsites.net";

fetchNAV(process.argv[2]);

const keywords = [
  {
    word: "B-INCOMESSF",
    key: 1,
  },
  {
    word: "BM70SSF",
    key: 5,
  },
  {
    word: "BEQSSF",
    key: 9,
  },
  {
    word: "B-FUTURESSF",
    key: 13,
  },
];

function fetchNAV(keywordNAV) {
  const request = require("request");

  request(
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        cookie: "hasCookie=true",
      },
      uri: URL,
      method: "GET",
    },

    function (error, response, body) {
      let dataI = body.split("<table>");
      let dataII = dataI[1].split("</table>");
      let dataIII = dataII[0].split("</th></tr>");
      let foundCode = dataIII[1].split("</td><td>");
      let anw = keywords.find((data) => data.word === keywordNAV);
      console.log(`${keywordNAV} ${foundCode[anw.key]}`);
    }
  );
}
