from flask_cors import CORS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from .models import Base

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

  return app