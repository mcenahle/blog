import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'yaml';
export const readData=(name:string)=>parse(fs.readFileSync(path.resolve('../source/_data',`${name}.yml`),'utf8'));
