class CreateBookworms < ActiveRecord::Migration[7.0]
  def change
    create_table :bookworms do |t|
      

      t.timestamps
    end
  end
end
