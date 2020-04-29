class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes, only: [:id, :name, :source, :preptime, :waittime, :cooktime, :servings, :comments, :calories, :fat, :satfat, :carbs, :fiber, :sugar, :protein, :instructions, :ingredients, :tags]    
    end
#Get recipes by tag.
    def tag
        recipes = Recipe.all
        filteredRecipes = recipes.select do |recipe|
            recipe[:tags].include? params[:tag]
        end
        render json: filteredRecipes, only: [:id, :name, :tags]  
    end
#Get single recipe.
    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: {id: recipe.id, name: recipe.name, source: recipe.source, preptime: recipe.preptime, waittime: recipe.waittime, cooktime: recipe.cooktime, servings: recipe.servings, comments: recipe.comments, calories: recipe.calories, fat: recipe.fat, satfat: recipe.satfat, carbs: recipe.carbs, fiber: recipe.fiber, sugar: recipe.sugar, protein: recipe.protein, instructions: recipe.instructions, ingredients: recipe.ingredients, tags: recipe.tags, reviews: recipe.reviews}
    end
end
