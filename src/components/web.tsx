// prix-fixe packages
// ok    "ajv": "^6.12.2", - already imported
// ok    "ansi-styles": "^4.0.0",
// XX    "better-ajv-errors": "^0.6.5",  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// XX    "command-line-usage": "^6.0.2", <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ok    "debug": "^4.1.1", - already installed
// ok    "dotenv": "^8.0.0", - already installed
// ok    "fp-ts": "^2.5.4",
// ok    "io-ts": "^2.2.1",
// ok    "js-yaml": "^3.13.1", - already installed
// ok    "jsontoxml": "^1.0.1",
// ok    "minimist": "^1.2.0", - already installed
// ok    "munkres-js": "^1.2.2",
// ok    "number-to-words": "^1.2.4", - already installed
//     "recursive-readdir": "^2.2.2", - already installed <<<<<<<<<<<<<<<<<<<<<
// ok    "strip-ansi": "^6.0.0" - already installed

// token-flow dependencies
// ok    "ajv": "^6.5.4",
// ok    "debug": "^4.1.0",
// ok    "js-yaml": "^3.13.1",
// ok    "murmurhash": "0.0.2",
// ok    "number-to-words": "^1.2.4",
//     "readline-sync": "^1.4.9", <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ok    "snowball-stemmers": "^0.6.0"

// short-order dependencies
// ok    "ajv": "^6.12.2",
// ok    "ansi-styles": "^3.2.1",
//       "chalk": "^2.4.2", - not used by short-order <<<<<<<<<<<<<<<<<<<<<<<<<
// ok    "debug": "^4.1.1",
// ok    "dotenv": "^8.0.0",
// ok    "fast-csv": "^4.3.0",
// ok    "js-yaml": "^3.13.1",
// ok    "minimist": "^1.2.0",
// ok    "murmurhash": "0.0.2",
// ok    "number-to-words": "^1.2.4",
// ok    "pluralize": "^7.0.0",
//     "prix-fixe": "0.0.53",
//     "readline-sync": "^1.4.9", <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ok    "seedrandom": "^3.0.1",
// ok    "talisman": "^0.21.0",
//     "token-flow": "0.0.36"

// importing yaml files
// https://github.com/hsz/react-app-rewire-yaml

// Node packages
//   fs
//   path
//   process

// prix-fixe
import AJV from 'ajv';
import * as style from 'ansi-styles';
import * as t from 'io-ts';
import betterAjvErrors from 'better-ajv-errors';
import commandLineUsage from 'command-line-usage';
import { Section } from 'command-line-usage';
import Debug from 'debug';
import * as dotenv from 'dotenv';
import * as yaml from 'js-yaml';
import jsontoxml from 'jsontoxml';
import minimist from 'minimist';
import numberToWords from 'number-to-words';
import seedrandom from 'seedrandom';
import stripAnsi from 'strip-ansi';

// token-flow adds
import { v3 } from 'murmurhash';
import { newStemmer, Stemmer as SnowballStemmer } from 'snowball-stemmers';

// short-order adds
import { writeToString } from '@fast-csv/format';
import * as pluralize from 'pluralize';
const metaphone = require('talisman/phonetics/metaphone') as (word:string)=>string;

const munkres: (
    a: number[][]
  ) => Array<[number, number]> = require('munkres-js');

export async function works() {
    //
    // ajv
    //
    const ajv = AJV();
    console.log(ajv);

    //
    // ansi-styles
    //
    console.log(
        `${style.green.open}hello6${style.green.open}${style.reset.open}`
    );

    //
    // debug
    //
    const debug = Debug('so:itemMapFromYamlString');

    //
    // dotenv
    //
    dotenv.config();

    //
    // fast-csv
    //
    // Strange chrome console behavior shows "hello6" (previous console.log() output) twice.
    console.log(await writeToString([['a,',5,'b']]));

    //
    // io-ts
    //
    // Need to install fp-ts
    console.log(t.string);

    //
    // js-yaml
    //
    const yamlRoot = yaml.safeLoad('x: [1,2,3]');
    console.log(yamlRoot);

    //
    // jsontoxml
    //
    console.log(jsontoxml(
        yamlRoot,
        {
            indent: ' ',
            prettyPrint: true,
            xmlHeader: true,
        }
    ));

    //
    // minimist
    //
    const args = minimist(['-a=123', 'b']);
    console.log(args);

    //
    // munkres-js
    //
    console.log(munkres([[1,2],[3,4]]));

    //
    // murmurhash
    //
    console.log(v3('hello'));

    //
    // number-to-words
    //
    console.log(numberToWords.toWords(123));

    //
    // pluralize
    //
    console.log(pluralize.plural('airplane'));

    //
    // seedrandom
    //
    console.log(`seedrandom: ${seedrandom('hello')}`);

    //
    // snowball-stemmers
    //
    const stemmer = newStemmer('english');
    console.log(stemmer.stem('animals'));

    //
    // strip-ansi
    //
    console.log(stripAnsi('\u001B[4mUnicorn\u001B[0m'));

    //
    // talisman
    //
    console.log(`metaphone: ${metaphone('airplane')}`);
}

export function fails() {
    // //
    // // better-ajv-errors
    // //

    // // Fails in better-ajv-errors/index.js:
    // //   var ver = process.versions.node;
    // //   var majorVer = parseInt(ver.split('.')[0], 10);

    // betterAjvErrors({}, {});

    // //
    // // command-line-usage
    // //

    // // Fails in command-line-usage/index.js:
    // //   arraify is not a function
    // const usage: Section[] = [
    //     {
    //       header: 'Test suite filter',
    //       content: `This utility filters carts, transcriptions, audio, and entire test cases from a supplied test suite.`,
    //     }
    // ];
    // commandLineUsage(usage);
}

export function remove() {
    // jsontoxml is not needed.
    // minimist is not needed, but already installed.
    // recursive-readdir is not needed, but already installed
}

export function go() {
    works();
    fails();
}