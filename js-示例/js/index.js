$(function (){
       //getModelList() //加载优惠函数

    $(".select2").select2();
     
         $('.newPraise').click(function () {  //新建标签点击事件
               if($(".niceType").find("span").length==0){
                $(".goodsData").html("")
                var aa="<div class='inputList'><span>好评标签</span> <input  type='text' class='goodsLabel'></div>"
                   $(".goodsData").append(aa)
                   $(".projectile").show();
                }else{
                    $(".projectile").show();
                }
             
         });
         $(".closeGoods").click(function(){ 
             $(".projectile").hide();
         })
         $(".addLabel").click(function(){
             var hh="<div class=\'inputList\'><span>好评标签</span><input  type=\'text\' class='goodsLabel'><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='inputRemove'>"
             $(".goodsData").append(hh);
         })
         $(".cancel").click(function(){//不保存
             $(".projectile").hide();
         })
         $(".saveData").click(function(){//保存修改按钮
                for(var x=0;x<$(".inputList").length;x++){
                        if(!$(".inputList").eq(x).children("input").val()){
                             alert("请输入评价！")
                              return
                        }
                }
                $(".niceType").html("")
                $(".goodsLabel").each(function(){
                     var name="<span class='labelName' type='true'>"+$(this).val()+"</span>"
                        $(".niceType").append(name)
                })
           $(".projectile").hide();
           $(".tagName").html();
         })
       $(".goodsData").on("click",".inputRemove",function(){
              $(this).parent().remove()
       })

    /*   $(".niceType").on("click",".labelName",function(){
            if($(this).attr("type")=="true"){
                  $(this).css("color","red")
                  $(this).attr({"type":'false'})
                  $(".tagName").append("<div class='single'><span style='margin-right:10px'>"+$(this).html()+"</span><img src='./images/remove-icon-small.png' class='singleDelete'></div>")
            } 
       })*/
  /*     $(".tagName").on("click",".singleDelete",function(){
             $(this).parent().remove()
             for(var i=0;i<$(".labelName").length;i++){
                var val=$(".labelName").eq(i).html();
                   if(val==$(this).prev().html()){
                       $(".labelName").eq(i).attr("type","true")
                       $(".labelName").eq(i).css("color","#535353")
                   }
             }
       })*/

       //差评点击事件
        $('.badPraise').click(function () {  //新建标签点击事件
               if($(".wrongType").find("span").length==0){
                $(".badsData").html("")
                var qq="<div class='importList'><span>差评标签</span> <input  type='text' class='badsLabel'></div>"
                   $(".badsData").append(qq)
                   $(".frame").show();
                }else{
                    $(".frame").show();
                }
             
         });
         $(".closeBads").click(function(){ 
             $(".frame").hide();
         })
         $(".addTab").click(function(){
             var bb="<div class=\'importList\'><span>差评标签</span><input  type=\'text\' class='badsLabel'><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='inputDelete'>"
             $(".badsData").append(bb);
         })
         $(".abrogate").click(function(){//不保存
             $(".frame").hide();
         })
         $(".saveModify").click(function(){//保存修改按钮
            for(var y=0;y<$(".importList").length;y++){
                        if(!$(".importList").eq(y).children("input").val()){
                             alert("请输入评价！")
                              return
                        }
            }
                $(".wrongType").html("")
                $(".badsLabel").each(function(){
                     var name="<span class='pagName' type='true'>"+$(this).val()+"</span>"
                        $(".wrongType").append(name)
                })
           $(".frame").hide();
           $(".badName").html();
         })
       $(".badsData").on("click",".inputDelete",function(){
              $(this).parent().remove()
       })

   /*    $(".wrongType").on("click",".pagName",function(){
            if($(this).attr("type")=="true"){
                  $(this).css("color","red")
                  $(this).attr({"type":'false'})
                  $(".badName").append("<div class='Choice'><span style='margin-right:10px'>"+$(this).html()+"</span><img src='./images/remove-icon-small.png' class='ChoiceDelete'></div>")
            } 
       })
       $(".badName").on("click",".ChoiceDelete",function(){
             $(this).parent().remove()
             for(var i=0;i<$(".pagName").length;i++){
                var val=$(".pagName").eq(i).html();
                   if(val==$(this).prev().html()){
                       $(".pagName").eq(i).attr("type","true")
                       $(".pagName").eq(i).css("color","#535353")
                   }
             }
       })*/

       $(".addAssess").click(function(){ //新建评价
        var problemAndLabelList=[];
        var labelList=[];
        var labelGrade='';//评价星级
        var problemName='';//标签名称
        var name='';
        var goodsList= $(".niceType").find(".labelName");//好评
        var badsList= $(".wrongType").find(".pagName");//差评
           problemName=$(".customName").find("input").val() //自定义评价名称
       
             for(var z=0;z<goodsList.length;z++){
               var  goodsGrade =  5;
               var  goodsName = goodsList.eq(z).html();
               labelList.push(
               {
                   "labelGrade":goodsGrade,
                   "name":goodsName
               })
             }

            for(var m=0;m<badsList.length;m++){
               var  badsGrade =  1;
               var  badsName = badsList.eq(m).html();
               labelList.push(
               {
                   "labelGrade":badsGrade,
                   "name":badsName
               })
             }
             problemAndLabelList.push(
             {
                "problemName":problemName,
                "labelList":labelList 
             })
             console.log(problemAndLabelList)
             var data = problemAndLabelList;
             var label = data[0].labelList;

             $(".showList").css({"width": "100%","height":"343px","margin-bottom":"40px"})

              var classData = $("#temp").html(); 
                  classData = classData.replace("{{problemName}}",data[0].problemName);       
             $(".showList").append(classData)
             console.log($(".aloneRight").parent(".aloneLeft").index())
             for(var f=0;f<label.length;f++){
                 if(label[f].labelGrade == 1){
                    var nameList="<span class='selectName' type='true'>"+label[f].name+"</span>"
                        $(".negativeType").append(nameList)
                        $(".selectName").css("color","red")
                        $(".selectName").attr({"type":'false'})
                        console.log($(".selectName").parent(".aloneLeft").index())
                        $(".indicationName").append("<div class='pick'><span style='margin-right:10px'>"+label[f].name+"</span><img src='./images/remove-icon-small.png' class='pickDelete'></div>")
                 }else if(label[f].labelGrade == 5){
                   var nameList="<span class='appointName' type='true'>"+label[f].name+"</span>"
                        $(".optType").append(nameList) 
                        $(".appointName").css("color","red")
                        $(".appointName").attr({"type":'false'})
                        $(".revealName").append("<div class='specify'><span style='margin-right:10px'>"+label[f].name+"</span><img src='./images/remove-icon-small.png' class='specifyDelete'></div>")
                 }
             }
             //自定义评价数据清空
             $(".customName").find("input").val("");
             $(".tagName").children().remove();
             $(".niceType").children().remove();
             $(".wrongType").children().remove();
             $(".badName").children().remove();
       })

       //新增修改
        $('.showList').on("click",".clickPraise",function(){  //新建修改标签点击事件
          var aa='';
          var labelSum=$(".optType").find("span")
               if(labelSum.length==0){
                     $(".evaluateData").html("")
                     aa="<div class='modifyList'><span>好评标签</span> <input  type='text' class='modifyLabel'></div>"
                     $(".evaluateData").append(aa)
                     $(".mask").show();
                }else{
                  for(var e=0;e<labelSum.length;e++){
                        aa="<div class=\'modifyList\'><span>好评标签</span><input  type=\'text\' class='modifyLabel' value="+labelSum.eq(e).html()+"><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='removeFrom'>"
                        $(".evaluateData").append(aa)
                  }
                    $(".mask").show();
                }
             
         });
        $('.showList').on("click",".closemask",function(){//右上角叉子
             $(".mask").hide();
             $(".evaluateData").children().remove()
         })
        $('.showList').on("click",".addAppraise",function(){
       //$(".addAppraise").click(function(){//修改添加标签
             var hh="<div class=\'modifyList\'><span>好评标签</span><input  type=\'text\' class='modifyLabel'><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='removeFrom'>"
             $(".evaluateData").append(hh);
         })

        $(".showList").on("click",".removeFrom",function(){
                $(this).parent().remove()
         })
        $(".showList").on("click",".notSave",function(){
         //$(".notSave").click(function(){//不保存
             $(".mask").hide();
             $(".evaluateData").children().remove()
         })
         $(".showList").on("click",".yesSave",function(){
         //$(".yesSave").click(function(){//保存修改按钮
                for(var n=0;n<$(".modifyList").length;n++){
                        if(!$(".modifyList").eq(n).children("input").val()){
                             alert("请输入评价！")
                              return
                        }
                }
                $(".optType").html("")
                $(".modifyLabel").each(function(){
                     var name="<span class='appointName' type='true'>"+$(this).val()+"</span>"
                        $(".optType").append(name)
                })
           $(".mask").hide();
           //$(".revealName").html();
           $(".revealName").children().remove()
           $(".evaluateData").children().remove()
         })

     
       $(".showList").on("click",".appointName",function(){
       //$(".optType").on("click",".appointName",function(){
            if($(this).attr("type")=="true"){
                  $(this).css("color","red")
                  $(this).attr({"type":'false'})
                  $(".revealName").append("<div class='specify'><span style='margin-right:10px'>"+$(this).html()+"</span><img src='./images/remove-icon-small.png' class='specifyDelete'></div>")
            } 
       })
       $(".showList").on("click",".specifyDelete",function(){
       //$(".revealName").on("click",".specifyDelete",function(){
             $(this).parent().remove()
             for(var i=0;i<$(".appointName").length;i++){
                var val=$(".appointName").eq(i).html();
                   if(val==$(this).prev().html()){
                       $(".appointName").eq(i).attr("type","true")
                       $(".appointName").eq(i).css("color","#535353")
                   }
             }
       })

       //修改差评点击事件
       $('.showList').on("click",".Touch",function(){
        //$('.Touch').click(function () {  //新建标签点击事件
          var qq='';
          var labelNumber=$(".negativeType").find("span");
               if(labelNumber.length==0){
                  $(".assessData").html("")
                  qq="<div class='pagList'><span>差评标签</span> <input  type='text' class='outputLabel'></div>"
                   $(".assessData").append(qq)
                   $(".badMask").show();
                }else{
                    for(var r=0;r<labelNumber.length;r++){
                       qq="<div class=\'pagList\'><span>差评标签</span><input  type=\'text\' class='outputLabel' value="+labelNumber.eq(r).html()+"><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='wipeDelete'>"
                       $(".assessData").append(qq);
                    }
                    $(".badMask").show();
                }
             
        });
       $('.showList').on("click",".closeUp",function(){
        //$(".closeUp").click(function(){ 
             $(".badMask").hide();
             $(".assessData").children().remove()
        })
  
        $('.showList').on("click",".addTag",function(){
        //$(".addTag").click(function(){
             var bb="<div class=\'pagList\'><span>差评标签</span><input  type=\'text\' class='outputLabel'><img src='./images/remove-icon-small.png' alt='' style='width: 10px;height: 10px;margin-top: 7px;cursor:pointer;float: right;' class='wipeDelete'>"
             $(".assessData").append(bb);
         })
        $('.showList').on("click",".abolish",function(){
        // $(".abolish").click(function(){//不保存
             $(".badMask").hide();
             $(".assessData").children().remove()
         })
        $('.showList').on("click",".preserve",function(){
        //$(".preserve").click(function(){//保存修改按钮
            for(var y=0;y<$(".pagList").length;y++){
                        if(!$(".pagList").eq(y).children("input").val()){
                             alert("请输入评价！")
                              return
                        }
            }
                $(".negativeType").html("")
                $(".outputLabel").each(function(){
                     var name="<span class='selectName' type='true'>"+$(this).val()+"</span>"
                        $(".negativeType").append(name)
                })
           $(".badMask").hide();
           //$(".indicationName").html();
           $(".indicationName").children().remove()
           $(".assessData").children().remove()
         })
       $('.showList').on("click",".wipeDelete",function(){
       //$(".assessData").on("click",".wipeDelete",function(){
              $(this).parent().remove()
       })
       $('.showList').on("click",".selectName",function(){
       // $(".negativeType").on("click",".selectName",function(){
            if($(this).attr("type")=="true"){
                  $(this).css("color","red")
                  $(this).attr({"type":'false'})
                  $(".indicationName").append("<div class='pick'><span style='margin-right:10px'>"+$(this).html()+"</span><img src='./images/remove-icon-small.png' class='pickDelete'></div>")
            } 
       })
       $('.showList').on("click",".pickDelete",function(){
       //$(".indicationName").on("click",".pickDelete",function(){
             $(this).parent().remove()
             for(var i=0;i<$(".selectName").length;i++){
                var val=$(".selectName").eq(i).html();
                   if(val==$(this).prev().html()){
                       $(".selectName").eq(i).attr("type","true")
                       $(".selectName").eq(i).css("color","#535353")
                   }
             }
       })

       //添加优惠劵
       $(".addCoupons").click(function(){
             var aaa = $("#Modular").html()
             $(".Box").append(aaa)
             $(".select2").select2();
       })

      $(".Box").on("click",".cutOut",function(){
           $(this).parent().remove();
      })

 })

/*function getModelList(){      
    var brandId = $("select[name=brandId]").val();   
    $("select[name=modelId]").empty();      //清空  
    $.ajax({url:'./api/ticketTemplate/select',  
        type:"post",  
        data:{  
            brandId : brandId  
        },  
        cache: false,  
        error:function(){  
        },   
        success:function(data){  
            var modelList = data.modelList;  
            if(modelList && modelList.length != 0){  
                for(var i=0; i<modelList.length; i++){  
                    var option="<option value=\""+modelList[i].modelId+"\"";  
                    if(_LastModelId && _LastModelId==modelList[i].modelId){  
                        option += " selected=\"selected\" "; //默认选中  
                        _LastModelId=null;  
                    }  
                    option += ">"+modelList[i].modelName+"</option>";  //动态添加数据  
                    $("select[name=modelId]").append(option);  
                }  
        }  
        }  
    });  
} */
