const OpenAI = require("openai")

client = new OpenAI({
    apiKey: "", // get GATEROUTER_API_KEY from gaterouter.ai (API Key)
    baseURL: "https://api.gaterouter.ai/openai/v1",
})

async function main() {
    completion = await client.chat.completions.create({
        model: "auto",
        messages: [
            {"role": "system", "content": "system prompt"},
            {"role": "user", "content": "how are you?"}
        ],
    })
    // get the response from LLM (role=assistant)
    console.log(completion.choices[0].message.content)
}

main()
