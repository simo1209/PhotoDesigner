from flask import Flask, render_template, session, request, session, redirect
from dbconnect import connection
from passlib.hash import sha256_crypt as sha256
from random import randint as rand
import re
import io

c, conn = connection()

app = Flask(__name__)
app.secret_key = 'kris12:)'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register/<int:error>')
@app.route('/register/', methods=["GET", "POST"])
def register(error = None):
    if request.method == "GET":
        return render_template('register.html', error = error)
    else:
        uname = request.form.get('uname')
        email = request.form.get('email')
        passwd = request.form.get('passwd')
        conf_passwd = request.form.get('confirm-pass')

        reg_email = re.search(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email)

        if reg_email != email:
            return redirect('/register/4')

        x = c.execute('select * from users where email = "%s";' % (email))
        if int(x) > 0:
            return redirect('/register/2')

        print(passwd)
        print(conf_passwd)

        if passwd != conf_passwd:
            return redirect('/register/3')

        passwd = sha256.encrypt(passwd)

        x = c.execute('insert into users (uname, email, passwd) values ("%s", "%s", "%s");' % (uname, email, passwd))
        conn.commit()
        return redirect('/')

@app.route('/login/<int:error>')
@app.route('/login/', methods=['GET', 'POST'])
def login(error = None):
    if request.method == "GET":
        return render_template('login.html', error=error)
    else:
        email = request.form.get('email')
        passwd = request.form.get('passwd')
        x = c.execute('select passwd from users where email = "%s"' % email)

        #if the user inputs name
        if int(x) == 0:
            x = c.execute('select passwd from users where uname = "%s"' % email)

        #if it doesn't find a record in the database
        if int(x) == 0:
            return redirect('/login/3')

        real_passwd = c.fetchone()[0]

        if not sha256.verify(passwd, real_passwd):
            return redirect('/login/2')

        x = c.execute('select uid from users where email = "%s";' % (email))
        uid  = c.fetchone()[0]
        session['loggedIn'] = True
        session['uid'] = uid

        return redirect('/profile/')

@app.route('/profile/')
def profile(pics = None):
    try:
        if session['loggedIn']:
            return render_template('profile.html', pics = pics)
        else:
            return redirect('/login/')
    except KeyError:
        return redirect('/login/')

@app.route('/edit/', methods=['GET', 'POST'])
def edit():
    if request.method == 'GET':
        return render_template('edit.html')
    else:
        #getting the form data
        '''
        name = request.form.get('name')
        description = request.form.get('desc')
        '''
        #saving the image
        try:
            x = c.execute('select id from pictures order by id desc limit 0, 1;')
            img_id = c.fetchone()[0] + 1
        except:
            img_id = 1
        img_code = request.data
        img = open('/static/img/%s.png' % img_id, 'wb')
        img.write(img_code.decode('base64'))
        img.close()

        #database management
        c.execute('insert into pictures (authorId, name, description) values (%s, "%s", "%s");' % (img_id, name, description))
        conn.commit()
        return "True"

@app.route('/about_creators')
def about():
    return render_template('about.html')

@app.route('/save', methods=["POST"])
def save():
    path = '/home/kris/Desktop/PhotoDesigner/server/static/img/'
    try:
        x = c.execute('select id from pictures order by id desc limit 0, 1;')
        img_id = c.fetchone()[0] + 1
    except:
        img_id = 1
    img_code = request.data
    with io.FileIO('%s%s.png' % (path, img_id), "wb") as img:
        img.write(img_code.decode('base64'))
        img.close()

    #database management
    c.execute('insert into pictures (authorId, name, description) values (%s, "%s", "%s");' % (img_id, 'test', 'test'))
    conn.commit()
    return "True"

if __name__ == "__main__":
    app.run(host = '0.0.0.0')
