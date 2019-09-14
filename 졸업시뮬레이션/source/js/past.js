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
var user_data;
//major
function deep() {
    document.getElementById("major").innerHTML = "심화전공"
    document.getElementById("bin_major").style.display = "none"
    major = "deep";
}

function binary() {
    document.getElementById("major").innerHTML = "복수전공"
    document.getElementById("bin_major").style.display = "block"
    major = "binary";
}

//bmajor
function bin_not() {
    document.getElementById("bin_major").innerHTML = "없음"
    bmajor = "nothing";
}

function bin_manage() {
    document.getElementById("bin_major").innerHTML = "경영학"
    bmajor = "manage";
}

function bin_psy() {
    document.getElementById("bin_major").innerHTML = "심리학"
    bmajor = "psy";
}

function bin_commu() {
    document.getElementById("bin_majorr").innerHTML = "커뮤니케이션미디어학"
    bmajor = "commu";
}

//minor
function min_not() {
    document.getElementById("minor").innerHTML = "없음"
    minor = "nothing";
}

function min_compu() {
    document.getElementById("minor").innerHTML = "컴퓨터공학(scsc)"
    minor = "compu";
}

function min_artmedia() {
    document.getElementById("minor").innerHTML = "인문예술미디어학"
    minor = "artmedia";
}

function setting(a, num) {
    grade = num;
    $('.semester').css("border-bottom", "2px solid rgba(100,0,0,0.0)");
    $(a).css("border-bottom", "2px solid rgba(100,0,0,0.3)");
    display_classes();
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
function del(){
    del1 = document.getElementById("del_name").value;
    console.log(del1);
    for(i=0;i<timetable.length;i++){
        if(timetable[i]!=null){
        if(timetable[i].name == del1){
        
            delete timetable[i];
        }
        }
    }
    get_server("del/"+del1);
    display_classes();
    document.getElementById("del_name").value="";
}

//add

function add(){
    //추가
   
    var oneClass ={};
    oneClass.grade = grade;
    oneClass.semester = semester;
    oneClass.name = document.getElementById("class_name").value;
    oneClass.credit = document.getElementById("class_credit").value;
    oneClass.category = category;
    oneClass.english = document.getElementById("myCheck").checked;
    
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
    var oc = get_server("save/"+oneClass.grade+"/"+oneClass.semester+"/"+oneClass.name+"/"+oneClass.credit+"/"+oneClass.category+"/"+oneClass.english);
        timetable= oc['pastTimeTable'];
        console.log(timetable);
        display_classes();
    }
}

//save
//function save(){
//    var json_timetable = JSON.stringify(timetable);
//    get_server("save/"+json_timetable);
//    alert("저장되었습니다!");
//}

//server
var url="http://127.0.0.1:5000/"
function get_server(param = ""){
    http = new XMLHttpRequest();
    http.open("GET",url+param,false);
    http.send();
    return JSON.parse(http.responseText);
}

//유저받기
function user_set(){
    user_data = get_server("load");
    console.log(user_data);
    timetable= user_data.pastTimeTable;
    display_classes();
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
            console.log("grad");
            switch(timetable[i].semester){
                    case "1":
                    console.log("1");
                    document.getElementById("1_1").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "2":
                     console.log("2");
                    document.getElementById("1_2").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "3":
                     console.log("3");
                    document.getElementById("1_s").innerHTML+=timetable[i].name + "<br>";
                    break;
                    case "4":
                     console.log("4");
                    document.getElementById("1_w").innerHTML+=timetable[i].name + "<br>";
                    break;
            }
        }
   }
        }
}
//검색

function myFunction(){
     var input, filter, table, tbody, tr, td, i, k, str;
  input = document.getElementById("search_inp");
  filter = input.value;
  table = document.getElementById("tab");
  tbody = table.getElementsByTagName("tbody");
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