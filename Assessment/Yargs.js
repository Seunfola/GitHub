const yargs = require("yargs");

const fs = require("fs");

const notesFile = "notes.json";

yargs.command({
  command: "add",
  describe: "adding the note to the module",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const notes = loadNotes();

    const existingNote = notes.find((note) => note.title === argv.title);
    if (existingNote) {
      console.log("Note with that title already exists");
      return;
    }
  },
  handler(argv) {
    const notes = loadNotes();

    const existingNote = notes.find((note) => note.title === argv.title);
    if (existingNote) {
      console.log("Note with that title already exists");
      return;
    }

    notes.push({
      title: argv.title,
      body: argv.body,
    });

    saveNotes(notes);

    console.log("Note added successfully");
  },
});


loadNotes = () => {
  try {
    const data = fs.readFileSync(notesFile);
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

function saveNotes(notes) {
  const data = JSON.stringify(notes);
  fs.writeFileSync(notesFile, data);
}


yargs.parse();
