from flask import request, jsonify, json
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from datetime import datetime


class Users (Resource):
    def __init__(self, **kwargs):
        self.db = kwargs['db']
        self.bcrypt = kwargs['bcrypt']

    def post(self, method):
        if method == "login":
            email = request.get_json()['email']
            password = request.get_json()['password']
            sql_cmd = "SELECT * FROM users where email = '" + str(email) + "'"
            rv = self.db.engine.execute(sql_cmd).fetchone()
            if rv == None:
                return jsonify({"error": "User not exist"})

            if self.bcrypt.check_password_hash(rv['password'], password):
                access_token = create_access_token(
                    identity={'name': rv['name'], 'email': rv['email']})
                result = access_token
            else:
                result = jsonify({"error": "Invalid username and password"})
            return result
        elif method == "register":
            # Auth check
            try:
                SECRET_CODE = request.get_json()['secret']
                name = request.get_json()['name']
                email = request.get_json()['email']
            except:
                return jsonify({"error": "Json Data error"})

            password = self.bcrypt.generate_password_hash(
                request.get_json()['password']).decode('utf-8')
            created = datetime.utcnow()
            token = 0
            sql_cmd = "INSERT INTO users(name, email, password, created, token) VALUES ('" + str(
                name) + "', '" + str(email) + "', '" + str(password) + "', '" + str(created) + "','" + str(token) + "')"

            if(str(SECRET_CODE) == "Teddy"):
                rv = self.db.engine.execute(sql_cmd)
                result = {
                    'name': name,
                    'email': email,
                    'password': password,
                    'time': created,
                    'token': token
                }
                return jsonify({'result': result})
            else:
                return jsonify({"error": "Auth error, You can't create user!"}), 403
