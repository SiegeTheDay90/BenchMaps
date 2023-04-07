# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Bench.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('benches')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'DemoUser', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 6),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Creating benches..."
  
    Bench.create!(
      title: "Andrew Haswell Green Bench",
      description: Faker::Lorem.paragraph(sentence_count: 3),
      price: 25.75,
      seating: 2,
      lat: 40.79532,
      lng: (360 + -73.95428)%360
    )
  
    Bench.create!(
      title: "Charles B. Stover Bench",
      description: Faker::Lorem.paragraph(sentence_count: 3),
      price: 39.95,
      seating: 3,
      lat: 40.78006,
      lng: (360 + -73.96963)%360
    )
  
    Bench.create!(
      title: "Sunnyside Park Bench",
      description: Faker::Lorem.paragraph(sentence_count: 3),
      price: 14.99,
      seating: 4,
      lat: 40.74150,
      lng: (360 + -73.92284)%360
    )
  
    puts "Done!"
  end