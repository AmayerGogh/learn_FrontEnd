//使用
//msg(渠道名))

var template_head =["渠道名称"]
var template_bao_head =["报价"]
var template =["0-10","10-20","20-30","30-40","40-50","50-60","60+"]
var template_xu_head =["续保"]
var template2 =["0-5","5-10","10-15","15-20","20-30","30-40"]
var reg = /\}\)\(\{[\S|\s]+?\]\}\}\)/g;

function dayscript(id){
    var info_array =[]; //push
    info_array[0]= id;
    var channelMsg = $.ajax({
        type: "GET",
        url: "http://cqa.91bihu.com/chart/GetAgentAllName?id="+id,
        async: false
     }).responseText;
    info_array[0]+=channelMsg;
   
    //昨日的 quick_time 改为2
    //包含错误码
    var quote_html = $.ajax({
                   type: "GET",
                   url: "http://cqa.91bihu.com/chart/index2?salesregions=&province=&city=&agentId="+id+"&searchType=quick&source=%E5%B9%B3%E5%AE%89&excludeAssignSpErr=true&quick_time=1&quick_time_c=-1",                        
                   async: false
                }).responseText;
    
        
    var jsonstr= quote_html.match(reg)[0].substring(48)
   
    jsonstr=jsonstr.substring(0,jsonstr.indexOf(")")-1);
    var obj=JSON.parse(jsonstr);
    console.log(obj)
   
    if(obj.success.length==0){
        console.log("报价：今日报价为0")
        info_array[1]= 0;
        for (var i=0;i<template.length;i++){
            info_array[i+2] = 0 
        }
    }
    else{
        var num=obj.success[0].Value+obj.success[1].Value;
        var pricerat=parseFloat(obj.success[0].Value/num*100).toFixed(2);
        info_array[1]= pricerat +"%("+num+")";
       
        for (var i=0;i<template.length;i++){
            var print=0;
            $.each(obj.elapsedTime,function(index,element){
                var ti= obj.elapsedTime[index].Key;
                if(ti == template[i]){
                    print= parseFloat(obj.elapsedTime[index].Value/num*100).toFixed(2);
                }
            })
            if(print!=0){
                print =print +"%"
            }
            info_array[i+2] =print
        }
    }

    var renewal_html = $.ajax({
                   type: "GET",
                   url: "http://cqa.91bihu.com/renewalchart/index3?city=&agentId="+id+"&agentName=%E8%BF%BD%E6%98%9F%E6%B1%BD%E8%BD%A6%E9%9D%92%E5%B2%9B%E4%BF%9D%E6%97%B6%E6%8D%B7&searchType=quick&salesregions=&province=&source=%E5%B9%B3%E5%AE%89&quick_time=1&quick_time_c=-1",
                   async: false
                }).responseText;
       
    var jsonstr= renewal_html.match(reg)[0].substring(48)
    jsonstr=jsonstr.substring(0,jsonstr.indexOf(")")-1);
    var obj=JSON.parse(jsonstr);
    if(obj.success.length==0){
        console.log("续保：今日续保为0")
        info_array[9]= 0;
        for (var i=0;i<template2.length;i++){
            info_array[i+10] =0 
        }
    }
    else{
        var num=obj.success[0].Value+obj.success[1].Value;
        var pricerat=parseFloat(obj.success[0].Value/num*100).toFixed(2);
        var pricestr=num+"\t"+pricerat+"%";
        info_array[9]= pricerat +"%("+num+")";

        for (var i=0;i<template2.length;i++){
            var print=0;
            $.each(obj.channelElapsedTime,function(index,element){
                var ti= obj.channelElapsedTime[index].Key;
                if(ti == template2[i]){
                    print= parseFloat(obj.channelElapsedTime[index].Value/num*100).toFixed(2);
                }
            })
            if(print!=0){
                print =print +"%"
            }
            info_array[i+10] =print 
        }
    }
    return info_array;
}

function new_table(){
    var  table_head_head ="<div><table class='table' id='table1'><thead><tr>"
    table_head_head +="<th>"+template_head+"</th>"
    table_head_head +="<th>"+template_bao_head+"</th>"
    $.each(template,function(index,ele){   
        table_head_head +="<th>"+ele +"</th>"
    })
    table_head_head +="<th>"+template_xu_head+"</th>"
    $.each(template2,function(index,ele){   
        table_head_head +="<th>"+ele +"</th>"
    })
    table_head_head += "</tr></thead><tbody id='table1_body'></tbody></table></div>"
    $("body").append(table_head_head)
}
function msg(id){
    var info_array = dayscript(id);
    var table_row ="<tr>";
    $.each(info_array,function(index,ele){
       
        table_row +="<td>"+ele +"</td>"
    })
    table_row +="</tr>"
    if ($("#table1_body").length==0){
        new_table()
    }
    $("#table1_body").append(table_row)
}
function msg_array(ids){
    ids.forEach(element => {
        msg(element);
    });
}
function zhengzhou(){
    msg_array(new Array(110717,98263,101550,105311,107551,113139,116317))
}
function beijing(){
    msg_array(new Array(102826,103213,105572,128153,131531,138209,85135,89227,97229,100784,102126,115857,11753,12054))
}
function taiyuan(){
    msg_array(new Array(83299,137253,86980,88332,95213,106157))
}
function guangzhou(){
    msg_array(new Array(79504,97005,101292,104595,106217,110321,122119,124475,128549,132387,132651,101930,130983,93253,105801,131535,136415))
}
function chengdu(){
    msg_array(new Array(66991,79483,85807,86060,97068,102316,134209));
}