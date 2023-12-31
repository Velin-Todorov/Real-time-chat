from flask_cors import CORS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import DevConfig

db = SQLAlchemy()

def create_app():
  app=Flask(__name__)
  app.config.from_object(DevConfig())
  db.init_app(app)

  CORS(app)

  with app.app_context():
    db.create_all()

  return app