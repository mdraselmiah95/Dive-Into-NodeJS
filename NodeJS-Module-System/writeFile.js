const fs = require("fs");

const testObj = {
  name: "Rasel mia",
  email: "rasel@gmail.com",
  address: {
    city: "Dhaka",
    country: "BD",
  },
};

const data = JSON.stringify(testObj);

fs.writeFile("./testJson.json", data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File written Successfully");
  }
});
