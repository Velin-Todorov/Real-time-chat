import os

from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy

from models import Base

load_dotenv()

db = SQLAlchemy()

def create_app():
  app=Flask(__name__)
  # app.config.from_object(DevConfig())
  app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('DATABASE_URL')
  db.init_app(app)

  CORS(app)

  with app.app_context():
    Base.metadata.create_all(bind=db.engine)

  from routes import auth
  app.register_blueprint(auth)
  return app