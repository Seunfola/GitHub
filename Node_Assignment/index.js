// using fs and path
const fs = require("fs");
const path = require("path");

// creating a directory "node-exercise"
fs.mkdirSync("node-exercise");

// use path and creating a file "main.js"
const dirName = path.resolve(__dirname, "node-exercise");
const fileName = path.join(dirName, "main.js");

console.log(`the directory path is : ${dirName}`);
console.log(`the file path is : ${fileName}`);

// writing a file
const content = `console.log("Hello World")`;

const mainModule = () => {
  fs.writeFileSync(fileName, content, "utf-8");
};
mainModule();

// reading the file
const read_file_sync = () => {
  fs.readFileSync(fileName, "utf-8");
  console.log(content);
};
read_file_sync();

// append file
const appendContent = `\nLearning file system in core node programming.`;
const append_file_sync = () => {
  fs.appendFileSync(fileName, appendContent);
  console.log(appendContent);
};
append_file_sync();

// read append file
const read_append_file_sync = () => {
  fs.readFileSync(fileName, "utf-8");
  console.log(fileName);
};
read_append_file_sync();

// renaming files
const newFileName = path.join(dirName, "index.js");
const renameFile = () => {
  fs.renameSync(fileName, newFileName);
  console.log(newFileName);
};
renameFile();

// deleting files
const deleteFile = () => {
  fs.unlinkSync(newFileName);
};
deleteFile();

//deleting directory
const deleteDir = () => {
  fs.rmdirSync(dirName);
};
deleteDir();

// Bonus Task


//fs.mkdirSync("node-exercise");
fs.mkdirSync("./node-exercise/data");

const dir_name = path.resolve(__dirname, "./node-exercise/data");
const file_name = path.join(dir_name, "data.txt");

const content2 = `The basic and fundamentals of nodejs`;

const main_Module = () => {
  fs.writeFileSync(file_name, content2, "utf-8");
};

main_Module();

const read_file = () => {
  fs.readFileSync(file_name, "utf-8");
  console.log(content2);
};

read_file();

const new_file_name = path.join(dir_name, "config.txt");
const rename_file = () => {
  fs.renameSync(file_name, new_file_name);
  console.log(new_file_name);
};

rename_file();

const delete_file = () => {
  fs.unlinkSync(new_file_name);
};

delete_file();

const delete_dir = () => {
  fs.rmdirSync(dir_name);
};

delete_dir();
