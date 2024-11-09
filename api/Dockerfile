FROM python:3.12-slim

WORKDIR /api
COPY . .

RUN pip install fastapi uvicorn scikit-learn pandas numpy

EXPOSE 8080

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080"]
