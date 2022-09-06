//Allow require and EMS imports in same file.
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {franc, francAll} from 'franc';
import { argv } from 'node:process';
const colors = require('colors');
const langs = require('langs');



const cliArgs = process.argv[2];

franc("hello, world!")

let isoCode = franc(cliArgs);


try {
    if (isoCode != 'und') {
        console.log(`Your language was likely: ${ langs.where('3', isoCode).name }`.green)
    } else {
        console.log('Error: Undefined input, try using a longer string.'.red)
    }
} catch(e) {
    console.log(`Error: ISO 639-3 code "${isoCode}" not supported by language library, try a different language.`.red)
}