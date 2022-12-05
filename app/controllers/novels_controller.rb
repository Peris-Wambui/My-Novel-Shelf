class NovelsController < ApplicationController
    # all the crud functionalities
    # index, create, show update destroy
    def index
        @novels = Novel.all
        # render json: @novels, status:200
        json_res(@novels)
    end

    def show
        # @novel = Novel.find_by(id:params[:id])
        @novel = Novel.find(params[:id])
        render json:(@novel)
    end

    def create
        @novel = Novel.create(novel_params)
        json_res(@novel, status = 201)
    end



    private
    def json_res(object,status = :ok)
        render json: object, status: status
    end

    def novel_params
        params.permit(:title, :author, :description)
    end
end

