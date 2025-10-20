import { Archetype } from "../types/quiz";

export const archetypes: Record<string, Archetype> = {
  therapist: {
    id: "therapist",
    name: "The Velvet Therapist",
    title: "For the overthinker who needs gentle presence",
    description: "A wise friend who understands you without judgment. Quiet moments feel profound. Often found in sunny windowsills, contemplating the meaning of existence.",
    traits: ["Calm", "Intuitive", "Empathetic", "Patient listener"],
    idealFor: ["Anxiety sufferers", "Burnout recovery", "Deep thinkers"],
    vibe: "Quiet moments feel profound. Often found in sunny windowsills, contemplating the meaning of existence.",
    adoptionMotivation: "You deserve someone who makes silence feel safe.",
    color: "bg-orange-100"
  },
  chaos: {
    id: "chaos",
    name: "The Chaos Coordinator",
    title: "For the creative spirit who thrives on pandemonium",
    description: "Your personal comedic relief. Knocks things off counters as a form of art. Turns a boring Tuesday into an adventure. Never met a box they didn't want to explore.",
    traits: ["Playful", "Energetic", "Curious", "Problem-solver"],
    idealFor: ["Artists", "Entrepreneurs", "Restless minds"],
    vibe: "Turns boring Tuesday into adventure. Knocks things off counters as art. Zoomies at 3 AM are a love language.",
    adoptionMotivation: "Life's too short for boring—let's make some beautiful chaos together.",
    color: "bg-purple-100"
  },
  philosopher: {
    id: "philosopher",
    name: "The Midnight Philosopher",
    title: "For the introspective soul who comes alive after dark",
    description: "Doesn't need your attention but secretly appreciates when you show up. Operates on their own schedule. Shows affection on their own terms. Low-key brilliant.",
    traits: ["Independent", "Mysterious", "Wise", "Slightly aloof"],
    idealFor: ["Night owls", "Independent types", "Introverts"],
    vibe: "Appears mysteriously at 2 AM with golden eyes that see into your soul. Their loyalty runs deeper than words.",
    adoptionMotivation: "You don't need to be everything to everyone. Neither do I.",
    color: "bg-gray-800"
  },
  social: {
    id: "social",
    name: "The Social Butterfly",
    title: "For the connector who loves bringing joy to others",
    description: "Your personal cheerleader and cuddle companion. Greets you like you've been gone for years. Loves being involved in whatever you're doing. Genuinely thinks you're the best person ever.",
    traits: ["Affectionate", "Outgoing", "Charming", "Thrives on companionship"],
    idealFor: ["Extroverts", "People recovering from isolation", "Love-givers"],
    vibe: "Loud purrs, head bumps as greeting ritual. Always underfoot, always involved. Makes you feel like you're someone's favorite person.",
    adoptionMotivation: "Life is better when shared. Let's be best friends forever.",
    color: "bg-pink-100"
  },
  zen: {
    id: "zen",
    name: "The Zen Master",
    title: "For the peacekeeper who seeks balance and harmony",
    description: "The grounding force. Doesn't judge the chaos around them; they just find their peaceful corner. Makes meditation look easy. A silent reminder that it's okay to just... be.",
    traits: ["Calm", "Adaptable", "Observant", "Brings stillness"],
    idealFor: ["Sensitive souls", "Busy households", "Conflict-averse types"],
    vibe: "Serene expression, soft and round. Present but not demanding. Their calm presence is contagious.",
    adoptionMotivation: "In a chaotic world, let's create our own calm together.",
    color: "bg-blue-100"
  },
  muse: {
    id: "muse",
    name: "The Unconditional Muse",
    title: "For the underdog who's learning to believe in themselves",
    description: "Loves you despite your flaws. Makes you feel like you're someone's favorite person. Teaches forgiveness through example. The cat equivalent of a warm hug.",
    traits: ["Forgiving", "Enthusiastic", "Resilient", "Brings out the best in others"],
    idealFor: ["People rebuilding confidence", "Healing from setbacks", "Kind-hearted nurturers"],
    vibe: "Expressive eyes full of hope. Often has a unique story. Shows you that everyone deserves a second chance.",
    adoptionMotivation: "Everyone deserves someone who believes in them. I believe in you.",
    color: "bg-amber-100"
  }
};