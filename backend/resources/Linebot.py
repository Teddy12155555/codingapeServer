from flask import request, jsonify, json
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from datetime import datetime
import urllib


class LineBot(Resource):
    def __init__(self, **kwargs):
        # self.auth = kwargs['auth']
        self.db = kwargs['db']

    def post(self, type_):
        # dayoff POST method
        if type_ == "dayoff":
            name = request.get_json()['name']
            date = request.get_json()['date']
            course = request.get_json()['course']
            course_location = request.get_json()['course_location']
            reason = request.get_json()['reason']
            phone = request.get_json()['phone']
            sql_cmd = "INSERT INTO day_off(name, date, course,course_location, reason, phone) VALUES ('" + str(
                name) + "', '" + str(date) + "', '" + str(course) + "', '" + str(course_location) + "', '" + str(reason) + "','" + str(phone) + "')"
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
                    name, date, course, course_location, reason, phone = obj['name'], obj[
                        'date'], obj['course'], obj['course_location'], obj['reason'], obj['phone']
                    result.append({
                        'name': name,
                        'date': date,
                        'course': course,
                        'course_location': course_location,
                        'reason': reason,
                        'phone': phone
                    })

                return jsonify({'result': result, 'status': 'Query Successful'})
            else:
                return 'Query Fail', 404
        elif '%@cat$on' in type_:
            # Course Location Page
            try:
                location = type_.split('&', 1)[1]
            except:
                return 'Wrong Url :(', 404

            # print(urllib.quote("總部教室"))
            return 'OK'
        else:
            print('fail')


class WebHook(Resource):
    def post(self):
        return 200
