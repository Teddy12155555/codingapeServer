"""
Name : CodingApe inner server
Verison : 1.0.0
"""
from flask_restful import Api
from flask import Flask, render_template, g, session, request, jsonify, json
from flask_bcrypt import (Bcrypt,
                          check_password_hash,
                          generate_password_hash,
                          PY3)
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

# custom
from backend import CREAT_SERVER
from backend.resources.Users import Users
from backend.resources.Linebot import WebHook
from backend.resources.Linebot import LineBot
from backend.resources.Zoho import Zoho
"""
Create the Server
"""
app = CREAT_SERVER()
##############

# db settings
db = SQLAlchemy()
db.init_app(app)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
api = Api(app)

# Apis
api.add_resource(Users, "/user/<string:method>",
                 resource_class_kwargs={'db': db, 'bcrypt': bcrypt})
api.add_resource(WebHook, "/linebot/webhook")
api.add_resource(LineBot, "/linebot/<string:type_>",
                 resource_class_kwargs={'db': db})
api.add_resource(Zoho, "/zoho/<string:type_>")


# debug Api
@app.route("/test", methods=['GET'])
def test():
    return 'OK'


@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')


@app.route("/home", methods=['GET'])
def index2():
    return render_template('index.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
    db.create_all()
