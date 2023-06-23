#!/usr/bin/env /usr/bin/node

'use strict';

import process from 'node:process';

async function impfunc(a){
    return await import(a);
}
function disp(d){
    console.log(d);
}
function main(a){
    if(a[2]){
        impfunc(a[2]).then((f)=>{ disp(f.gen(a[3])); });
    }
}

main(process.argv);