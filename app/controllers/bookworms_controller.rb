class BookwormsController < ApplicationController

    def index
        @bookworms = Bookworm.all
        render json: @bookworms, status: :ok
    end

      def create
        bookworm = Bookworm.create(bookworm_params)
        if bookworm.valid?
            session[:bookworm_id] =bookworm.id
            render json: bookworm, status: :created
        else
            render json: {errors: bookworm.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        bookworm = Bookworm.find_by(id: session[:bookworm_id])
        if bookworm 
          render json: bookworm
        else
          render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    
    private
    
    def bookworm_params
        params.permit(:email, :password, :password_confirmation)
    end
    
end
