class ReviewsController < ApplicationController
    def show
        review = Review.find_by(id: params[:id])
        render json: review, only: [:id, :comment, :recipe_id]
    end

    def index
        reviews = Review.all
        render json: reviews, only: [:id, :comment, :recipe_id]
    end

    def create
        review = Review.new(review_params)
    
        if review.save
            
            render json: review, only: [:id, :comment, :recipe_id]
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.delete
        render json: review
    end

    private
        def review_params
            params.require(:review).permit(:id, :comment, :recipe_id)
        end
end

