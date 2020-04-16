Rails.application.routes.draw do
  resources :reviews
  resources :recipes

  get '/recipes_by_tag/:tag', to: 'recipes#tag'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
