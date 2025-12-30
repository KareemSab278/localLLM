import requests
# this file is not in use anymore but keeping it for reference

question = input("Input Query: ").strip()
while not question:
    question = input("Input Query: ").strip()

try:
    response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "qwen2.5-coder:7b",
            "stream": False,
            "messages": [
                {"role": "system", "content": "You are a precise coding assistant. Give the solution and a brief explanation."},
                {"role": "user", "content": question}
            ]
        },
        timeout=60
    )
    response.raise_for_status()
    print(response.json()["message"]["content"])

except requests.exceptions.RequestException as e:
    print("Request failed:", e)
except KeyError:
    print("Unexpected response format:", response.text)
