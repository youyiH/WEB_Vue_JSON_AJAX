new Vue({
    el:"#content",
    data: {
        datas: null

    },

    // 所有元素顯示後執行一次
    mounted() {
        // 新增 XML 物件
        var xhr = new XMLHttpRequest();
        // 開啟並指定 API 網址
        xhr.open("GET", "./datas.json");
        // 傳送要求
        xhr.send();
        // 載入完成 = () => {} - 匿名函式 = function name () {}
        xhr.onload = () => {
            // 將 JSON 資料轉為物件
            var obj = JSON.parse(xhr.responseText);
            // 資料 = 物件.資料名稱.資料名稱
            this.datas = obj.result.records;

            console.log(this.datas);
        }
    }
});

console.log("!!!");