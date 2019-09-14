from flask import Flask, jsonify,request
from flask_cors import CORS

app=Flask('sy_server')
CORS(app)

global now_user,User
User = [{'id':'1644013','password':'0501','pastTimeTable':[],'timetableArr':[]}]
now_user = {'id':'','password':'','pastTimeTable':[],'timetableArr':[]}

@app.route('/login/<id>/<password>')
def user_confirm(id,password) :
    global now_user,User
    for x in User:
        if x['id'] == id:
            if x['password'] == password:
                now_user = x
                print(now_user)
                return 'success'
            else:
                return 'wrong'
    new = {'id':id,'password':password,'pastTimeTable':[],'timetableArr':[]}
    User.append(new)
    now_user = new
    return 'success'

@app.route('/load')
def user_set() :
    return jsonify(now_user)

@app.route('/del/<de>')
def del_data(de) :
    global now_user,User
    
    count = 0
    count1 = 0
    k=0
    for i in now_user['pastTimeTable'] : 
        if i['name'] == de:
            count +=1
    
    while k ==0 :
        for t in now_user['pastTimeTable'] : 
            if t['name'] == de:
                now_user['pastTimeTable'].remove(t)
                count1 +=1
            if count1 == count :
                k =1
    print( now_user['pastTimeTable'])
                
    return jsonify(now_user)

@app.route('/save/<g>/<s>/<n>/<cr>/<ca>/<en>')
def save(g,s,n,cr,ca,en) :
    global now_user
    now_user['pastTimeTable'].append({
        'grade':g,
        'semester':s,
        'name':n,
        'credit':cr,
        'category':ca,
        'english':en
    })
    print( now_user['pastTimeTable'])
    print(now_user)
    return jsonify(now_user)

@app.route('/save/<g>/<s>/<n>/<cr>/<ca>/<en>')
def save2(g,s,n,cr,ca,en) :
    global now_user
    now_user['timetableArr'].append({
        'grade':g,
        'semester':s,
        'name':n,
        'credit':cr,
        'category':ca,
        'english':en
    })
    print( now_user['pastTimeTable'])
    print(now_user)
    return jsonify(now_user)

@app.route('/plansave',methods=['POST'])
def plansave():
    print("plansave")
    k= request.form.to_dict()
    print(k)
    print(request.form)
    return "ok"
    

app.run()