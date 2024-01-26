#!/usr/bin/env sh

# Jekyll does not work on ruby v3.3*
rvm install "ruby-2.6"
rvm use

# Install the version of Bundler specified in the Gemfile.lock
if [ -f Gemfile.lock ] && grep "BUNDLED WITH" Gemfile.lock > /dev/null; then
  cat Gemfile.lock | tail -n 2 | grep -C2 "BUNDLED WITH" | tail -n 1 | xargs gem install bundler -v
fi

# If there's a Gemfile, then run `bundle install`
# It's assumed that the Gemfile will install jekyll too
if [ -f Gemfile ]; then
  bundle install
fi

bundle exec jekyll serve --force-polling
