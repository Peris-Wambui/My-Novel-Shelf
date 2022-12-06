class NovelSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :read, :bookworm_id
  # belongs_to :bookworm
end
