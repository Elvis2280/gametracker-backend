FROM python:3.9-alpine3.13
MAINTAINER "erudev.page"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt
COPY ./app /app
WORKDIR /app
EXPOSE 8080

ARG DEV=false
RUN python -m venv /py && \ 
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    if [ "$DEV" = "true" ]; then \
        /py/bin/pip install -r /tmp/requirements.dev.txt ; \
    fi && \
    rm -rf /tmp/requirements.txt && \
    adduser \
    --disabled-password \
    --no-create-home \
    erudev-user

ENV PATH="/py/bin:$PATH"

USER erudev-user