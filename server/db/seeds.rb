# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

recipes = JSON.parse(File.read('db/db-recipes.json'))
recipes.keys.each do |key|
    recipe = recipes[key]
    tags = recipe["tags"].join(",")
    ingredients = recipe["ingredients"].join(",")
    Recipe.create!({ name: recipe["name"], source: recipe["source"], preptime: recipe["preptime"], waittime: recipe["waittime"], cooktime: recipe["cooktime"], servings: recipe["servings"], comments: recipe["comments"], calories: recipe["calories"], fat: recipe["fat"], satfat: recipe["satfat"], carbs: recipe["carbs"], fiber: recipe["fiber"], sugar: recipe["sugar"], protein: recipe["protein"], instructions: recipe["instructions"], tags: tags, ingredients: ingredients })
end