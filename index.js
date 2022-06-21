function xgrgb(img) {
    
    var c = document.createElement("canvas");  //创建canvas元素
    c.width = img.width
    c.height = img.height
    var ctx = c.getContext("2d");
    //getContext("2d") 对象是内建的 HTML5 对象，
    //拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

    ctx.drawImage(img, 0, 0, c.width, c.height);
    //把图片画入画布

    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    //getImageDate 得到画布里的图片信息

    // console.log(imgData)
    // 取所有像素的平均值

    var r = 0;
    var g = 0;
    var b = 0;
    for (var row = 0; row < c.height; row++) {
        for (var col = 0; col < c.width; col++) {
            r += imgData.data[((c.width * row) + col) * 4];
            g += imgData.data[((c.width * row) + col) * 4 + 1];
            b += imgData.data[((c.width * row) + col) * 4 + 2];
        }
    }

    // 求取平均值
    r /= (c.width * c.height);
    g /= (c.width * c.height);
    b /= (c.width * c.height);

    // 将最终的值取整
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    var rgb = {
        r:r,
        g:g,
        b:b,
    }
    return rgb
}

export {xgrgb}