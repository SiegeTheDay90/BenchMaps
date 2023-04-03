class Bench < ApplicationRecord
    validates :title, :price, :seating, :lat, :lng, presence: true
    validates :title, uniqueness: true
    validates :lat, uniqueness: {scope: :lng, message: "There's already a bench there."}
end
