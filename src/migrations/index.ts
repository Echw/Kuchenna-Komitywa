import * as migration_20250302_194207_initial from "./20250302_194207_initial";

export const migrations = [
  {
    up: migration_20250302_194207_initial.up,
    down: migration_20250302_194207_initial.down,
    name: "20250302_194207_initial",
  },
];
