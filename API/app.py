# save this as app.py
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/nepal")
def nepal():
    return "Jay, Nepal!"

@app.route('/<int:stu_id>')
def post(stu_id):
    if stu_id == 1:
        dict= {'name':'Ramesh Tiwari', 'age':'24'}
        return dict
    else:
        return 'No Data.'
    
import requests
@app.route('/news')
def news():
    data = requests.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6b624cdaee814e87a8a26e3dd171492f')
    return data.json()
    

    
   