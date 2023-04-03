class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: {errors: @bench.errors.full_messages, status: 422}
    end
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
    # render json: {bench: @bench}
  end

  private

  def bench_params
    params.permit(:title, :description, :price, :seating, :lat, :lng)
  end
end
