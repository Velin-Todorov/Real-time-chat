from flask import Blueprint, request, jsonify, make_response
from models import UserModel
from werkzeug.security import generate_password_hash
from sqlalchemy import exc
from app import db

auth = Blueprint(

    "auth",
    __name__,
    url_prefix='/auth'
)

@auth.route("/login", methods=["POST", "GET"])
def login():
  # form_data = request.get_json()

  return make_response(jsonify({'message': 'hello'}), 200)


@auth.route("/register", methods=["POST"])
def register():
  form_data = request.get_json()
  first_name = form_data['firstName']
  last_name=form_data['lastName']
  email=form_data['email']
  password=form_data['password']

  user = UserModel(
    email=email,
    password=generate_password_hash(password)
  )

  try:
    db.session.add(user)
    db.session.commit()
  except exc.IntegrityError:
    db.session.rollback()
    return make_response(jsonify({'message': 'User with such email already exists'}), 400)

  return make_response(jsonify({'message': 'Response sent'}), 200)
