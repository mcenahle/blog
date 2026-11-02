import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'yaml';
export const readData=(name:string)=>parse(fs.readFileSync(path.resolve('src/data/legacy',`${name}.yml`),'utf8'));
