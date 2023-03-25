const fs = require("fs");

const filename = "text.txt";

fs.readFile(filename, "utf8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
