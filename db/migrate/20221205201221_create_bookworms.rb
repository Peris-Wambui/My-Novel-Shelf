class CreateBookworms < ActiveRecord::Migration[7.0]
  def change
    create_table :bookworms do |t|
      
      t.column :email, :string
      t.column :password_hash, :string
      t.column :password_salt, string

      t.timestamps
    end
  end
end
