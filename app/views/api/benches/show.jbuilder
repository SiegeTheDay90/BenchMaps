json.set! @bench.id do
    json.extract!(
        @bench, 
        :title, 
        :description, 
        :price, 
        :seating, 
        :lat, 
        :lng, 
        :created_at, 
        :updated_at
    )
end