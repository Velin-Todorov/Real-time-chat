from flask import Blueprint, request, jsonify, make_response
from models import UserModel, UserProfile
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import exc, select
from app import db
from flask_jwt_extended import create_access_token

auth = Blueprint(

    "auth",
    __name__,
    url_prefix='/auth'
)

def fetch_user(email):
  expr = select(UserModel).where(UserModel.email == email)
  result = db.session().scalars(expr).one_or_none()
  return result


@auth.route("/login", methods=["POST"])
def login():
  form_data = request.get_json()
  email=form_data['email']
  password=form_data['password']

  user = fetch_user(email)

  if user is None:
    return make_response(jsonify({'message': 'Such user does not exist'}), 400)

  if check_password_hash(user.password, password):
    access_token=create_access_token(identity=user.email)
    return make_response(jsonify({'message': f'User exists {access_token}'}), 200)


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

  profile = UserProfile(
    first_name=first_name,
    last_name=last_name,
    user_id=user.user_id
  )

  try:
    db.session.add(profile)
    db.session.commit()
  except:
    db.session.rollback()
    return make_response(jsonify({'message': 'Profile creation failed'}), 400)

  return make_response(jsonify({'message': 'Profile and User created'}), 200)
