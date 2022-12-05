# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

class Seed
    def self.begin
        seed =Seed.new
        seed.generate_novels
    end
    def generate_novels
        5.times do |i|
            novel = Novel.create!(
                title:Faker::Movie.title,
                author:Faker::Name.name,
                description:Faker::Lorem.paragraph(sentence_count:4)
            )
        end
    end
end

Seed.begin
