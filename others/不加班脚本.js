//使用
//msg(渠道名))

var template_head =["渠道名称"]
var template_bao_head =["报价"]
var template =["0-15","15-20","20-30","30-40","40-50","50-60","60+"]
var template_xu_head =["续保"]
var template2 =["0-10","10-20","20-30","30-40","40-60","60+"]


function dayscript(id){
    var info_array =[]; //push
    info_array[0] =id
    var quote_html = $.ajax({
                   type: "GET",
                   url: "http://cqa.91bihu.com/chart/index2?salesregions=&province=&city=&agentId="+id+"&searchType=quick&source=%E5%B9%B3%E5%AE%89&excludeAssignSpErr=true&quick_time=1&quick_time_c=-1",                        
                   async: false
                }).responseText;
    
    var reg = /\}\)\(\{[\S|\s]+?\]\}\}\)/g;
    var jsonstr= quote_html.match(reg)[0].substring(48)
    console.log(jsonstr)
    jsonstr=jsonstr.substring(0,jsonstr.indexOf(")")-1);
    var obj=JSON.parse(jsonstr);
    console.log(obj)
    if(obj.success.length==0){
        console.log("报价：今日报价为0")
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
            console.log(template[i] +"--->" +print)
        }
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
            console.log(template2[i] +"--->" +print)
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
    $("#tab_1").append(table_head_head)
}
function msg(id){
    var info_array = dayscript(id);
    var table_row ="<tr>";
    $.each(info_array,function(index,ele){
        console.log(ele);
        table_row +="<td>"+ele +"</td>"
    })
    table_row +="</tr>"
    if ($("#table1_body").length==0){
        new_table()
    }
    $("#table1_body").append(table_row)
}

function dos(){
    msg(98263);
    msg(97229);
    msg(11753);
    msg(79504);
    msg(101930);
    msg(105801);
}