class CreateBenches < ActiveRecord::Migration[7.0]
  def change
    create_table :benches do |t|
      t.string :title, null: false, index: {unique: true}
      t.text :description
      t.float :price, null: false
      t.integer :seating, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
