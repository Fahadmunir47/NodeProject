// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()} `;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written");

// const textOut1 = `This is what we know about the avocado: ${textOut}.\n Created on ${Date.now()} `;

// fs.writeFile("./txt/append.txt", `${data2}`, "utf-8", (err) => {
//   console.log("Your files has been writtened.");
// });

// fs.writeFileSync("./txt/start.txt", textOut1);
// console.log("File also Written");

// fs.readFile(".txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written.");
//       });
//     });
//   });
// });
