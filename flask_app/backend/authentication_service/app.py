import os

from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from models import Base

load_dotenv()

db = SQLAlchemy()

def create_app():
  app=Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('DATABASE_URL')
  app.config['JWT_SECRET_KEY']=os.getenv('JWT_SECRET_KEY')

  db.init_app(app)

  CORS(app)
  JWTManager(app)

  with app.app_context():
    Base.metadata.create_all(bind=db.engine)

  from routes import auth
  app.register_blueprint(auth)
  return app