from flask import request, jsonify, json
from flask_restful import Resource
from flask_jwt_extended import create_access_token
from datetime import datetime
import requests
import json


ZOHO_CLIENT_ID = "1000.G05HVW5JO6O43GLQKAOP282YEUQK5M"
ZOHO_CLIENT_SECRET = "e313094396ee34e3d8c1e1e6707dcf3f2a3fb1e705"


class BearerAuth(requests.auth.AuthBase):
    def __init__(self, token):
        self.token = token

    def __call__(self, r):
        r.headers["authorization"] = "Bearer " + self.token
        return r


class Zoho(Resource):
    def __init__(self, **kwargs):
        pass
        # self.auth = kwargs['auth']
        #self.db = kwargs['db']

    def get(self, type_):
        if "accesstoken&code=" in type_:
            s = type_[17:]

            postdata = {"grant_type": "authorization_code",
                        "client_id": ZOHO_CLIENT_ID, "client_secret": ZOHO_CLIENT_SECRET, "redirect_uri": "https://www.codingapeschool.com", "code": str(s)}

            response = requests.post("https://accounts.zoho.com/oauth/v2/token",
                                     data=postdata, auth=BearerAuth(s))

            result = response.json()

            try:
                token = result['access_token']
                return token
            except:
                return 'Grant Code Error'
        return 'OK'
