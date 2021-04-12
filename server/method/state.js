const message=(state=1,data={},message)=>{
    let returnData ={
        state:state,
        data:data,
        message:message,
    };
    return returnData
}
module.exports= message;