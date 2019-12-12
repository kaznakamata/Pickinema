# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## reviewテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|color|references|null: false, foreign_key: true, index|
|movie|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :movie
- belongs_to :color


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|mail|string|null: false|
|password|string|null: false|

### Association
- has_many :reviews


## colorテーブル
|Column|Type|Options|
|------|----|-------|
|color|string|null: false|
|x|string|null: false, index|
|y|string|null: false, index|

### Association
- belongs_to :review
- belongs_to :movie


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
