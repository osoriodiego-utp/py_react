from flask import Flask, jsonify, request
from flask_cors import CORS
from database import create_tables
import controller


app = Flask(__name__)
CORS(app)


@app.route("/company", methods=["POST"])
def create_company():
    payload = request.get_json()
    print(payload)
    name = payload["name"]
    address = payload["address"]
    nit = payload["nit"]
    phone = payload["phone"]
    result = controller.Create_company(name, address, nit, phone)
    return jsonify(result)


@app.route('/companies', methods=["GET"])
def get_companies():
    companies = controller.Get_companies()
    return jsonify(companies)


@app.route("/company/<id>", methods=["GET"])
def get_company_by_id(id):
    company = controller.Get_by_id(id)
    return jsonify(company)


@app.route("/company", methods=["PUT"])
def update_company():
    payload = request.get_json()
    id = payload["id"]
    name = payload["name"]
    address = payload["address"]
    nit = payload["nit"]
    phone = payload["phone"]
    result = controller.Update_company(id, name, address, nit, phone)
    return jsonify(result)


@app.route("/company/<id>", methods=["DELETE"])
def delete_company(id):
    result = controller.Delete_company(id)
    return jsonify(result)


# Enable CORS after each request
# @app.after_request
# def after_request(response):
#     response.headers["Access-Control-Allow-Origin"] = "*"
#     response.headers["Access-Control-Allow-Credentials"] = "true"
#     response.headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS"
#     response.headers[
#         "Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
#     return response


if __name__ == "__main__":
    create_tables()
    app.run(host='0.0.0.0', port=8000, debug=True)
