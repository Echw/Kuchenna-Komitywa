import * as migration_20250302_173517_initial from './20250302_173517_initial';

export const migrations = [
  {
    up: migration_20250302_173517_initial.up,
    down: migration_20250302_173517_initial.down,
    name: '20250302_173517_initial'
  },
];
