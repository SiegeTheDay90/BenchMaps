class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new({username: params[:username], email: params[:email], password: params[:password]})

    if @user.save
      login!(@user)
      render json: {user: {email: @user.email, username: @user.username}}
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: {id: @user.id, username: @user.username, email: @user.email}
    else
      render json: {errors: ["User does not exist."], status: 422}
    end
  end
end
