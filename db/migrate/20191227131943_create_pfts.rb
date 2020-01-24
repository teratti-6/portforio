class CreatePfts < ActiveRecord::Migration[5.2]
  def change
    create_table :pfts do |t|

      t.timestamps
    end
  end
end
