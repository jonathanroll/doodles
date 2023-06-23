#!/usr/bin/env /usr/bin/node

'use strict';

import process from 'node:process';
// import { m1f1 } from './modules/m1.js'


async function impfunc(a){
    return await import(a);
}

function main(a){
    let func;
    // m1f1(a[2]);
    if(a[2]){
        // func = impfunc(a[3]).then(f(a[4]));
        // func = impfunc(a[3])
        //         .then(x=>x)
        //         .then(y=>y)
        //         .then(z=>z);
        impfunc(a[2]).then((f)=>{ f.gen(a[3]); });
        // console.log(func);
    }
}

main(process.argv);