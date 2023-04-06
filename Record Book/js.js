window.addEventListener("load", function () {
    var right = document.querySelector(".btn3");
    var nav = document.querySelector("nav");
    var change = document.querySelector(".blur");
    var form1 = document.querySelector("#form1")
    var wid = document.querySelector(".wid")
    var flag = 0;
    var tab = 0;//用于屏蔽多次点击（节流阀）
    var gg = 0

    var exc = document.querySelector("#btn1");
    var form2 = document.querySelector("#form2")
    var form = document.querySelectorAll(".form")
    var pictures = document.querySelector(".pic")
    var nav = document.querySelector("nav")
    var body = document.querySelector("body")

    if (localStorage.getItem("i") == null)
        localStorage.setItem("pic", 0)
    var pi = localStorage.getItem("pic")
    pictures.children[pi].style.border = "3px solid rgb(206, 125, 63)";
    nav.style.backgroundImage = "url(" + pictures.children[pi].children[0].src + ")"
    body.style.backgroundImage = "url(" + pictures.children[pi].children[0].src + ")"

    if (localStorage.getItem("lock") != 0) {
        var welcom = document.querySelector(".welcome")
        welcom.style.display = "block"
        var n1 = document.querySelector(".n1")
        var n2 = document.querySelector(".n2")
        var n3 = document.querySelector(".n3")
        var next1 = document.querySelectorAll(".bb")
        var p1 = 0;
        for (var p = 0; p < next1.length; p++) {
            next1[p].onclick = function () {
                if (p1 == 0) {
                    n1.style.opacity = "0"
                    n1.style.maxWidth = "0"
                    n1.display = "none"
                    n2.style.opacity = "1"
                    n2.style.maxWidth = "100%"
                }
                if (p1 == 1) {
                    n2.style.opacity = "0"
                    n2.style.maxWidth = "0"
                    n3.style.opacity = "1"
                    n3.style.maxWidth = "100%"
                }
                if (p1 == 2) {
                    welcom.style.display = "none"
                    localStorage.setItem("lock", 0)
                }
                p1++
            }
        }
    }

    right.addEventListener("click", function () {
        if (flag == 0) {
            nav.style.width = "300px";
            change.style.position = "absolute";
            change.style.right = "0px";
            right.innerHTML = "";
            wid.style.maxWidth = "240px";
            form1.style.opacity = "1";
            form1.style.zIndex = "1";
            form1.style.maxWidth = "240px"
            form1.children[0].style.padding = "30px"
            form1.children[0].style.zIndex = "2"
            flag = 1;
        }
        else {
            nav.style.width = "60px";
            right.innerHTML = "";
            wid.style.maxWidth = "0px";
            form1.style.opacity = "0"
            form1.style.zIndex = "0";
            form1.style.maxWidth = "0px"
            form1.children[0].style.padding = "0"
            form1.children[0].style.zIndex = "-2"
            form2.style.zIndex = "-1"
            form2.style.opacity = "0"
            form2.style.maxWidth = "0px"
            form3.style.zIndex = "-1"
            form3.style.opacity = "0"
            form3.style.maxWidth = "0px"
            input.style.display = "none";
            flag = 0;
        }
    })
    //导航栏收纳

    var exc = document.querySelector("#btn1");
    var form2 = document.querySelector("#form2")
    var form = document.querySelectorAll(".form")
    var picture = document.querySelectorAll(".picture")
    var nav = document.querySelector("nav")
    var body = document.querySelector("body")
    exc.onclick = function () {
        for (var i = 0; i < form.length; i++) {
            form[i].style.zIndex = "-1"
            form[i].style.opacity = "0"
        }
        if (flag == 1) {
            form2.style.zIndex = "1"
            form2.style.opacity = "1"
            form2.style.maxWidth = "240px"
        }
        else {
            nav.style.width = "300px";
            change.style.position = "absolute";
            change.style.right = "0px";
            right.innerHTML = "";
            wid.style.maxWidth = "240px";
            flag = 1;
            setTimeout(() => {
                form2.style.zIndex = "1"
                form2.style.opacity = "1"
                form2.style.maxWidth = "240px"
            }, 300);
        }
    }

    for (var i = 0; i < picture.length; i++) {
        picture[i].onclick = function () {
            localStorage.setItem("i", 1)
            localStorage.setItem('pic', this.getAttribute("data-u"))
            for (var i = 0; i < picture.length; i++) {
                picture[i].style.border = " 3px solid transparent"
            }
            this.style.border = "3px solid rgb(206, 125, 63)";
            nav.style.backgroundImage = "url(" + this.children[0].src + ")"
            body.style.backgroundImage = "url(" + this.children[0].src + ")"
        }
    }
    //换肤

    var search = document.querySelector("#btn2");
    var form3 = document.querySelector("#form3")
    var form = document.querySelectorAll(".form")
    var input = document.querySelector(".search").querySelector("input")
    search.onclick = function () {
        for (var i = 0; i < form.length; i++) {
            form[i].style.zIndex = "-1"
            form[i].style.opacity = "0"
        }
        if (flag == 1) {
            form3.style.zIndex = "1"
            form3.style.opacity = "1"
            form3.style.maxWidth = "240px"
            input.style.display = "block"
        }
        else {
            nav.style.width = "300px";
            change.style.position = "absolute";
            change.style.right = "0px";
            right.innerHTML = "";
            wid.style.maxWidth = "240px";
            flag = 1;
            setTimeout(() => {
                form3.style.zIndex = "1"
                form3.style.opacity = "1"
                form3.style.maxWidth = "240px"
                input.style.display = "block"
            }, 300);
        }
    }
    //搜索

    var time1 = document.querySelector('.time1');
    var time2 = document.querySelector('.time2');
    var time3 = document.querySelector('.time3');
    var time4 = document.querySelector('.time4');
    var up = document.querySelector("#up");
    var down = document.querySelector("#down");
    var getTime = function () {
        var date = new Date();
        var s1 = date.getSeconds();
        var h1 = date.getHours();
        var h2 = date.getHours();
        var m1 = date.getMinutes();
        var m2 = date.getMinutes();
        if (date.getHours() < 10) {
            h1 = 0;
        }
        else {
            h1 = h1 / 10;
            h2 = h2 % 10;
        }
        if (date.getMinutes() < 10) {
            m1 = 0;
        }
        else {
            m1 = m1 / 10;
            m2 = m2 % 10;
        }
        if (s1 < 10) {
            s1 = '0' + s1
        }
        time1.innerHTML = parseInt(h1);
        time2.innerHTML = parseInt(h2);
        time3.innerHTML = parseInt(m1);
        time4.innerHTML = parseInt(m2);
        up.style.display = "block"
        down.style.display = "block"
    }
    var hide = function () {
        up.style.display = "none"
        down.style.display = "none"
    }
    timer1 = null
    timer2 = null
    var timer1 = setInterval(getTime, 1000);
    var timer2 = setInterval(hide, 2000);
    //时间显示


    var neirs = document.querySelectorAll(".shuru")
    var btn4 = document.querySelector("#btn4")
    var tb = document.querySelector("time")
    var table = document.querySelector(".add").querySelector(".table")
    btn4.addEventListener("click", function () {
        tb.style.opacity = "0";
        tb.style.maxHeight = "0";
        table.style.transform = " rotate(360deg)"
        table.style.opacity = "1"
        table.style.maxWidth = "500px"
        list.style.maxWidth = "100%"
        for (var i = 0; i < neirs.length; i++) {
            neirs[i].style.paddingLeft = "1em"
            neirs[i].style.maxWidth = "100%"
        }
        var neirs1 = document.querySelector("#check").querySelectorAll(".neir")
        var list1 = document.querySelector("#check").querySelector(".list");
        var table1 = document.querySelector("#check").querySelector(".table")
        var check = document.querySelector("#check");
        check.style.zIndex = "-3"
        table1.style.opacity = "0"
        table1.style.transform = " rotate(355deg)"
        table1.style.maxWidth = "0px"
        list1.style.maxWidth = "0px"
        for (var i = 0; i < neirs1.length; i++) {
            neirs1[i].style.padding = "0"
            neirs1[i].style.maxWidth = "0"
        }
        var year = document.querySelector("#n1")
        var month = document.querySelector("#n2")
        var day = document.querySelector("#n3")
        year.value = date.getFullYear();
        month.value = date.getMonth() + 1
        day.value = date.getDate();
    })    // 点击创建

    var neirs = document.querySelectorAll(".shuru")
    var backup = document.querySelector(".goback");
    var list = document.querySelector(".list");
    backup.onclick = function () {
        tb.style.opacity = "1";
        tb.style.maxHeight = "100%";
        table.style.opacity = "0";
        table.style.transform = " rotate(355deg)";
        table.style.maxWidth = "0px";
        list.style.maxWidth = "0px";
        iner.style.backgroundColor = "rgb(58, 125, 193)";
        outer.style.backgroundColor = "#666";
        ioro = 0;
        for (var i = 0; i < neirs.length; i++) {
            neirs[i].style.padding = "0";
            neirs[i].style.maxWidth = "0";
        }
    }//返回

    var iner = document.querySelector("#in")
    var outer = document.querySelector("#out")
    var ioro = 0
    iner.addEventListener("click", function () {
        iner.style.backgroundColor = "rgb(58, 125, 193)"
        outer.style.backgroundColor = "#666"
        ioro = 0
    })
    outer.addEventListener("click", function () {
        iner.style.backgroundColor = "#666"
        outer.style.backgroundColor = "rgb(58, 125, 193)"
        ioro = 1
    })//收入支出切换

    var neirs = document.querySelectorAll(".shuru")
    var Delete = function () {
        for (var i = 0; i < neirs.length; i++) {
            neirs[i].value = ""
        }
    };//清除输入内容

    var submit = document.querySelector(".submit");
    var succes = document.querySelector(".succes");
    submit.addEventListener("click", function () {
        if (tab == 0) {
            tab = 1;
            if (jugde()) {
                succes.style.maxWidth = "100%";
                save();
                if (sessionStorage.length / 7 != 0) {
                    empty.style.maxHeight = "0"
                    empty.style.opacity = "0"
                }
                setTimeout(() => {
                    if (gg != 1) {
                        tb.style.opacity = "1";
                        tb.style.maxHeight = "100%";
                        gg = 0;
                    }
                    table.style.opacity = "0"
                    table.style.transform = " rotate(355deg)"
                    table.style.maxWidth = "0px"
                    list.style.maxWidth = "0px"
                    for (var i = 0; i < neirs.length; i++) {
                        neirs[i].style.padding = "0"
                        neirs[i].style.maxWidth = "0"
                    }
                    Delete();
                    iner.style.backgroundColor = "rgb(58, 125, 193)";
                    outer.style.backgroundColor = "#666";
                    ioro = 0;
                }, 2000);
                setTimeout(() => {
                    succes.style.maxWidth = "0";
                }, 2500);
            }
        }
        setTimeout(() => {
            tab = 0;
        }, 2500);
    })//保存


    var neirs = document.querySelectorAll(".shuru")
    var date = new Date();
    var jugde = function () {
        for (var i = 0; i < neirs.length; i++) {
            if (neirs[i].value != "") {
                if (!(neirs[0].value > 1000 && neirs[0].value < date.getFullYear() + 1)) {
                    alert("年份写错啦，请重新输入");
                    neirs[0].value = ''
                    return 0;
                }
                else if (!(neirs[1].value > 0 && neirs[1].value < 13)) {
                    alert("月份写错啦，请重新输入")
                    neirs[1].value = ''
                    return 0;
                }
                else if (!(neirs[2].value > 0 && neirs[2].value <= 31)) {
                    alert("日期写错啦，请重新输入")
                    neirs[2].value = ''
                    return 0;
                }
                else if (!(neirs[3].value > 0 && neirs[3].value < 100000000000)) {
                    alert("金额写错啦，请重新输入")
                    neirs[3].value = ''
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else {
                alert("有地方没填噢，请检查");
                return 0;
            }
        }
    }//判断用户输入


    var year = document.querySelector("#n1")
    var month = document.querySelector("#n2")
    var day = document.querySelector("#n3")
    var amont = document.querySelector("#n4")
    var remark = document.querySelector("#n5")
    var boxes = document.querySelector(".boxes")
    var uu = 0
    var numer = 0;
    var a = 0;
    var f = sessionStorage.length;
    var tag = 0;
    if (sessionStorage.length > 0) {
        for (var i = 0; i < f / 7; i++) {
            var bill = document.createElement("div");
            bill.className = "bill";
            var namer = document.createElement("p");
            namer.className = "namer";
            var creatime = document.createElement("div");
            creatime.className = "creatime";
            boxes.insertBefore(bill, boxes.children[0]);
            namer.innerHTML = sessionStorage.getItem(('a' + tag));
            bill.appendChild(namer);
            creatime.innerHTML = sessionStorage.getItem(('b' + tag));
            bill.appendChild(creatime);
            bill.setAttribute("data-index", numer);
            var close = document.createElement("span")
            close.innerHTML = ""
            close.className = "close";
            bill.appendChild(close);
            var empty = document.querySelector(".empty")
            empty.style.maxHeight = "0"
            empty.style.opacity = "0"
            close.addEventListener("click", function (e) {
                var f = this.parentElement.getAttribute("data-index")
                removed(f);
                this.parentElement.remove();
                var billse = document.querySelectorAll(".bill")
                var n = billse.length - 1;
                if (n >= 0) {
                    for (var u = 0; u < billse.length; u++) {
                        billse[u].setAttribute("data-index", n)
                        n--
                    }
                }
                e.stopPropagation();
            }, false)
            bill.addEventListener("click", function () {
                var flag = this.getAttribute("data-index")
                inCheck(flag);
                deleted.setAttribute("data-num", flag);
                editor.setAttribute("data-num", flag)
            })
            tag++;
            numer++;
        }
        a = tag;
    }

    var empty = document.querySelector(".empty")
    var deleted = document.querySelector(".delete");
    var editor = document.querySelector(".editor")
    var save = function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var min = date.getMinutes();
        m < 10 ? m = '0' + m : m;
        d < 10 ? d = '0' + d : d;
        h < 10 ? h = '0' + h : h;
        min < 10 ? min = '0' + min : min;
        var time1 = y + "/" + m + "/" + d + "/" + " " + h + ":" + min;
        sessionStorage.setItem(('c' + a), year.value)
        sessionStorage.setItem(('d' + a), month.value)
        sessionStorage.setItem(('e' + a), day.value)
        sessionStorage.setItem(('f' + a), amont.value)
        sessionStorage.setItem(('g' + a), ioro)
        if (remark.value == '') {
            if (a == 0)
                remark.value = "无备注"
            else
                remark.value = "无备注(" + (++uu) + ")"
        }
        var bill = document.createElement("div");
        bill.className = "bill";
        var namer = document.createElement("p");
        namer.className = "namer";
        var creatime = document.createElement("div");
        creatime.className = "creatime";
        boxes.insertBefore(bill, boxes.children[0]);
        namer.innerHTML = remark.value;
        bill.appendChild(namer);
        creatime.innerHTML = time1;
        bill.appendChild(creatime);
        bill.setAttribute("data-index", numer);
        var close = document.createElement("span")
        close.innerHTML = ""
        close.className = "close"
        bill.appendChild(close);
        sessionStorage.setItem(('a' + a), remark.value);
        sessionStorage.setItem(('b' + a), creatime.innerHTML)
        close.addEventListener("click", function (e) {
            var f = this.parentElement.getAttribute("data-index")
            removed(f);
            this.parentElement.remove();
            var billse = document.querySelectorAll(".bill")
            var n = billse.length - 1;
            for (var u = 0; u < billse.length; u++) {
                billse[u].setAttribute("data-index", n)
                n--;
            }
            e.stopPropagation();
            if (sessionStorage.length != 0) {
                a = parseInt(boxes.children[0].getAttribute("data-index")) + 1
                numer = parseInt(boxes.children[0].getAttribute("data-index")) + 1
            }
            else {
                a = 0
                numer = 0
            }
        }, false)
        bill.addEventListener("click", function () {
            var flag = this.getAttribute("data-index")
            inCheck(flag);
            deleted.setAttribute("data-num", flag);
            editor.setAttribute("data-num", flag)
        })
        a++;
        numer++

    }//刷新不丢失;

    var removed = function (f) {
        var x = sessionStorage.length;
        if (f != x / 7 && x / 7 > 1) {
            var i = f;
            for (var i = 0; i < uu; i++) {
                if (sessionStorage.getItem(('a') + f) == "无备注(" + uu + ")")
                    uu--;
            }
            sessionStorage.removeItem(('a' + f));
            sessionStorage.removeItem(('b' + f))
            sessionStorage.removeItem(('c' + f))
            sessionStorage.removeItem(('d' + f))
            sessionStorage.removeItem(('e' + f))
            sessionStorage.removeItem(('f' + f))
            sessionStorage.removeItem(('g' + f))
            for (var i = f; i < x / 7 - 1; i++) {
                sessionStorage.setItem(('a' + i), sessionStorage.getItem(('a' + (parseInt(i) + 1))));
                sessionStorage.setItem(('b' + i), sessionStorage.getItem(('b' + (parseInt(i) + 1))))
                sessionStorage.setItem(('c' + i), sessionStorage.getItem(('c' + (parseInt(i) + 1))))
                sessionStorage.setItem(('d' + i), sessionStorage.getItem(('d' + (parseInt(i) + 1))))
                sessionStorage.setItem(('e' + i), sessionStorage.getItem(('e' + (parseInt(i) + 1))))
                sessionStorage.setItem(('f' + i), sessionStorage.getItem(('f' + (parseInt(i) + 1))))
                sessionStorage.setItem(('g' + i), sessionStorage.getItem(('g' + (parseInt(i) + 1))))
            }
            sessionStorage.removeItem(('a' + (parseInt(x) / 7 - 1)));
            sessionStorage.removeItem(('b' + (parseInt(x) / 7 - 1)))
            sessionStorage.removeItem(('c' + (parseInt(x) / 7 - 1)))
            sessionStorage.removeItem(('d' + (parseInt(x) / 7 - 1)))
            sessionStorage.removeItem(('e' + (parseInt(x) / 7 - 1)))
            sessionStorage.removeItem(('f' + (parseInt(x) / 7 - 1)))
            sessionStorage.removeItem(('g' + (parseInt(x) / 7 - 1)))
        }
        else {
            for (var i = 0; i < uu; i++) {
                if (sessionStorage.getItem(('a') + f) == "无备注(" + uu + ")")
                    uu--;
            }
            sessionStorage.removeItem(('a' + f));
            sessionStorage.removeItem(('b' + f))
            sessionStorage.removeItem(('c' + f))
            sessionStorage.removeItem(('d' + f))
            sessionStorage.removeItem(('e' + f))
            sessionStorage.removeItem(('f' + f))
            sessionStorage.removeItem(('g' + f))
        }
        if (sessionStorage.length / 7 == 0) {
            var empty = document.querySelector(".empty")
            empty.style.maxHeight = "100%"
            empty.style.opacity = "1"
        }

        var neirs1 = document.querySelector("#check").querySelectorAll(".neir")
        var list1 = document.querySelector("#check").querySelector(".list");
        var table1 = document.querySelector("#check").querySelector(".table")
        var check = document.querySelector("#check");
        check.style.zIndex = "-3"
        tb.style.opacity = "1";
        tb.style.maxHeight = "100%";
        table1.style.opacity = "0"
        table1.style.transform = " rotate(355deg)"
        table1.style.maxWidth = "0px"
        list1.style.maxWidth = "0px"
        for (var i = 0; i < neirs1.length; i++) {
            neirs1[i].style.padding = "0"
            neirs1[i].style.maxWidth = "0"
        }

    }//删除

    var inCheck = function (flag) {
        var t = flag;
        gg = 1
        var neirs1 = document.querySelector("#check").querySelectorAll(".neir")
        var tb = document.querySelector("time")
        var table1 = document.querySelector("#check").querySelector(".table")
        var list1 = document.querySelector("#check").querySelector(".list");
        var check = document.querySelector("#check");
        var year1 = document.querySelector("#a1");
        var month1 = document.querySelector("#a2");
        var day1 = document.querySelector("#a3");
        var inerry = document.querySelector("#in1")
        var outtary = document.querySelector("#out1")
        var amont1 = document.querySelector("#a4");
        var remark1 = document.querySelector("#a5");
        var creatime1 = document.querySelector(".creattime")
        year1.innerHTML = sessionStorage.getItem(('c' + t))
        month1.innerHTML = sessionStorage.getItem(('d' + t))
        day1.innerHTML = sessionStorage.getItem(('e' + t))
        amont1.innerHTML = sessionStorage.getItem(('f' + t))
        remark1.innerHTML = sessionStorage.getItem(('a') + t)
        creatime1.innerHTML = "—— " + sessionStorage.getItem(('b') + t) + " ——"
        var tab1 = sessionStorage.getItem(('g' + t));
        if (tab1 == 0) {
            inerry.style.backgroundColor = "rgb(58, 125, 193)"
            outtary.style.backgroundColor = "#666"
        }
        else {
            inerry.style.backgroundColor = "#666"
            outtary.style.backgroundColor = "rgb(58, 125, 193)"
        }
        check.style.zIndex = "2";
        tb.style.opacity = "0";
        tb.style.maxHeight = "0";
        table1.style.transform = " rotate(360deg)"
        table1.style.opacity = "1"
        table1.style.maxWidth = "500px"
        list1.style.maxWidth = "100%"
        for (var i = 0; i < neirs1.length; i++) {
            neirs1[i].style.paddingLeft = "1em"
            neirs1[i].style.maxWidth = "100%"
        }

        var neirs = document.querySelectorAll(".shuru")
        var list = document.querySelector(".list");
        table.style.opacity = "0";
        table.style.transform = " rotate(355deg)";
        table.style.maxWidth = "0px";
        list.style.maxWidth = "0px";
        iner.style.backgroundColor = "rgb(58, 125, 193)";
        outer.style.backgroundColor = "#666";
        ioro = 0;
        for (var i = 0; i < neirs.length; i++) {
            neirs[i].style.padding = "0";
            neirs[i].style.maxWidth = "0";
        }
    }

    var neirs1 = document.querySelector("#check").querySelectorAll(".neir")
    var backup1 = document.querySelector("#check").querySelector(".goback");
    var list1 = document.querySelector("#check").querySelector(".list");
    var table1 = document.querySelector("#check").querySelector(".table")
    var check = document.querySelector("#check");
    backup1.onclick = function () {
        check.style.zIndex = "-3"
        tb.style.opacity = "1";
        tb.style.maxHeight = "100%";
        table1.style.opacity = "0"
        table1.style.transform = " rotate(355deg)"
        table1.style.maxWidth = "0px"
        list1.style.maxWidth = "0px"
        for (var i = 0; i < neirs1.length; i++) {
            neirs1[i].style.padding = "0"
            neirs1[i].style.maxWidth = "0"
        }
    }

    deleted.addEventListener("click", function (e) {
        var u = this.getAttribute("data-num");
        var bills = document.querySelectorAll(".bill");
        for (var i = 0; i < bills.length; i++) {
            if (u == bills[i].getAttribute("data-index")) {
                bills[i].remove();
                removed(u)
            }
        }

        var neirs1 = document.querySelector("#check").querySelectorAll(".neir")
        var list1 = document.querySelector("#check").querySelector(".list");
        var table1 = document.querySelector("#check").querySelector(".table")
        var check = document.querySelector("#check");
        check.style.zIndex = "-3"
        tb.style.opacity = "1";
        tb.style.maxHeight = "100%";
        table1.style.opacity = "0"
        table1.style.transform = " rotate(355deg)"
        table1.style.maxWidth = "0px"
        list1.style.maxWidth = "0px"
        for (var i = 0; i < neirs1.length; i++) {
            neirs1[i].style.padding = "0"
            neirs1[i].style.maxWidth = "0"
        }
        e.stopPropagation();
    }, false)




    var edit = document.querySelector(".editor")
    var hider = document.querySelectorAll(".hide")
    var sub = document.querySelector(".sub")
    var inp = document.querySelector("#check").querySelectorAll(".shuru1")
    var year2 = document.querySelector("#c2")
    var month2 = document.querySelector("#c3")
    var day2 = document.querySelector("#c4")
    var amount = document.querySelector("#c5")
    var remark2 = document.querySelector("#c1")
    edit.addEventListener("click", function (e) {
        var uber = this.getAttribute("data-num");
        var iner1 = document.querySelector("#in1")
        var outer1 = document.querySelector("#out1")
        iner1.addEventListener("click", snap1)
        function snap1() {
            iner1.style.backgroundColor = "rgb(58, 125, 193)"
            outer1.style.backgroundColor = "#666"
            sessionStorage.setItem(('g' + uber), 0)
            iner1.removeEventListener('click', snap1)
            outer1.removeEventListener('click', snap)
        }
        outer1.addEventListener("click", snap)
        function snap() {
            iner1.style.backgroundColor = "#666"
            outer1.style.backgroundColor = "rgb(58, 125, 193)"
            sessionStorage.setItem(('g' + uber), 1)
            outer1.removeEventListener('click', snap)
            iner1.removeEventListener('click', snap1)
        }
        iner1.style.cursor = "pointer"
        outer1.style.cursor = "pointer"
        for (var i = 0; i < hider.length; i++) {
            hider[i].style.display = "none"
            inp[i].style.maxWidth = "100%"
            inp[i].style.display = "block"
        }
        deleted.style.maxWidth = "0";
        deleted.style.margin = "0";
        deleted.style.opacity = "0";
        edit.style.maxWidth = "0";
        edit.style.margin = "0";
        edit.style.opacity = "0";
        sub.style.maxWidth = "56px";
        sub.style.opacity = "1"
        year2.value = sessionStorage.getItem(('c' + uber));
        month2.value = sessionStorage.getItem(('d' + uber));
        day2.value = sessionStorage.getItem(('e' + uber));
        amount.value = sessionStorage.getItem(('f' + uber));
        remark2.value = sessionStorage.getItem(('a' + uber));
        e.stopPropagation();
    }, false)


    sub.addEventListener("click", function (e) {
        var iner1 = document.querySelector("#in1")
        var outer1 = document.querySelector("#out1")
        var edit = document.querySelector(".editor")
        var uber = edit.getAttribute("data-num")
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var min = date.getMinutes();
        m < 10 ? m = '0' + m : m;
        d < 10 ? d = '0' + d : d;
        h < 10 ? h = '0' + h : h;
        min < 10 ? min = '0' + min : min;
        var time2 = y + "/" + m + "/" + d + "/" + " " + h + ":" + min;
        if (jugde1()) {
            var ioro1 = sessionStorage.getItem(('g' + uber))
            sessionStorage.setItem(("c" + uber), year2.value)
            sessionStorage.setItem(("d" + uber), month2.value)
            sessionStorage.setItem(("e" + uber), day2.value)
            sessionStorage.setItem(("f" + uber), amount.value)
            sessionStorage.setItem(("a" + uber), remark2.value)
            sessionStorage.setItem(('b' + uber), time2)
            sessionStorage.setItem(('g' + uber), ioro1)

            var bill3 = document.querySelectorAll(".bill")
            var year1 = document.querySelector("#a1");
            var month1 = document.querySelector("#a2");
            var day1 = document.querySelector("#a3");
            var amont1 = document.querySelector("#a4");
            var remark1 = document.querySelector("#a5")
            var creatime2 = document.querySelector(".creattime")

            for (var i = 0; i < bill3.length; i++) {
                if (bill3[i].getAttribute("data-index") == uber) {
                    bill3[i].children[0].innerHTML = sessionStorage.getItem(('a' + uber))
                    bill3[i].children[1].innerHTML = sessionStorage.getItem(('b' + uber))
                }
            }

            year1.innerHTML = sessionStorage.getItem(('c' + uber))
            month1.innerHTML = sessionStorage.getItem(('d' + uber))
            day1.innerHTML = sessionStorage.getItem(('e' + uber))
            amont1.innerHTML = sessionStorage.getItem(('f' + uber))
            remark1.innerHTML = sessionStorage.getItem(('a') + uber)
            creatime2.innerHTML = "—— " + time2 + " ——"

            var tab1 = sessionStorage.getItem(('g' + uber));
            if (tab1 == 0) {
                iner1.style.backgroundColor = "rgb(58, 125, 193)"
                outer1.style.backgroundColor = "#666"
            }
            else {
                iner1.style.backgroundColor = "#666"
                outer1.style.backgroundColor = "rgb(58, 125, 193)"
            }
            iner1.style.cursor = "default"
            outer1.style.cursor = "default"
            for (var i = 0; i < hider.length; i++) {
                hider[i].style.display = "block"
                inp[i].style.maxWidth = "0"
                inp[i].style.display = "none"
            }
            deleted.style.maxWidth = "56px";
            deleted.style.margin = "0 20px";
            deleted.style.opacity = "1";
            edit.style.maxWidth = "56px";
            edit.style.margin = "0 20px";
            edit.style.opacity = "1";
            sub.style.maxWidth = "0";
            sub.style.opacity = "0"
        }
        e.stopPropagation();
    }, false)


    var neirs1 = document.querySelectorAll(".shuru1")
    var date = new Date();
    var jugde1 = function () {
        for (var i = 0; i < neirs1.length; i++) {
            if (neirs1[i].value != "") {
                if (!(neirs1[1].value > 1000 && neirs1[1].value < date.getFullYear() + 1)) {
                    alert("年份写错啦，请重新输入");
                    neirs1[1].value = ''
                    return 0;
                }
                else if (!(neirs1[2].value > 0 && neirs1[2].value < 13)) {
                    alert("月份写错啦，请重新输入")
                    neirs1[2].value = ''
                    return 0;
                }
                else if (!(neirs1[3].value > 0 && neirs1[3].value <= 31)) {
                    alert("日期写错啦，请重新输入")
                    neirs1[3].value = ''
                    return 0;
                }
                else if (!(neirs1[4].value > 0 && neirs1[4].value < 100000000000)) {
                    alert("金额写错啦，请重新输入")
                    neirs1[4].value = ''
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else {
                alert("有地方没填噢，请检查");
                return 0;
            }
        }
    }

    var sch = document.querySelector("#searching")
    var empty = document.querySelector(".empty")
    var def = document.querySelector(".def")
    sch.addEventListener("input", function () {
        var bill = document.querySelectorAll(".bill")
        for (var i = 0; i < bill.length; i++) {
            bill[i].style.maxHeight = "0"
            bill[i].style.opacity = "0"
        }
        def.style.maxHeight = "100%"
        def.style.opacity = "1"
        empty.style.maxHeight = "0"
        empty.style.opacity = "0"
        for (var i = 0; i < bill.length; i++) {
            bill[i].style.position = "absolute"
            if (sch.value == bill[i].children[0].innerHTML) {
                bill[i].style.maxHeight = "100%"
                bill[i].style.opacity = "1"
                bill[i].style.position = "relative"
                bill[i].children[0].style.backgroundColor = "rgb(206, 125, 63)"
                bill[i].children[0].style.color = "white"
                def.style.maxHeight = "0"
                def.style.opacity = "0"
            }
        }
        if (sch.value == '' || sch.value == ' ') {
            def.style.maxHeight = "0"
            def.style.opacity = "0"
            if (bill.length == 0) {
                empty.style.maxHeight = "100%"
                empty.style.opacity = "1"
            }
            for (var i = 0; i < bill.length; i++) {
                bill[i].children[0].style.backgroundColor = "transparent"
                bill[i].children[0].style.color = "rgba(236, 255, 253, 0.45)"
                bill[i].style.maxHeight = "100%"
                bill[i].style.opacity = "1"
                bill[i].style.position = "relative"
            }
        }

    })
})

