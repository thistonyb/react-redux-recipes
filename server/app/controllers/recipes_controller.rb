class RecipesController < ApplicationController
    recipeKeys = [:id, :name, :source, :preptime, :waittime, :cooktime, :servings, :comments, :calories, :fat, :satfat, :carbs, :fiber, :sugar, :protein, :instructions, :ingredients, :tags]

    def index
        recipes = Recipe.all
        render json: recipes, only: recipeKeys    
    end

    def tag
        recipes = Recipe.all
        filteredRecipes = recipes.select do |recipe|
            recipe[:tags].include? params[:tag]
        end
        render json: filteredRecipes, only: recipeKeys  
    end

    
end
