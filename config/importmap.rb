# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@rails/actioncable", to: "https://ga.jspm.io/npm:@rails/actioncable@6.1.5/app/assets/javascripts/action_cable.js"
pin "nanoid", to: "https://ga.jspm.io/npm:nanoid@3.3.1/index.browser.js"
