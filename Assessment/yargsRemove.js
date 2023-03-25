const yargs = require("yargs");
const fs = require("fs");

// Define command-line options
const options = yargs.usage("Usage: -t <title>").option("t", {
  alias: "title",
  describe: "Title of note to remove",
  type: "string",
  demandOption: true,
}).argv;

// Load existing notes from file
const notes = JSON.parse(fs.readFileSync("notes.json"));

// Find index of note with matching title
const index = notes.findIndex((note) => note.title === options.title);

if (index === -1) {
  console.log(`Note with title "${options.title}" not found`);
} else {
  // Remove note from array
  notes.splice(index, 1);

  // Save updated notes to file
  fs.writeFileSync("notes.json", JSON.stringify(notes));

  console.log(`Note with title "${options.title}" removed`);
}
yargs.parse();
