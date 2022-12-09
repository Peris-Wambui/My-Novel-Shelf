class ApplicationController < ActionController::API
    # include ActionController::Cookies
    include ActionController::Helpers
    include Response
    helper_method :current_user

rescue_from ActiveRecord::RecordInvalid do |exception|
    json_res({message: exception.message}, status = 422)
end

rescue_from ActiveRecord::RecordNotFound do |exception|
    json_res({message: exception.message}, status = 404)
end

def current_user #We use this action to monitor who is logged in based on the session
    if session[:author_id]
        @current_user = Author.find(session[:author_id])
    end
end

def authorize
    if !current_user
      json_res({message:'You are not authorized to perform this action. You have to log in'}, status = 401)
    end
end

    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end
end
