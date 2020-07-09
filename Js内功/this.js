const baseUrl = 'https://yuguang.blog.csdn.net/article/details/'
var urlEndMap = [
    106479511, 106555301, 106618708, 106668345, 106793254,
    104608698, 105221852, 105714458, 104691316, 104060170,
    103869215, 103476801, 103344345, 103312962, 101070079,
    107151991, 107111529, 106940646, 106824296, 106385853
];
var index = 0; //全局下标，暂定5s+1
var sum = 0
var timer = setInterval(() => {
    if(index < 20){
        index++;
    }else{
        index = 0;
    }
    sum++;
    myWindow = window.open(baseUrl+urlEndMap[index], '', 'width=200,height=100');
    myWindow.blur();
    setTimeout(() => {
        myWindow.close()
        console.log(`执行了${sum}次`);
    }, 500);
}, 3500);


