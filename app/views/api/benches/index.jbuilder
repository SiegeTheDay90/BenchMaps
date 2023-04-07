@benches.each do |bench|
    json.set! bench.id do
        json.extract!(
            bench,
            :id, 
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
end