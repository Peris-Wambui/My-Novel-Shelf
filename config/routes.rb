Rails.application.routes.draw do
  resources :bookworms
  # resources :novels, ath: 'api/novels'
  resources :novels
  resources :bookworms, path: "api/bookworms"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

end
