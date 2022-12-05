class Bookworm < ApplicationRecord
    attr_accessor :password
    validates_confirmation_of :password
    validates :email, :presence => true, uniqueness => true

    has_many = true
end
