the makeApiReq.js file basically calls localhost with the prompt and then returns the response from the llm.

response im expecting: "data?.content" from api:

```python
response.raise_for_status()
content = response.json()["message"]["content"]
return {"content": content}
```

useage eg:

```js
const sendPrompt = useSendPrompt();
sendPrompt("hey, im a promptstitute!");
```
