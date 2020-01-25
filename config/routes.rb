Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pft#index"

  favicon_link_tag(source='/favicon.ico', options={})
  
  get 'work', to: 'pft#work'
  get 'contact', to: 'pft#contact'
  get 'detail', to: 'pft#detail'
  get 'detail2', to: 'pft#detail2'
end
