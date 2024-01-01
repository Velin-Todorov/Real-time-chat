FROM python:3.11 as initial_install

WORKDIR /backend
COPY . /backend/

FROM initial_install as initial_install_1

WORKDIR /backend/authentication_service

RUN pip install -r requirements.txt
ENV FLASK_APP=app.py
CMD [ "flask", "run", "--debug"]
