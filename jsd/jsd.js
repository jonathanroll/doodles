#!/usr/bin/env /usr/bin/node
'use strict';


import { JSDOM } from '../../jsdom/lib/api.js';

JSDOM.fromURL(process.argv[2])
    // .then((dom)=>{ return dom; })
    .then(a=>a)
    .then((b)=>{ return b.window.document.querySelectorAll("a"); })
    .then((c)=>{ c.forEach((i,j)=>console.log(j,i.href)); });

    /*
    nl.forEach((i,j)=>console.log(j,i));

src.then((dom)=>{
    return dom.window.document.querySelectorAll("a");
    nl.forEach((i,j)=>console.log(j,i));
});
*/