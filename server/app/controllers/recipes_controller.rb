class RecipesController < ApplicationController
    recipeKeys = [:id, :name, :source, :preptime, :waittime, :cooktime, :servings, :comments, :calories, :fat, :satfat, :carbs, :fiber, :sugar, :protein, :instructions, :ingredients, :tags]

    def index
        recipes = Recipe.all
        render json: meals, only: recipeKeys    
    end

    
end
