class Novel < ApplicationRecord
    validates :title, presence: true
    validates :author, presence: true
    validates :description, presence: true
    validates :read, presence: true
    validates :bookworm_id, presence: true

    belongs_to :bookworm
end
