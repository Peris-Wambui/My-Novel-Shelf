Rails.application.routes.draw do
  resources :bookworms
  resources :novels, path: 'api/novels'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

end
