from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 🔹 Load the trained model
model = joblib.load("pcos_model.pkl")

# 🔹 Define feature names (must match training features)
top_features = ["Follicle No. (R)", "Follicle No. (L)", "Skin darkening (Y/N)", "hair growth(Y/N)",
                "Weight gain(Y/N)", "Cycle(R/I)", "Fast food (Y/N)", "Pimples(Y/N)", "AMH(ng/mL)", "Weight (Kg)"]

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # 🔹 Get JSON data from request
        data = request.json

        # 🔹 Convert to DataFrame
        user_df = pd.DataFrame([data], columns=top_features)

        # 🔹 Predict probability of PCOS
        prediction_prob = model.predict_proba(user_df)[0][1]

        # 🔹 Set diagnosis based on probability
        result = "No PCOS"
        if prediction_prob >= 0.75:
            result = "PCOS Detected"
        elif prediction_prob >= 0.6:
            result = "Borderline - At Risk"

        return jsonify({"prediction": result, "probability": round(prediction_prob, 2)})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
