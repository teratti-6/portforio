class Pft < ApplicationRecord
  def change
    create_table :pft do |t|
      t.timestamps
    end
  end
end
