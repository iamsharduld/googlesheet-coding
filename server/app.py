import pandas
import json
from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from flask_jwt import JWT, jwt_required, current_identity



app = Flask(__name__)
api = Api(app)
cors = CORS(app)


class SheetsAccess(Resource):

    # parser = reqparse.RequestParser()
    # parser.add_argument('price',
    #     type=float,
    #     required=True,
    #     help="This field cannot be left blank"
    # )
    def get(self):
        sheetId = request.args.get('sheetId')
        googleSheetId = sheetId
        worksheetName = 'Sheet1'
        URL = 'https://docs.google.com/spreadsheets/d/{0}/gviz/tq?tqx=out:csv&sheet={1}'.format(
            googleSheetId,
            worksheetName
        )

        data = pandas.read_csv(URL)
        formattedData = []
        avgPrice = 0
        sumPrice = 0

        for i in range(len(data.to_dict()['Car Name'])):
            formattedData.append({
                'name': data.to_dict()['Car Name'][i],
                'price': data.to_dict()['Car Price'][i],
            })
            prepro = (data.to_dict()['Car Price'][i].replace(',', ''))
            prepro = prepro.split('.')[0]
            sumPrice += (int(prepro))
        avgPrice = sumPrice / (len(data.to_dict()['Car Name']))
        
        return {
            'data': json.dumps(formattedData),
            'sumPrice': sumPrice,
            'avgPrice': avgPrice
            }




api.add_resource(SheetsAccess, '/getSheetData')

if __name__ == '__main__':
    app.run(debug=True)