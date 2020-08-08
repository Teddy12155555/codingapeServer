from flask import Flask, render_template, g, session
from flask_cors import CORS


def CREAT_SERVER():
    app = Flask(__name__, template_folder="Templates",
                static_folder="static", static_url_path="/backend/static")
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:@localhost:3306/flask"
    app.config['JWT_SECRET_KEY'] = 'secret'
    CORS(app)
    return app
