const helper_functions = {

    //make a fetch request 
    async getApiData(url) {
        
        try {
                
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
            );
                
            if (!res.ok) {

                throw new Error(res.statusText);

            }
            const data = await res.json();
                
            return data;
                
        } catch (err) {
                
            throw new Error(err);
            
        }
                    
    },
     //split array into chunks of 20 items
    splitArray(inputArray) {

        const perChunk = 20 // items per chunk    

        return inputArray.reduce((resultArray, item, index) => {
                    
            const chunkIndex = Math.floor(index / perChunk)

            if (!resultArray[chunkIndex]) {
                    
                resultArray[chunkIndex] = [] // start a new chunk

            }

            resultArray[chunkIndex].push(item);

            return resultArray

        }, [])
    }

};

module.exports = helper_functions;