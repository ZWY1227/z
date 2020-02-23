// $(document).ready(function(){
//     var height=$(".headMain").innerHeight()
//     // console.log(height)
//     $(".wraper").css("margin-top",height+"px")
// })
  /*截取字符串*/
  function GetRequest() {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
Requestnormal = GetRequest();//把所有参数打包成数组，如果用里面的某个元素直接用Requestnormal.name


console.log(GetRequest());
