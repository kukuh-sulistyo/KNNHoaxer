import React from 'react'
import { render } from 'react-dom'

import dataTrain from './data/data-train.csv'
import dataTest from './data/data-test.csv'

import KNNHoaxer from './lib/KNNHoaxer.js'
import { testHoax } from './lib/KNNHoaxer.js'
import TabelKNN from './components/TabelKNN.js'

let params = {
    identifier : "berita",
    columns : ["like", "provokasi", "komentar", "emosi"],
    classifier : "hoax",
    numOfKNN : 7,
}

// // VALIDASI
// let dataTestValidasi = dataTrain.slice(3000, 4000)
// let dataTrainValidasi = dataTrain.slice(0, 3000)
// let validasi = KNNHoaxer(dataTrainValidasi, dataTestValidasi, params)
// let val = 0;
// for (let i = 0; i < validasi.length; i++) {
//     if (validasi[i].hoax == dataTrainValidasi[i].hoax) ++val
// }
// console.log(`VALIDASI: ${val/10}%`)

let dataTested = KNNHoaxer(dataTrain, dataTest, params)

render(
    <TabelKNN columns={params.columns}
              identifier={params.identifier}
              classifier={params.classifier}  
              data={dataTested}  
    />,
    document.getElementById('root')
)