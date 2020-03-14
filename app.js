//const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    console.log(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: String
    }
  },
  handler(argv) {
    console.log("Removing the note");
    notes.removeNote(argv.title);
  }
});

// Create List command
yargs.command({
  command: "list",
  describe: "List a note",
  builder: {
    title: {
      describe: "Note title"
    }
  },
  handler() {
    notes.listNotes();
  }
});

// Create Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();

//console.log(yargs.argv);

/*if (command == "add") {
  console.log("Adding notes");
} else if (command == "remove") {
  console.log("Removing notes");
}

const chalk = require("chalk");

console.log(chalk.blue("Hello hi world!"));
fs.appendFileSync("notes.txt", "This is node node js");

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail("an@abc.com"));
console.log(validator.isURL("http://google.com"));
*/
