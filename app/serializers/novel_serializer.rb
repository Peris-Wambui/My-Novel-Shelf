class NovelSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author
end
