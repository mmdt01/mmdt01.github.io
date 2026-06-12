source "https://rubygems.org"

# Matches the exact Jekyll + plugin versions GitHub Pages runs,
# so a local `bundle exec jekyll serve` mirrors production.
gem "github-pages", group: :jekyll_plugins

# Plugins referenced in _config.yml
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows / macOS timezone + file-watching helpers (harmless elsewhere).
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
