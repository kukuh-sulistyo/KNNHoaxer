// import React from 'react'
// import { render } from 'react-dom'

import dataTrain from '../data/data-train.csv'
import dataTest from '../data/data-test.csv'
import { generateDistance } from './knn.js'

// console.log(dataTest);

const params = {
    "classifier" : "hoax",
    "numOfNN" : 11,
    "columns" : ["like", "provokasi", "komentar", "emosi"]
}

console.log(generateDistance(dataTrain, dataTest[291], params));
// render("HAL", document.getElementById('root') )