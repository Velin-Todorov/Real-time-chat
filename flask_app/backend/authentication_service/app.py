from authentication_service import create_app
from .routes import auth

app = create_app()
app.register_blueprint(auth)

