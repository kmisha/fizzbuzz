#!/usr/bin/env node

import {fizzbuzz} from './fizzbuzz';

const LIMIT = 100;

for(let i = 1; i <= LIMIT; i++) {
    console.log(fizzbuzz(i))
}

