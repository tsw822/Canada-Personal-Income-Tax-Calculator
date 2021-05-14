export default class IncomeTax2{
    fetch(){
        var pagedata= {
            categories: ["ON","BC","AB","QC","NS"],
            tax : [100,123,153,125,142]
        }
        return pagedata;
    }
}