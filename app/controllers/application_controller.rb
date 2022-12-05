class ApplicationController < ActionController::API
    include ActionController::Cookies
    include Response

rescue_from ActiveRecord::RecordInvalid do |exception|
    json_res({message: exception.message}, status = 422)
end

rescue_from ActiveRecord::RecordNotFound do |exception|
    json_res({message: exception.message}, status = 404)
end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
