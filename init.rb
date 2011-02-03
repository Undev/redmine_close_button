require 'redmine'

require_dependency 'redmine_close_button/hooks'

Redmine::Plugin.register :redmine_close_button do
  name 'Redmine Close Button plugin'
  author 'akzhan.abdulin@gmail.com'
  description 'This is the Close Issue button plugin for Redmine'
  version '0.0.3'
  url 'http://github.com/Undev/redmine_close_button'
  author_url 'http://github.com/Undev'
end

