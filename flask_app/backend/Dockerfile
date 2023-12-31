FROM python:3.11

WORKDIR /authentication_service
COPY . /authentication_service

RUN pip install -r requirements.txt
EXPOSE 5000
ENV FLASK_APP=app.py
CMD [ "flask", "run", "--debug"]
