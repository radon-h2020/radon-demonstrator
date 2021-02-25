FROM ubuntu:20.04
RUN apt update && apt install -y python3-venv python3-wheel python-wheel-common python3-pip && pip3 install opera boto3
WORKDIR /tmp/opera
ENV AWS_ACCESS_KEY_ID=accessid
ENV AWS_SECRET_ACCESS_KEY=secretacceskey