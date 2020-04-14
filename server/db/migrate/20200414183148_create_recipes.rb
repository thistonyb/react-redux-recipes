class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :id
      t.string :name
      t.string :source
      t.integer :preptime
      t.integer :waittime
      t.integer :cooktime
      t.integer :servings
      t.string :comments
      t.integer :calories
      t.integer :fat
      t.integer :satfat
      t.integer :carbs
      t.integer :fiber
      t.integer :sugar
      t.integer :protein
      t.string :instructions
      t.array :ingredients
      t.array :tags

      t.timestamps
    end
  end
end
