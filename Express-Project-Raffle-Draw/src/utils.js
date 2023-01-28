const fs = require("fs/promises");
const path = require("path");
const dbPath = path.resolve("data", "db.json");

// TODO: AWS: Add Debug Configuration | AWS: Edit Debug Configuration

exports.readFile = async () => {
  const data = await fs.readFile(dbPath);
  return JSON.parse(data);
};

// TODO: AWS: Add Debug Configuration | AWS: Edit Debug Configuration

exports.writeFile = async (data) => {
  await fs.writeFile(dbPath, JSON.stringify(data));
};
