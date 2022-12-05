class AddBookwormToNovels < ActiveRecord::Migration[7.0]
  def change
    add_column :novels, :bookworm_id, :integer
    add_index :novels, :bookworm_id
  end
end
