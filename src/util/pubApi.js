function dataURLtoFile(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], { type: mime });
  }
  //压缩图片
  export function compressImg(file){
    var files;
    var fileSize = parseFloat(parseInt(file['size'])/1024).toFixed(2);
    var read = new FileReader();
    read.readAsDataURL(file);
    return new Promise(function(resolve){
     read.onload = function (e) {
       var img = new Image();
       img.src = e.target.result;
       img.onload = function(){
         //默认按比例压缩
         var w = this.width,
           h = this.height
         //生成canvas
         var canvas = document.createElement('canvas')
         var ctx = canvas.getContext('2d')
         var base64;
         // 创建属性节点
         canvas.setAttribute("width", w)
         canvas.setAttribute("height", h)
         ctx.drawImage(this, 0, 0, w, h)
         if(fileSize<300){
           //如果图片小于 300KB 那么不执行压缩操作
           base64 = canvas.toDataURL(file['type'], 1)
         } else {
            let fl = parseFloat((200 /fileSize).toFixed(1))
            base64 = canvas.toDataURL(file['type'], fl > 0.4? 0.4: fl)
         }
         console.log(base64)
         // 回调函数返回file的值（将base64编码转成file）
         files = dataURLtoFile(base64) //如果后台接收类型为base64的话这一步可以省略
         
         resolve(files)
       }
     }
    })
  }
