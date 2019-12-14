class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body
      t.references :color, foreign_key: true
      t.references :movie, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
