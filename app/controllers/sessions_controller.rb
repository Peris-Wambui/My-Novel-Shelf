class SessionsController < ApplicationController
      #To use sessions in an API only app you need to the following configurations to the `application.rb` file
    # config.session_store :cookie_store, key: '_interslice_session'
    # config.middleware.use ActionDispatch::Cookies
    # config.middleware.use config.session_store, config.session_options

    # We will the use the `create_session` action in the Application controller to make available accross the app
    def create_session #Think of this as a login action
        #At this point we authenticate the user and we begin the session
        @bookworm = Bookworm.authenticate(params[:email], params[:password])
        if @bookworm
            session[:bookworm_id] = @bookworm.id #We assign the author id as the value to our author_id cookie
            json_res(@bookworm)
        else
            json_res({message: "Wrong Email or Password. Try Again"})
        end
    end

    def destroy #Consider this as a logout action
        #Here we just reset the author_id cookie to nil
        session[:bookworm_id] = nil
        json_res({message: "Successfully logged out!"})
    end
end

# def create
#     bookworm = Bookworm.find_by(email: params[:email])
#     if bookworm&.authenticate(params[:password])
#         session[:bookworm_id] = bookworm.id
#         render json: bookworm, status: : ok
#     else
#         json_res({message: "Wrong Email or Password. Try Again"})
#     end

# end

