
var template =["0-15","15-20","20-30","30-40","40-50","50-60","60+"]
function dayscript(id){
    var info_array =[]; //push
    var quote_html = $.ajax({
                   type: "GET",
                   url: "http://cqa.91bihu.com/chart/index2?salesregions=&province=&city=&agentId="+id+"&searchType=quick&source=%E5%B9%B3%E5%AE%89&excludeAssignSpErr=false&quick_time=1&quick_time_c=-1",
                   async: false
                }).responseText;
    
    var reg = /\}\)\(\{[\S|\s]+?\]\}\}\)/g;
    var jsonstr= quote_html.match(reg)[0].substring(48)
    jsonstr=jsonstr.substring(0,jsonstr.indexOf(")")-1);
    var obj=JSON.parse(jsonstr);
    if(obj.success.length==0){
        console.log("报价：今日报价为0")
    }
    else{
        
        var num=obj.success[0].Value+obj.success[1].Value;
        info_array.push(num);
        var pricerat=parseFloat(obj.success[0].Value/num*100).toFixed(2);
        info_array.push(pricerat +"%");

        var ratstr=""
        for (var i=0;i<template.length;i++){
            var print="";
            $.each(obj.elapsedTime,function(index,element){
                var ti= obj.channelElapsedTime[index].Key;
                if(ti == template[i]){
                    
                }
                var timerat= parseFloat(obj.channelElapsedTime[index].Value/num*100).toFixed(2);
            })
        }
        
        console.log(ratstr)
    }

    var renewal_html = $.ajax({
                   type: "GET",
                   url: "http://cqa.91bihu.com/renewalchart/index3?city=&agentId="+id+"&agentName=%E8%BF%BD%E6%98%9F%E6%B1%BD%E8%BD%A6%E9%9D%92%E5%B2%9B%E4%BF%9D%E6%97%B6%E6%8D%B7&searchType=quick&salesregions=&province=&source=%E5%B9%B3%E5%AE%89&quick_time=1&quick_time_c=-1",
                   async: false
                }).responseText;
    
    var reg = /\}\)\(\{[\S|\s]+?\]\}\}\)/g;
    var jsonstr= renewal_html.match(reg)[0].substring(48)
    jsonstr=jsonstr.substring(0,jsonstr.indexOf(")")-1);
    var obj=JSON.parse(jsonstr);
    if(obj.success.length==0){
        console.log("续保：今日续保为0")
    }
    else{
        var num=obj.success[0].Value+obj.success[1].Value;
        var pricerat=parseFloat(obj.success[0].Value/num*100).toFixed(2);
        var pricestr=num+"\t"+pricerat+"%";
        console.log("续保："+pricestr)
        var ratstr=""
        $.each(obj.channelElapsedTime,function(index,element){
            
            var timerat= parseFloat(obj.channelElapsedTime[index].Value/num*100).toFixed(2);
            ratstr=ratstr+"("+obj.channelElapsedTime[index].Key+")"+timerat+"%"+"\r"
        })
        console.log(ratstr)
    }
    return info_array;
}
function msg(id){
    var info_array = dayscript(id);
    $.each(info_array,function(index,ele){
        console.log(ele);
    })
}
function c(){
    msg(9774)
}