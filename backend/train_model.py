import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# 🔹 Load dataset from JSON
file_path = "pcos_final_dataset_fixed.json"  
df = pd.read_json(file_path)

# 🔹 Drop unnecessary columns
df.drop(columns=["Sl. No", "Patient File No.", ""], inplace=True, errors="ignore")

# 🔹 Convert problematic columns to numeric
df["Marraige Status (Yrs)"] = pd.to_numeric(df["Marraige Status (Yrs)"], errors="coerce")
df["II    beta-HCG(mIU/mL)"] = pd.to_numeric(df["II    beta-HCG(mIU/mL)"], errors="coerce")
df["AMH(ng/mL)"] = pd.to_numeric(df["AMH(ng/mL)"], errors="coerce")

# 🔹 Convert categorical Y/N columns to 0/1
yn_columns = ["Pregnant(Y/N)", "Weight gain(Y/N)", "hair growth(Y/N)", "Skin darkening (Y/N)",
              "Hair loss(Y/N)", "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)"]
df[yn_columns] = df[yn_columns].replace({"Y": 1, "N": 0, "Yes": 1, "No": 0}).astype(int)

# 🔹 Fill missing values with median
df.fillna(df.median(), inplace=True)

# 🔹 Define features & target variable
top_features = ["Follicle No. (R)", "Follicle No. (L)", "Skin darkening (Y/N)", "hair growth(Y/N)",
                "Weight gain(Y/N)", "Cycle(R/I)", "Fast food (Y/N)", "Pimples(Y/N)", "AMH(ng/mL)", "Weight (Kg)"]
X = df[top_features]
y = df["PCOS (Y/N)"]

# 🔹 Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# 🔹 Train model (Random Forest or Logistic Regression)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 🔹 Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")

# 🔹 Save the trained model
joblib.dump(model, "pcos_model.pkl")
print("Model saved as 'pcos_model.pkl'")
