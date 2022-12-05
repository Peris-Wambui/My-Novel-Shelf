class NovelsController < ApplicationController
    # all the crud functionalities
    # index, create, show update destroy
    def index
        @novels = Novel.all
        # render json: @novels, status:200
        json_res(@novels)
    end

    

    private
    def json_res(object,status = :ok)
        render json: object, status: status
    end
end

