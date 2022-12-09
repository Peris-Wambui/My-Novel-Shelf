Rails.application.routes.draw do
  # resources :novels, ath: 'api/novels'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'
   # resources :bookworms, path: "api/bookworms"
  resources :bookworms
  resources :novels
  post '/login', to: 'session#create'
  delete 'logout', to: 'sessions#destroy'
  post '/signup', to: 'bookworms#create'
  get '/me', to: 'bookworms#show'
  get '/bookworm', to: 'bookworms#index'
 
end
