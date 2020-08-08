from flask import request, jsonify, json
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from datetime import datetime


class LineBot(Resource):
    def __init__(self, **kwargs):
        self.auth = kwargs['auth']


class WebHook(Resource):
    def post(self):
        return 200
