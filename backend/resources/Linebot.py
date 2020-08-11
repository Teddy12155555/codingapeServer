from flask import request, jsonify, json
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from datetime import datetime


class LineBot(Resource):
    def __init__(self, **kwargs):
        #self.auth = kwargs['auth']
        self.db = kwargs['db']

    def post(self, type_):
        # dayoff POST method
        if type_ == "dayoff":
            name = request.get_json()['name']
            date = request.get_json()['date']
            course = request.get_json()['course']
            reason = request.get_json()['reason']
            phone = request.get_json()['phone']
            sql_cmd = "INSERT INTO day_off(name, date, course, reason, phone) VALUES ('" + str(
                name) + "', '" + str(date) + "', '" + str(course) + "', '" + str(reason) + "','" + str(phone) + "')"
            rv = self.db.engine.execute(sql_cmd)
            return 'OK'

    def get(self, type_):
        # dayoff GET method
        if type_ == "dayoff":
            sql_cmd = "SELECT * FROM `day_off`"
            rv = self.db.engine.execute(sql_cmd).fetchall()

            if rv != None:
                result = []
                for obj in rv:
                    print(obj)
                    name, date, course, reason, phone = obj['name'], obj[
                        'date'], obj['course'], obj['reason'], obj['phone']
                    result.append({
                        'name': name,
                        'date': date,
                        'course': course,
                        'reason': reason,
                        'phone': phone
                    })

                return jsonify({'result': result, 'status': 'Query Successful'})
            else:
                return 'Query Fail', 404


class WebHook(Resource):
    def post(self):
        return 200
