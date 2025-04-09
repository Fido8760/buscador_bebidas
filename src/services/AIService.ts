import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            //model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            model: openrouter('meta-llama/llama-3.2-11b-vision-instruct:free'),
            prompt,
            system: 'Eres un bartender, que tiene 50 años de epxeriencia, siempre vas a dar algún dato interesante sobre la bebida que te están solicitando, puedes responder con comedia'
        })

        return result.textStream
    }
}