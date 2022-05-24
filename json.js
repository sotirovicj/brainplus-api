import { readFileSync } from "fs";

export function readJSONFileSync(path) {
  const json = readFileSync(path, "utf8");
  return JSON.parse(json);
}
