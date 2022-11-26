const fs = require("fs");

fs.readFile("./testJson.json", (err, data) => {
  if (err) {
    return console.log(err);
  }
  let newData = JSON.parse(data);
  console.log(newData);
});
