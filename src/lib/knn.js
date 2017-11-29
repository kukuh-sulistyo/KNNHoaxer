const euclideanDistance = (a, b, columns) => {
    /*
     * Generate distance for each data train
     * @result Array of Object { "distance": Number, "classifier" : classifier }
     */
    return Math.sqrt(columns.map(column => Math.pow(a[column] - b[column], 2)).reduce((acc, curr) => acc + curr));
}

const getKNN = (dataTrain, test, params) => {
    /*
    * Generate distance for each data train
    * @result Array of Object { "distance": Number, "classifier" : classifier }
    */
    let arr = []
    dataTrain.map(train => {
        arr.push({ 
            "distance" : euclideanDistance(train, test, params.columns),
            "classifier" : train[params.classifier]
        })
    })

    /*
    * Sort by distance and slice the first-n items of Array
    */
    arr.sort((a, b) => a.distance - b.distance)
    let newArr = arr.slice(0, params.numOfNN)

    /*
    * Generate Map of classifier's count
    * @result Map { "key+classifier" => count }
    */
    let knnMap = new Map();
    newArr.map(data => {
        let count = (knnMap.has("key"+data.classifier)) ? knnMap.get("key"+data.classifier) + 1 : 1;
        knnMap.set("key"+data.classifier, count)
    })

    /*
    * Get the classifier with max count
    * @result classifier
    */
    let max = knnMap.keys().next().value;
    knnMap.forEach((val, key, map) => {
        if (val > max) {
            max = key;
        }
    })
    /*
    * Return max, removing the "key" string
    */
    return max.slice(3)
    
} 

const GenerateKNN = (dataTrain, dataTest, params) => {
    const arr = dataTest.map(test => {
        test[params.classifier] = getKNN(dataTrain, test, params)
        return test;
    })
    return arr
}

export default GenerateKNN;