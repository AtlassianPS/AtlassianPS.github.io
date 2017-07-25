# Basic setup
choco install ruby -y
gem install bundler
gem install jekyll
gem install github-pages

# Build localy
bundle exec jekyll build
bundle exec jekyll serve
