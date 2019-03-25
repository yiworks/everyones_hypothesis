class LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id, post_id: params[:post_id])

    respond_to do |format|
      if @like.save
        format.html { redirect_to :back, notice: 'Like was successfully created.' }
        format.json { render json: { status: 'success', like: @like, counts: Like.where(post_id: @like.post_id).count, liked: true } }
      else
        format.html { render :new }
        format.json { render json: @like.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy

  end
end
