from os import getenv
from app import create_app


def main():
  host = getenv("SERVICE_HOST", "0.0.0.0")
  port = getenv("SERVICE_PORT", 5000)

  app = create_app()
  app.run(
     host=host,
     port=port,
     debug=True
  )

if __name__ == "__main__":
    main()
