class BookwormsController < ApplicationController

    def index
        bookworms = Bookworm.all
        render json: bookworms
    end
    
end
