require 'redmine'

require_dependency 'redmine_close_button/hooks'

Redmine::Plugin.register :redmine_close_button do
  name 'Redmine Close Issue Button Plugin'
  author 'Undev'
  description 'The Close Issue button that enables you to close issues quickly.'
  version '0.0.8'
  url 'http://github.com/Undev/redmine_close_button' if respond_to?(:url)
  author_url 'http://github.com/Undev'
  requires_redmine :version_or_higher => '0.9.0'
end

