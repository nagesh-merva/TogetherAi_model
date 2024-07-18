import os
from flask_cors import CORS
from together import Together
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

CORS(app, supports_credentials=True, allow_headers="*", origins="*", methods=["OPTIONS", "POST"])

# os.environ['TOGETHER_API_KEY'] = 'f8c8fa4fd70a01169d90a949a82246470d2d0e5620e80f026b4ea7453764598e'

# client = Together(api_key=os.environ.get('TOGETHER_API_KEY'))
client = Together(api_key="f8c8fa4fd70a01169d90a949a82246470d2d0e5620e80f026b4ea7453764598e")

@app.route('/', methods=['POST'])
def index():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'success', 'message': 'CORS preflight request handled successfully'}), 200
    response_text = ""
    
    if request.is_json:
        data = request.json
        prompt = data.get('prompt', '')
    
        response = client.chat.completions.create(
            model="meta-llama/Llama-3-8b-chat-hf",
            messages=[{"role": "user", "content": f"{prompt}"}],
        )
        
        if response.choices:
            response_text = response.choices[0].message.content
        else:
            response_text = "No response generated"
        
        return jsonify({'status': 'success', 'message': response_text}), 200
    else:
        return jsonify({'status': 'error', 'message': 'Invalid JSON input'}), 400

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
