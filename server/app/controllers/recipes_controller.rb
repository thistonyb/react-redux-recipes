class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes, only: recipeKeys    
    end

    def tag
        recipes = Recipe.all
        filteredRecipes = recipes.select do |recipe|
            recipe[:tags].include? params[:tag]
        end
        render json: filteredRecipes, only: [:id, :name, :tags]  
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe, only: [:id, :name, :source, :preptime, :waittime, :cooktime, :servings, :comments, :calories, :fat, :satfat, :carbs, :fiber, :sugar, :protein, :instructions, :ingredients, :tags]
    end
end
