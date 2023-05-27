//定义验证规则
layui.form.verify({
  length0_to_64: [/^[\S]{0,64}$/,'长度必须介于 0 和 64之间'],
  length0_to_6: [/^[\S]{0,6}$/,'长度必须介于 0 和 6之间'],
});

//表单输入字段验证
function from_input_validate(){
  var fields=new Array();
  fields.push("shipNameCn");
  validate_input_with_require(fields,"length0_to_64");
  fields=new Array();
  fields.push("shipLong");
  validate_input_with_require(fields,"length0_to_6");
  
}
function validate_input_with_require(array,verify_name){
  for(var i=0;i<array.length;i++){
    document.getElementsByName(array[i])[0].setAttribute("lay-verify","required|"+verify_name);  
  }
}