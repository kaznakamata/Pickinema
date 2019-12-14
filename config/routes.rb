Rails.application.routes.draw do
  devise_for :users
  root to: 'reviews#index'
  resources :reviews, except: :index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
