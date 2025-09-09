from fastapi import FastAPI
import pandas as pd

app = FastAPI()

@app.get("/plan/simple")
def simple_plan():
    df = pd.read_csv("../data/daily_status_2025-09-09.csv")
    plan = []
    for _, r in df.iterrows():
        if pd.isna(r['telecom_cert']) or r['telecom_cert'] == "":
            plan.append({"train_id": r['train_id'], "status": "Maintenance"})
        else:
            plan.append({"train_id": r['train_id'], "status": "Ready"})
    return {"plan": plan}
