import { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string
    isGenereting: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: '',
    isGenereting: false,
    generateRecipe: async (prompt) => {
        set({recipe: '', isGenereting: true})
        const data = await AIService.generateRecipe(prompt)

        for await (const textPart of data) {
            set((state => ({
                recipe: state.recipe + textPart
            })))
        }
        set({isGenereting: false})
    }
})