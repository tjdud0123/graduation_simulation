var major;
var bmajor;
var minor;
var grade = 1;
var semester;
var category;
var del1;

var class_name;
var class_credit;
var timetable =[];
var onetimetable=[];
var user_data;

var whole_n=0;
var majorPoint_n=0;
var bmajorPoint_n=0;
var minor_n=0;
var english_n=0;
var kise_n=0;
var nari_n=0;
var woori_n=0;
var sgel_n=0;
var foreign_n=0;
var daey_n=0;
var gelbis_n=0;
var yoong_n=0;
var comsa_n=0;
var gelker_n=0;


//major
function deep() {
    document.getElementById("major").innerHTML = "심화전공"
//    document.getElementById("bin_major").style.display = "none"
    major = "deep";
    update_state();
}

function binary() {
    document.getElementById("major").innerHTML = "복수전공"
//    document.getElementById("bin_major").style.display = "block"
    major = "binary";
    update_state();
}

//bmajor
function bin_not() {
    document.getElementById("bin_major").innerHTML = "없음"
    bmajor = "nothing";
    update_state();
}

function bin_manage() {
    document.getElementById("bin_major").innerHTML = "경영학"
    bmajor = "manage";
    update_state();
}

function bin_psy() {
    document.getElementById("bin_major").innerHTML = "심리학"
    bmajor = "psy";
    update_state();
}

function bin_commu() {
    document.getElementById("bin_majorr").innerHTML = "커뮤니케이션미디어학"
    bmajor = "commu";
    update_state();
}

//minor
function min_not() {
    document.getElementById("minor").innerHTML = "없음"
    minor = "nothing";
    update_state();
}

function min_compu() {
    document.getElementById("minor").innerHTML = "컴퓨터공학(scsc)"
    minor = "compu";
    update_state();
}

function min_artmedia() {
    document.getElementById("minor").innerHTML = "인문예술미디어학"
    minor = "artmedia";
    update_state();
}

function setting(a, num) {
    grade = num;
    $('.semester').css("border-bottom", "2px solid rgba(100,0,0,0.0)");
    $(a).css("border-bottom", "2px solid rgba(100,0,0,0.3)");
    display_classes()
}

//semsester

function select_sem(n) {
    switch (n) {
        case 1:
            document.getElementById("select_sem").innerHTML = "1학기"
            semester=1;
            break;
        case 2:
            document.getElementById("select_sem").innerHTML = "2학기"
            semester=2;
            break;
        case 3:
            document.getElementById("select_sem").innerHTML = "여름계절"
            semester=3;
            break;
        case 4:
            document.getElementById("select_sem").innerHTML = "겨울계절"
            semester=4;
            break;
    }
}

//category

function set_category(n) {
    switch (n) {
        case 1:
            document.getElementById("select_category").innerHTML = "전공선택"
            category=1;
            break;
        case 2:
            document.getElementById("select_category").innerHTML = "복수전공과목"
            category=2;
            break;
        case 3:
            document.getElementById("select_category").innerHTML = "부전공과목"
            category=3;
            break;
        case 4:
            document.getElementById("select_category").innerHTML = "주전공,부전공"
            category=4;
            break;
         case 5:
            document.getElementById("select_category").innerHTML = "주전공,복수전공"
            category=5;
            break;
        case 6:
            document.getElementById("select_category").innerHTML = "융복합교양"
            category=6;
            break;
        case 7:
            document.getElementById("select_category").innerHTML = "기독교와세계"
            category=7;
            break;
        case 8:
            document.getElementById("select_category").innerHTML = "나눔리더십 외"
            category=8;
            break;
        case 9:
            document.getElementById("select_category").innerHTML = "우리말과글쓰기"
            category=9;
            break;
        case 10:
            document.getElementById("select_category").innerHTML = "스토리텔링과글쓰기"
            category=10;
            break;
        case 11:
            document.getElementById("select_category").innerHTML = "제2외국어"
            category=11;
            break;
        case 12:
            document.getElementById("select_category").innerHTML = "대학영어"
            category=12;
            break;
        case 13:
            document.getElementById("select_category").innerHTML = "글비커"
            category=13;
            break;
        case 14:
            document.getElementById("select_category").innerHTML = "컴사프"
            category=14;
            break;
        case 15:
            document.getElementById("select_category").innerHTML = "글커기"
            category=15;
            break;
        case 16:
            document.getElementById("select_category").innerHTML = "기타"
            category=16;
            break;
    }
}

//del



//검색

function myFunction(){
     var input, filter, table, tbody, tr, td, i, k, str;
  input = document.getElementById("search_inp");
  filter = input.value;
  table = document.getElementById("tab");
  tbody = table.getElementsByTagName("tbody")
  tr = tbody[0].getElementsByTagName("tr");
  
 for (i = 1; i < tr.length; i++) {
   tr[i].style.display = "none";
   for(k = 0; k<6; k++){
    td = tr[i].getElementsByTagName("td")[k]
    if (td.innerHTML.includes(filter)) {
       tr[i].style.display = "";
      } 
    }   
  }
}

//테이블 입력
$(document).ready(function(){
  $("tr").on({
      mouseenter: function(){
             $(this).css("cursor", "pointer");
          },
          
      click: function(){
           class_name = this.getElementsByTagName("td")[0];
           class_credit = this.getElementsByTagName("td")[3];
            var c_n = class_name.innerHTML;
            var c_c =  class_credit.innerHTML;
          document.getElementById("class_name").value=c_n;
          document.getElementById("class_credit").value=c_c;
        },
      mouseleave: function(){
            $(".cl").css("background-color", "silver");
           
      }   
        
    });
});

//server
var url="http://127.0.0.1:5000/"
function get_server(param = ""){
    http = new XMLHttpRequest();
    http.open("GET",url+param,false);
    http.send();
    return JSON.parse(http.responseText);
}
function post_server(param = "",p_data){
    http = new XMLHttpRequest();
   var json = JSON.stringify(p_data);
    http.open("POST",url+param,true);
    http.send(json);
    return JSON.parse(http.responseText);
}
//유저받기
function user_set(){
    user_data = get_server("load");
    console.log(user_data);
    timetable = user_data.pastTimeTable;
//기본정보 출력
    for(i=0;i<timetable.length;i++){
        if(timetable[i]!=null){
            var kk=Number(timetable[i].credit);
        switch(timetable[i].category){
            case '1':
            majorPoint_n +=kk;
            break;
        case '2':
            bmajorPoint_n +=kk;
            break;
        case '3':
            minor_n +=kk;
            break;
        case '4':
            majorPoint_n +=kk;
            minor_n +=kk;
            break;
         case '5':
            majorPoint_n +=kk;
            bmajorPoint_n +=kk;
            break;
        case '6':
            yoong_n +=kk;
            break;
        case '7':
            kise_n +=kk;
            break;
        case '8':
            nari_n +=kk;
            console.log(nari_n);
            break;
        case '9':
            woori_n +=kk;
            break;
        case '10':
            sgel_n +=kk;
            break;
        case '11':
            foreign_n += kk;
            break;
        case '12':
            daey_n +=kk;
            break;
        case '13':
            gelbis_n += kk;
            break;
        case '14':
           comsa_n += kk;
            break;
        case '15':
            gelker_n += kk;
            break;
        case '16':
            break;
         }   
        switch(timetable[i].english){
            case 'true' :
            english_n += Number(timetable[i].credit);
            break;
            case 'false':
            break;
        }
        whole_n +=Number(timetable[i].credit);
        }
    }
        
    display_classes();
    update_state();
}

//띄우기
function display_classes(){
    console.log("hh");
    document.getElementById("1_1").innerHTML="";
    document.getElementById("1_2").innerHTML="";
    document.getElementById("1_s").innerHTML="";
    document.getElementById("1_w").innerHTML="";
    for(i=0;i<timetable.length;i++){
        if(timetable[i]!=null){
        if(timetable[i].grade==grade){
            switch(timetable[i].semester){
                    case "1":
                    document.getElementById("1_1").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "2":
                    document.getElementById("1_2").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "3":
                    document.getElementById("1_s").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "4":
                    document.getElementById("1_w").innerHTML+=timetable[i].name + "<br>";
                    break;
            }
        }
   }
        }
}


//add

function add(){
    //추가
   
    var oneClass ={};
    oneClass.grade = grade.toString();
    oneClass.semester = semester.toString();
    oneClass.name = document.getElementById("class_name").value;
    oneClass.credit = document.getElementById("class_credit").value;
    oneClass.category = category;
    oneClass.english = document.getElementById("myCheck").checked.toString();
    
    if(semester==undefined){
        alert("학기를 선택해주세요");
    }
    else if(oneClass.name==""){
        alert("과목명을 입력해주세요");
    }
    else if(oneClass.credit==""){
        alert("학점을 입력해주세요");
    }
    else if(oneClass.category==undefined){
        alert("과목분류를 선택해주세요");
    }
    else{
        timetable.push(oneClass);
        display_classes(oneClass.credit,oneClass.category,oneClass.english);
        console.log("category: "+oneClass.category+"  / credit : "+oneClass.credit);
        //골라들어가기
        var kk=Number(oneClass.credit);
        switch(oneClass.category){
            case 1:
            majorPoint_n +=kk;
            break;
        case 2:
            bmajorPoint_n +=kk;
            break;
        case 3:
            minor_n +=kk;
            break;
        case 4:
            majorPoint_n +=kk;
            minor_n +=kk;
            break;
         case 5:
            majorPoint_n +=kk;
            bmajorPoint_n +=kk;
            break;
        case 6:
            yoong_n +=kk;
            break;
        case 7:
            kise_n +=kk;
            break;
        case 8:
            nari_n +=kk;
            console.log(nari_n);
            break;
        case 9:
            woori_n +=kk;
            break;
        case 10:
            sgel_n +=kk;
            break;
        case 11:
            foreign_n += kk;
            break;
        case 12:
            daey_n +=kk;
            break;
        case 13:
            gelbis_n += kk;
            break;
        case 14:
           comsa_n += kk;
            break;
        case 15:
            gelker_n += kk;
//            document.getElementById("gelker_n").innerHTML = gelker_n;
            break;
        case 16:
            break;
         }   
        switch(oneClass.english){
            case 'true' :
            english_n += Number(oneClass.credit);
//            document.getElementById("english_n").innerHTML = english_n;
            break;
            case 'false':
            break;
        }
        whole_n +=Number(oneClass.credit);
        update_state();
//        document.getElementById("whole_n").innerHTML = whole_n;
    }
}



function del(){
    del1 = document.getElementById("del_name").value;
    console.log(del1);
    for(i=0;i<timetable.length;i++){
        if(timetable[i]!=null){
        if(timetable[i].name == del1){
            //점수빼기
            mm=Number(timetable[i].credit);
            switch(Number(timetable[i].category)){
        case 1:
                    console.log("dd");
            majorPoint_n -=mm;
            break;
        case 2:
            bmajorPoint_n -=mm;
            break;
        case 3:
            minor_n -=mm;
            break;
        case 4:
            majorPoint_n -=mm;
            minor_n -=mm;
            break;
         case 5:
            majorPoint_n -=mm;
            bmajorPoint_n -=mm;
            break;
        case 6:
            yoong_n -=mm;
            break;
        case 7:
            kise_n -=mm;
            break;
        case 8:
            nari_n -=mm;
            break;
        case 9:
            woori_n -=mm;
            break;
        case 10:
            sgel_n -=mm;
            break;
        case 11:
            foreign_n -= mm;
            break;
        case 12:
            daey_n -=mm;
            break;
        case 13:
            gelbis_n -= mm;
            break;
        case 14:
           comsa_n -= mm;
            break;
        case 15:
            gelker_n -= mm;
            break;
        case 16:
            break;
            }
        switch(timetable[i].english){
            case 'true':
            english_n -= mm;
            break;
            case'false':
            break;
        }
        whole_n -=mm;
            //삭제
            delete timetable[i];
            
        }
        }
    }
//    get_server("del/"+del1);
    display_classes();
    update_state();
    document.getElementById("del_name").value="";
        
        
}

//status창

function update_state(){
    console.log("uptdate: "+nari_n);
    //total setting
    switch(major){
        case "deep":
        document.getElementById("majorPoint_t").innerHTML="60";
        break;
        case "binary":
        document.getElementById("majorPoint_t").innerHTML="36";
        break;
    }
    switch(bmajor){
        case "manage":
        document.getElementById("bmajorPoint_t").innerHTML="52";
        break;
        case "nothing":
        document.getElementById("bmajorPoint_t").innerHTML="0";
        break;
        case "psy":
        document.getElementById("bmajorPoint_t").innerHTML="39";
        break;
        case "commu":
        document.getElementById("bmajorPoint_t").innerHTML="39";
        break;
    }
    switch(minor){
        case "compu":
        document.getElementById("minor_t").innerHTML="30";
        break;
        case "nothing":
        document.getElementById("minor_t").innerHTML="0";
        break;
        case "artmedia":
        document.getElementById("minor_t").innerHTML="21";
        break;
    }
        //update
        document.getElementById("whole_n").innerHTML = whole_n;
         if(whole_n>=130){
             document.getElementById("wholeCh").style.color='green';
         }
        else{document.getElementById("wholeCh").style.color='red';}
    
        document.getElementById("majorPoint_n").innerHTML = majorPoint_n;
        if(majorPoint_n>=Number(document.getElementById("majorPoint_t").innerHTML)){
             document.getElementById("majorPointCh").style.color='green';
         }
        else{document.getElementById("majorPointCh").style.color='red';}
    
        document.getElementById("bmajorPoint_n").innerHTML = bmajorPoint_n;
        if(bmajorPoint_n>=Number(document.getElementById("bmajorPoint_t").innerHTML)){
             document.getElementById("bmajorPointCh").style.color='green';
         }
        else{document.getElementById("bmajorPointCh").style.color='red';}
    
        document.getElementById("minor_n").innerHTML = minor_n;
        if(minor_n>=Number(document.getElementById("minor_t").innerHTML)){
             document.getElementById("minorCh").style.color='green';
         }
        else{document.getElementById("minorCh").style.color='red';}
    
        document.getElementById("english_n").innerHTML = english_n;
        if(english_n>=18){
             document.getElementById("englishCh").style.color='green';
         }
        else{document.getElementById("englishCh").style.color='red';}
    
        document.getElementById("kise_n").innerHTML = kise_n;
        if(kise_n>=3){
             document.getElementById("kiseCh").style.color='green';
         }
        else{document.getElementById("kiseCh").style.color='red';}
    
        document.getElementById("nari_n").innerHTML = nari_n;
        if(nari_n>=2){
             document.getElementById("nariCh").style.color='green';
         }
        else{document.getElementById("nariCh").style.color='red';}
    
        document.getElementById("woori_n").innerHTML = woori_n;
        if(woori_n>=3){
             document.getElementById("wooriCh").style.color='green';
         }
        else{document.getElementById("wooriCh").style.color='red';}
    
        document.getElementById("sgel_n").innerHTML = sgel_n;
        if(sgel_n>=2){
             document.getElementById("sgelCh").style.color='green';
         }
        else{document.getElementById("sgelCh").style.color='red';}
    
        document.getElementById("foreign_n").innerHTML = foreign_n;
        if(foreign_n>=4){
             document.getElementById("foreignCh").style.color='green';
         }
        else{document.getElementById("foreignCh").style.color='red';}
    
        document.getElementById("daey_n").innerHTML = daey_n;
        if(daey_n>=3){
             document.getElementById("DaeyCh").style.color='green';
         }
        else{document.getElementById("DaeyCh").style.color='red';}
    
        document.getElementById("gelbis_n").innerHTML = gelbis_n;
        if(gelbis_n>=3){
             document.getElementById("gelbisCh").style.color='green';
         }
        else{document.getElementById("gelbisCh").style.color='red';}
    
        document.getElementById("yoong_n").innerHTML = yoong_n;
        if(yoong_n>=9){
             document.getElementById("yoongCh").style.color='green';
         }
        else{document.getElementById("yoongCh").style.color='red';}
    
        document.getElementById("comsa_n").innerHTML = comsa_n;
        if(comsa_n>=3){
             document.getElementById("comsaCh").style.color='green';
         }
        else{document.getElementById("comsaCh").style.color='red';}
    
        document.getElementById("gelker_n").innerHTML = gelker_n; 
        if(gelker_n>=3){
             document.getElementById("gelkerCh").style.color='green';
         }
        else{document.getElementById("gelkerCh").style.color='red';}
}

function save()
{
    console.log(timetable[0]);
    tt = post_server("plansave",timetable[0]);
    console.log(tt);
}