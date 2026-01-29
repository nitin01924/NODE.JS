import fs from "fs";
import fsp from "fs/promises";

// async function writefile(params) {
//   fs.writeFile(
//     "file.txt",
//     "this is the diffrence between the normal readfile and async await.",
//   );
// }
// writefile();

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// async - await mehtod |||||||||

async function readit() {
  try {
    const data = await fsp.readFile('file.txt',  'utf-8')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
readit()

