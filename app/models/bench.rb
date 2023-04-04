# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  price       :float            not null
#  seating     :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Bench < ApplicationRecord
    validates :title, :price, :seating, :lat, :lng, presence: true
    validates :title, uniqueness: true
    validates :lat, uniqueness: {scope: :lng, message: "There's already a bench there."}
end
