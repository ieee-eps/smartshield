from random import randint
from pydantic import BaseModel
import model_config

import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from typing import Dict
from fastapi import FastAPI

app = FastAPI()

def feature_engineering(data, integer_cols, float_cols, binary_cols, nominal_cols_one_hot=['proto', 'state', 'service'],
                        binary_col='attack_cat'):
    data_fe = data.copy()
    data_fe = pd.get_dummies(data_fe, columns=[col for col in nominal_cols_one_hot if col in data_fe.columns])

    if binary_col in data_fe.columns:
        le = LabelEncoder()
        data_fe[binary_col] = le.fit_transform(data_fe[binary_col])

    numeric_cols = integer_cols + float_cols
    numeric_cols_present = [col for col in numeric_cols if col in data_fe.columns]
    missing_cols = set(numeric_cols) - set(numeric_cols_present)

    if numeric_cols_present:
        scaler = StandardScaler()
        data_fe[numeric_cols_present] = scaler.fit_transform(data_fe[numeric_cols_present])

    if 'Stime' in data_fe.columns:
        data_fe['Stime_hour'] = pd.to_datetime(data_fe['Stime'], unit='s').dt.hour
        data_fe['Stime_day'] = pd.to_datetime(data_fe['Stime'], unit='s').dt.day
        data_fe.drop(columns=['Stime'], inplace=True)

    if 'Ltime' in data_fe.columns:
        data_fe['Ltime_hour'] = pd.to_datetime(data_fe['Ltime'], unit='s').dt.hour
        data_fe['Ltime_day'] = pd.to_datetime(data_fe['Ltime'], unit='s').dt.day
        data_fe.drop(columns=['Ltime'], inplace=True)

    return data_fe


def prepare(data, model_name):
    res_data = feature_engineering(
        data,
        model_config.get_integer_cols(model_name),
        model_config.get_float_cols(model_name),
        model_config.get_binary_cols(model_name)
    )

    model = model_config.get_model(model_name)

    if hasattr(model, 'feature_names_in_'):
        expected_features = model.feature_names_in_
    else:
        # If not available, use a manual list of final features or save this info during training.
        expected_features = model_config.get_default_expected_features(model_name)

    for feature in expected_features:
        if feature not in res_data.columns:
            res_data = res_data.assign(**{feature: 0})

    aligned = res_data[expected_features]

    return aligned


def predict(raw, model_name):

    data = pd.DataFrame.from_dict({x: [y] for x, y in raw.items()})
    model = model_config.get_model(model_name)

    return int(model.predict(prepare(data, model_name)))


class DataDict(BaseModel):
    data: dict


@app.get("/")
def read_root():
    return {
        "status": 200,
        "success": True,
        "message": "Welcome to the IEEE EPS SB CS TSYP Challenge API !",
        "did_u_know": [
            "we love IEEE",
            "Our chair is the best, but which chair ?",
            "Someone dropped a pizza on the floor",
            "We are the best IEEE SB in the multiverse",
            "WE... ARE... GROOT...",
            "Whoops, we just love chocolate...",
            "WHO ARE WE ?! IEEE !"
        ][randint(0, 6)]
    }


@app.get("/listmodels")
def list_models_api():
    return {
        "status": 200,
        "success": True,
        "models": model_config.get_loaded_models()
    }


@app.post("/{model}/predict")
async def predict_api_post(model: str, payload: DataDict):
    data = payload.data

    if not model_config.exists_model(model):
        return {
            "status": 400,
            "success": False,
            "error": "Model not found. To see available models, GET /listmodels",
            "error_code": "unknown_model"
        }
    try:
        return {
            "status": 200,
            "success": True,
            "prediction": predict(data, model),
        }
    except Exception as e:
        return {
            "status": 400,
            "success": False,
            "error": str(e),
            "error_code": "prediction_error"
        }