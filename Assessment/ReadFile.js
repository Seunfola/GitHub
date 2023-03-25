const csv = require("csv-parser");
const fs = require("fs");

const results = [];

fs.createReadStream("input.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    fs.writeFileSync("output.json", JSON.stringify(results));
    console.log("CSV file successfully converted to JSON");
  });
