class Bookworm < ApplicationRecord
    attr_accessor :password
    # validates_confirmation_of :password
    validates :email, :presence => true 
    # uniqueness => true
    before_save :encrypt_password

    has_many :novels,dependent: :destroy

    def encrypt_password
        self.password_salt = BCrypt::Engine.generate_salt
        self.password_hash = BCrypt::Engine.hash_secret(password,password_salt)
    end

    def self.authenticate(email,password)
        @bookworm = Bookworm.find_by("email =?", email)
        if @bookworm && @bookworm.password_hash ==
            BCrypt::Engine.hash_secret(password, @bookworm.password_salt)
            json_res(@bookworm, status = 301)
        else
            json_res({message: "wrong Email or Password. Try again"})
        end
    end
end