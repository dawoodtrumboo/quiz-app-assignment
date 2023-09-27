from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app)
# Store the quiz data in-memory (replace with a database for production)
quiz_data = []

@app.route('/api/save_quiz', methods=['POST'])
def save_quiz():
    data = request.get_json()
    quiz_data.append(data)
    return jsonify({"message": "Quiz saved successfully"})

@app.route('/api/get_quizzes', methods=['GET'])
def get_quizzes():
    return jsonify(quiz_data)

if __name__ == '__main__':
    app.run(debug=True)
