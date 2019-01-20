class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         # :omniauthable, omniauth_providers: [:twitter]
  has_many :posts
end
