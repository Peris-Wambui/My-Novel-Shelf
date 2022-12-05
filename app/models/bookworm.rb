class Bookworm < ApplicationRecord
    attr_accessor :password
    validates_confirmation_of :password
    validates :email, :presence => true, uniqueness => true

    has_many = true

    def encrypt_password
        self.password_salt = BCrypt::Engine.generate_salt
        self.password_hash = BCrypt::Engine.has_secret(password,password_salt)
    end
end