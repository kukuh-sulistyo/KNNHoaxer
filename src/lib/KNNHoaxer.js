
/*
* Generate distance
*/
const euclideanDistance = (a, b, columns) => {
    return Math.sqrt(columns.map(column => Math.pow(a[column] - b[column], 2)).reduce((acc, curr) => acc + curr));
}

/*
* Generate hoax for one data test
*/
const testHoax = (dataTrain, test, params) => {
    // Generate array of object of distance for each data train
    // resulting array of { "distance": __, "hoax" : __ }
    let arrOfDistance = []
    dataTrain.map(train => {
        arrOfDistance.push({ 
            "distance" : euclideanDistance(train, test, params.columns),
            "hoax" : train[params.classifier]
        })
    })
    
    // Sort arrOfDistance by distance
    arrOfDistance.sort((a, b) => a.distance - b.distance)

    // Get hoax
    if (Math.abs(arrOfDistance[0].distance - arrOfDistance[1].distance) > 2) {
        return arrOfDistance[0].hoax
    } else {
        let countHoax = 0;
        for (let i = 0; i < params.numOfKNN; i++) {
            if (arrOfDistance[i].hoax == 1) ++countHoax
        }
        return (countHoax > params.numOfKNN / 2) ? 1 : 0
    }
} 

/*
* Generate hoax for all data test
*/
const KNNHoaxer = (dataTrain, dataTest, params) => {
    const arr = dataTest.map(test => {
        test[params.classifier] = testHoax(dataTrain, test, params)
        return test;
    })
    return arr;
}

export default KNNHoaxer;