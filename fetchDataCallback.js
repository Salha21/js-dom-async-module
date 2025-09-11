function fetchDataWithCallBack(callback){
    let error = true; //simulate error condition
    setTimeout(function() {
        try {
            if (error) {
                throw new message ("Network connection is bad");
            }
            callback("Data fetched");
        } catch (error) {
            //console.log("Error: Fetch failed");
            
        } 
    }, 2000); 
    
}

fetchDataWithCallBack(function(result) {
    //console.log(result);

});

