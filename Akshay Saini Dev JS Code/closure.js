function baap(){
    var u = 22;
    function outest(){
        var x = 20;
        function outer(){
            var a = 10;
            function inner() {
                console.log(a,x,u);
            }
            return inner;
        }
        return outer;
    }
    return outest;
}

var baapka = baap();
var bhaika = baapka();
var dadaka = bhaika();
dadaka();
