# CHEFAPI

## Overview
AI Recipe Recommender is a smart application that suggests recipes based on ingredients provided by the user. Using AI, the app analyzes the given ingredients and finds the best recipes, helping users make the most out of their available ingredients.

## Features
- **AI-Powered Recipe Recommendations**: Get personalized recipe suggestions based on available ingredients.
- **Ingredient-Based Search**: Input available ingredients, and the AI will suggest the best matching recipes.
- **Step-by-Step Instructions**: Each recommended recipe comes with detailed cooking instructions.
- **Nutritional Information**: Provides estimated nutritional values for suggested recipes.
- **User-Friendly Interface**: Simple and intuitive design for easy recipe discovery.

## Tech Stack
- **Frontend**: React 
- **Backend**: Node.js with Express (or Flask/Django)
- **AI Model**: HuggingFace model

## Installation
### Prerequisites
- Node.js installed
- API keys for AI model (if applicable)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/polkboban/chefskiss-api.git
   cd chefskiss-api
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
4. Start the application:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open the app in your browser:
   ```sh
   http://localhost:3000
   ```

## Usage
1. Enter available ingredients in the input field.
2. Click "Find Recipes" to get AI-generated recipe suggestions.
3. Choose a recipe and follow the provided steps.



