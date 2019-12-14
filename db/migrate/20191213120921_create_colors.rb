class CreateColors < ActiveRecord::Migration[5.2]
  def change
    create_table :colors do |t|
      t.string :color
      t.string :x
      t.string :y
      t.references :review, foreign_key: true
      t.timestamps
    end
  end
end
