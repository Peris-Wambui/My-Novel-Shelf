class Novel < ApplicationRecord
    validates :title, presence: true
    validates :author, presence: true
    validates :description, presence: true
    
    belongs_to
end
