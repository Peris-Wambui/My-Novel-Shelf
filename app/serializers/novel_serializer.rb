class NovelSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :read
  belongs_to :bookworm
end
