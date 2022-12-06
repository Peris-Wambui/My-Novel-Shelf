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
        @novel = Novel.create!(novel_params)
        json_res(@novel, status = 201)
    end

    def update
        @novel = Novel.find(params[:id])
        @novel.update(novel_params)
        json_res(@novel, status = 200)
    end

    def destroy
        @novel = Novel.find(params[:id])
        @novel.destroy
        json_res({message: "#{@novel.title} deleted seccessfuly"},status = 200)
    end


    private
    def novel_params
        params.permit(:title, :author, :description, :read, :bookworm_id)
    end
end

