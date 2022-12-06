class NovelWithBookwormSerializer < ActiveModel::Serializer
  attributes :id, :title, :read, :description, :author
  
  belongs_to :bookworm
end
