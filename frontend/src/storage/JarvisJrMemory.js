// my plan for jarvis jr memory storage:

// this will be localized storage for the whole app. i plan to make it a stack structure to hold the current chat context where any new mssgs are pushed into it.

// clearing the chat could also just be a simple stack.length = 0; operation so deletion will be easy.

// users will have the opportunity to save the chat context which will then be stored in the localized storage ( could be here or in ls ) or it just wont be saved at all once you refresh the page or leave it.

// i dont want to hold any chat context in the backend at all. This makes my life easier and more private for myself and family using jarvis jr.

// ill also limit the size of chat context window for the llm to process to avoid overloading it so most likely the last 5-10 messages only will be sent to llm for context.

// ill also limit the total num of chats to 10 max in the stack to avoid overloading local storage. I dont usually use chat gpt to store my chats so this should be fine for myself anyway.

// i aint doing this today i just destroyed my chest in gym. benched 2 plates clean for first time. gonna rest now and eat chicken breast.