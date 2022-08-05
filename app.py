from flask import Flask, render_template, url_for, request, redirect,session,flash
from flask.globals import request
from werkzeug.utils import redirect
from datetime import datetime
import requests
import json
import unicodedata
app = Flask(__name__)


@app.route("/login", methods=["GET","POST"])
def login_user():
    if request.method == 'POST':

        print(request.form)
        data = {
            'email': request.form.get('email'),
            'password': request.form.get('password'),
        }
        try:
            r = requests.post('https://sasu-auth-project.herokuapp.com/users/login',json=data)
            print(r.status_code)

            if r.status_code == 200:
                data = r.json()
                print(data.get('token'))
                session['user_token'] = data.get('token')
                return redirect(url_for('index'))    
        except Exception as e:
            print(e)
        # pass
        

    return render_template('reg-log.html')


@app.route("/register-login", methods=["GET"])
def reg_login():
    return render_template("reg-log.html")


@app.route("/",methods=["GET"])
def index():
    if 'user_token' in session:
        try:
            user_token = session['user_token']
            r = requests.get('https://sasu-auth-project.herokuapp.com/users/me',headers={'Content-Type':'application/json',
               'Authorization': 'Bearer {}'.format(user_token)})
            print(type(r.status_code))
            if r.status_code == 200:
                data = r.json()
                username = data.get('name')
                return render_template("index.html",name=username)
            elif r.status_code == 401:
                return redirect(url_for('login_user'))
        except Exception as e:
            
            
            return redirect(url_for('create_a_user'))
    else:

        return render_template('reg-log.html')

@app.route('/logout',methods=["GET","POST"])
def logout_user():
    if 'user_token' in session:
        try:
            user_token = session['user_token']
            r = requests.post('https://sasu-auth-project.herokuapp.com/users/logout',headers={'Content-Type':'application/json',
               'Authorization': 'Bearer {}'.format(user_token)})
            print(type(r.status_code))
            if r.status_code == 200:
                session.pop('user_token')
                flash("Logout successful",category='success')
                return redirect(url_for('reg_login'))
            elif r.status_code == 401:
                return redirect(url_for('login_user'))
        except Exception as e:
            return redirect(url_for('create_a_user'))
    else:
        return render_template('reg-log.html')





@app.route("/register", methods=["GET", "POST"])
def create_a_user():
    if request.method == "POST":
        print(request.form.get('email'))
        data = {
            'email': request.form.get('email'),
            'password': request.form.get('password1'),
            'name' : request.form.get('full_name')
        }
        try:
            r = requests.post('https://sasu-auth-project.herokuapp.com/users',json=data)
            print(r.status_code)
            print(r.json())
            if r.status_code == 201:
                flash("user created successfuly",category='success')
                return redirect(url_for('login_user'))
            else:
                flash("Couldnt create user",category='warning')
                return redirect(url_for('create_a_user'))
        except Exception as e:
            print(e)
        # pass
    return render_template('reg-log.html')





if __name__ == "__main__":
    app.secret_key = 'mysecret'
    app.run(debug=False, port=8000)