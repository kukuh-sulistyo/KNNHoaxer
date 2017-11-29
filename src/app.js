import React from 'react'
import { render } from 'react-dom'

import dataTrain from './data/data-train.csv'
import dataTest from './data/data-test.csv'
import GenerateKNN from './lib/knn.js'

import TabelKNN from './components/TabelKNN.js'

const params = {
    "classifier" : "hoax",
    "numOfNN" : 11,
    "identifier" : "berita",
    "columns" : ["like", "provokasi", "komentar", "emosi"]
}

render(
    <TabelKNN columns={params.columns}
           identifier={params.identifier}
           classifier={params.classifier} 
    />,
    document.getElementById('root')
)

// console.log(GenerateKNN(dataTrain, dataTest, params));

// render("HAL", document.getElementById('root') )