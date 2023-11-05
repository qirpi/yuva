class ShoppingItem < ApplicationRecord
  belongs_to :shopping_category
  has_many :recipe_items
  has_many :recipes, through: :recipe_items

  validates :stock, numericality: { greater_than_or_equal_to: 0 }

  scope :cooking_ingredients, -> { where(shopping_category_id: 1) }
end
